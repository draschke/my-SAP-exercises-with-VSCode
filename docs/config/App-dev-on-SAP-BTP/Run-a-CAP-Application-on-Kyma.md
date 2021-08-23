---
sidebarDepth: 3
---
# Run a CAP Application on Kyma

- [Run a CAP Application on Kyma](https://sap-samples.github.io/cloud-cap-risk-management/Kyma/) with this [VS Dev Container](https://github.com/draschke/vsc-sap-hana-mta-dev-env-node14x/blob/ef0b07b2c5621b9daead27db90d8c2f1ace6bc2a/.devcontainer)

- You can follow all the steps outlined here without having to install anything else if you use this mentioned [VS Dev Container](https://github.com/draschke/vsc-sap-hana-mta-dev-env-node14x/blob/ef0b07b2c5621b9daead27db90d8c2f1ace6bc2a/.devcontainer).  
  This walkthrough only provides my additional quidance for this awesome tutorial from SAP.

## Run the CAP application locally in a Dev Container

![Dev Container for CAP on Kyma](../images/App-dev-on-SAP-BTP/1/1cap-kyma-app.png)

## Start the CAP app in a separate folder with the command "code ."

```bash
node ➜ /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app (main ✗)
$ code .  
```

![CAP folder](../images/App-dev-on-SAP-BTP/1/1cap-kyma-app.png)

Build the docker image locally
  
```bash
node ➜ /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app (main ✗)
$ docker build -t cpapp . 
    --> Image: cpapp:latest (030cbbeca7fb)   
```

![Check for the image via VS Code](../images/App-dev-on-SAP-BTP/1/3create-image-cap-kyma-app.png)

## Run the Docker Container

You can run the docker container and look inside its contents

```bash
node ➜ /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app (main ✗)
$ docker run -p 4004:4004 -t cpapp 
    --> Image: cpapp:latest (030cbbeca7fb)   
```

## Run Your CAP Service

Check for the created container

Attach Shell

![attach-shell-cap-kyma-app](../images/App-dev-on-SAP-BTP/1/4attach-shell-cap-kyma-app.png)

Check for your files: commad ls

![ls-attach-shell-cap-kyma-app](../images/App-dev-on-SAP-BTP/1/5-ls-attach-shell-cap-kyma-app.png)

Run the container using the side bar of VS Code

![run-container-locally-cap-kyma-app](../images/App-dev-on-SAP-BTP/1/8-run-container-locally-cap-kyma-app.png)

![open-in-browser-shell](../images/App-dev-on-SAP-BTP/1/6-open-in-browser-shell-cap-kyma-app.png)

![browser-shell-cap-kyma](../images/App-dev-on-SAP-BTP/1/7-browser-shell-cap-kyma-app.png)

## Deploy to Kyma

Log In to Kyma (Kubernetes Cluster)

Get your Kubeconfig as described (CF Login required)

Update your kubeconfig.yml  (keep in mind, secrets on Kyma are changing all 8 hours (I guess))
  
```bash
node ➜ /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app (main ✗)
$ env | grep KUBECONFIG
KUBECONFIG=/usr/local/share/kube-devcontainer/kubeconfig.yml   
```

Maybe you want to establish a CLI connection

```bash
cf login -a https://api.cf.eu10.hana.ondemand.com -u email -p psw --skip-ssl-validation
```

Check for your pods, if you have any

```bash
node ➜ /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app (main ✗)
$ kubectl get pods
No resources found in default namespace.
```

Check for your namespaces

```bash
node ➜ /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app (main ✗)
$ kubectl get namespaces
NAME               STATUS   AGE
compass-system     Active   8d
default            Active   8d
```

Prepare the Docker Registry as described

Add the stable Helm Chart repository to the helm CLI

```bash
node ➜ /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app (main ✗)
$ helm repo add stable https://charts.helm.sh/stable
```

Install the Helm Chart for a docker registry

```bash
node ➜ /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app (main ✗)
$ helm install docker-registry stable/docker-registry
```

You need to make the docker registry available on the public internet. The details to this step are explained later. Run the following commands

```bash
node ➜ /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app (main ✗) 
$ kubectl apply -f - <<EOF
apiVersion: gateway.kyma-project.io/v1alpha1
kind: APIRule
metadata:
  labels:
    app: docker-registry
  name: docker-registry
spec:
  service:
    host: docker-registry
    name: docker-registry
    port: 5000
  gateway: kyma-gateway.kyma-system.svc.cluster.local
  rules:
    - path: /.*
      methods: ["GET", "HEAD" ]
      accessStrategies:
        - handler: noop
      mutators: []
EOF
```

## Push the docker image (my journey comes to the end)

```bash
node ➜ /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app (main ✗)
$ kubectl port-forward deployment/docker-registry 5000:5000 &
[1] 6219

node ➜ /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app (main ✗) 
my output:
Forwarding from 127.0.0.1:5000 -> 5000
```

Issue: connection refused

```bash
node ➜ /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app (main ✗)
$ docker push 0.0.0.0:5000/cpapp
The push refers to repository [0.0.0.0:5000/cpapp]
Get http://0.0.0.0:5000/v2/: dial tcp 0.0.0.0:5000: connect: connection refused
```

Issue: It don't see this expected output

```bash
Forwarding from 127.0.0.1:5000 -> 5000
Forwarding from [::1]:5000 -> 5000
```

![Issue Push Image failed](../images/App-dev-on-SAP-BTP/1/9-docker-push-cap-kyma-app.png)

## Any help to solve the problem would be great

[Issue Push Image failed](https://github.com/draschke/vsc-sap-hana-mta-dev-env-node14x/issues/5)
