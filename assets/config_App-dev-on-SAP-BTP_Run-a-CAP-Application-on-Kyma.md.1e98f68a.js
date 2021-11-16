import{_ as s,c as t,o,a as e,b as n}from"./app.80f3e7ce.js";var a="/my-SAP-exercises-with-VSCode/assets/1cap-kyma-app.6eaab491.png",l="/my-SAP-exercises-with-VSCode/assets/3create-image-cap-kyma-app.626dae6a.png",r="/my-SAP-exercises-with-VSCode/assets/4attach-shell-cap-kyma-app.4d7a5c2b.png",c="/my-SAP-exercises-with-VSCode/assets/5-ls-attach-shell-cap-kyma-app.74e2c8a9.png",p="/my-SAP-exercises-with-VSCode/assets/8-run-container-locally-cap-kyma-app.38633d57.png",i="/my-SAP-exercises-with-VSCode/assets/6-open-in-browser-shell-cap-kyma-app.a3a49b6b.png",u="/my-SAP-exercises-with-VSCode/assets/7-browser-shell-cap-kyma-app.58a1ca9e.png",d="/my-SAP-exercises-with-VSCode/assets/9-docker-push-cap-kyma-app.a5b4694b.png";const ye='{"title":"Run a CAP Application on Kyma","description":"In this tutorial, you deploy an application built with CAP to an SAP BTP, Kyma runtime cluster. The CAP application has an OData service, SAP Fiori UI and uses SAP HANA as a database.","frontmatter":{"sidebarDepth":3,"head":[["meta",{"name":"title","content":"Run a CAP Application on Kyma"}],["meta",{"name":"description","content":"In this tutorial, you deploy an application built with CAP to an SAP BTP, Kyma runtime cluster. The CAP application has an OData service, SAP Fiori UI and uses SAP HANA as a database."}],["meta",{"name":"keywords","content":"SAP HANA BTP, CAP, K8s, Kyma, Kubernetes, DevOps, VS Code Dev Container"}]]},"headers":[{"level":2,"title":"Run the CAP application locally in a Dev Container","slug":"run-the-cap-application-locally-in-a-dev-container"},{"level":2,"title":"Start the CAP app in a separate folder with the command \\"code .\\"","slug":"start-the-cap-app-in-a-separate-folder-with-the-command-code"},{"level":2,"title":"Run the Docker Container","slug":"run-the-docker-container"},{"level":2,"title":"Run Your CAP Service","slug":"run-your-cap-service"},{"level":2,"title":"Deploy to Kyma","slug":"deploy-to-kyma"},{"level":2,"title":"Push the docker image (my journey comes to the end)","slug":"push-the-docker-image-my-journey-comes-to-the-end"},{"level":2,"title":"Any help to solve the problem would be great","slug":"any-help-to-solve-the-problem-would-be-great"}],"relativePath":"config/App-dev-on-SAP-BTP/Run-a-CAP-Application-on-Kyma.md","lastUpdated":1637069977803}',m={},h=e("h1",{id:"run-a-cap-application-on-kyma",tabindex:"-1"},[n("Run a CAP Application on Kyma "),e("a",{class:"header-anchor",href:"#run-a-cap-application-on-kyma","aria-hidden":"true"},"#")],-1),b=e("ul",null,[e("li",null,[e("p",null,[e("a",{href:"https://sap-samples.github.io/cloud-cap-risk-management/Kyma/",target:"_blank",rel:"noopener noreferrer"},"Run a CAP Application on Kyma"),n(" with this "),e("a",{href:"https://github.com/draschke/vsc-sap-hana-mta-dev-env-node14x/blob/ef0b07b2c5621b9daead27db90d8c2f1ace6bc2a/.devcontainer",target:"_blank",rel:"noopener noreferrer"},"VS Dev Container")])]),e("li",null,[e("p",null,[n("You can follow all the steps outlined here without having to install anything else if you use this mentioned "),e("a",{href:"https://github.com/draschke/vsc-sap-hana-mta-dev-env-node14x/blob/ef0b07b2c5621b9daead27db90d8c2f1ace6bc2a/.devcontainer",target:"_blank",rel:"noopener noreferrer"},"VS Dev Container"),n("."),e("br"),n(" This walkthrough only provides my additional quidance for this awesome tutorial from SAP.")])])],-1),k=e("h2",{id:"run-the-cap-application-locally-in-a-dev-container",tabindex:"-1"},[n("Run the CAP application locally in a Dev Container "),e("a",{class:"header-anchor",href:"#run-the-cap-application-locally-in-a-dev-container","aria-hidden":"true"},"#")],-1),_=e("p",null,[e("img",{src:a,alt:"Dev Container for CAP on Kyma"})],-1),v=e("h2",{id:"start-the-cap-app-in-a-separate-folder-with-the-command-code",tabindex:"-1"},[n('Start the CAP app in a separate folder with the command "code ." '),e("a",{class:"header-anchor",href:"#start-the-cap-app-in-a-separate-folder-with-the-command-code","aria-hidden":"true"},"#")],-1),y=e("div",{class:"language-bash line-numbers-mode"},[e("pre",null,[e("code",null,[n("node \u279C /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app "),e("span",{class:"token punctuation"},"("),n("main \u2717"),e("span",{class:"token punctuation"},")"),n(`
$ code `),e("span",{class:"token builtin class-name"},"."),n(`  
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),g=e("p",null,[e("img",{src:a,alt:"CAP folder"})],-1),f=e("p",null,"Build the docker image locally",-1),w=e("div",{class:"language-bash line-numbers-mode"},[e("pre",null,[e("code",null,[n("node \u279C /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app "),e("span",{class:"token punctuation"},"("),n("main \u2717"),e("span",{class:"token punctuation"},")"),n(`
$ docker build -t cpapp `),e("span",{class:"token builtin class-name"},"."),n(` 
    --`),e("span",{class:"token operator"},">"),n(" Image: cpapp:latest "),e("span",{class:"token punctuation"},"("),n("030cbbeca7fb"),e("span",{class:"token punctuation"},")"),n(`   
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])],-1),A=e("p",null,[e("img",{src:l,alt:"Check for the image via VS Code"})],-1),C=e("h2",{id:"run-the-docker-container",tabindex:"-1"},[n("Run the Docker Container "),e("a",{class:"header-anchor",href:"#run-the-docker-container","aria-hidden":"true"},"#")],-1),P=e("p",null,"You can run the docker container and look inside its contents",-1),S=e("div",{class:"language-bash line-numbers-mode"},[e("pre",null,[e("code",null,[n("node \u279C /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app "),e("span",{class:"token punctuation"},"("),n("main \u2717"),e("span",{class:"token punctuation"},")"),n(`
$ docker run -p `),e("span",{class:"token number"},"4004"),n(`:4004 -t cpapp 
    --`),e("span",{class:"token operator"},">"),n(" Image: cpapp:latest "),e("span",{class:"token punctuation"},"("),n("030cbbeca7fb"),e("span",{class:"token punctuation"},")"),n(`   
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])],-1),x=e("h2",{id:"run-your-cap-service",tabindex:"-1"},[n("Run Your CAP Service "),e("a",{class:"header-anchor",href:"#run-your-cap-service","aria-hidden":"true"},"#")],-1),I=e("p",null,"Check for the created container",-1),K=e("p",null,"Attach Shell",-1),D=e("p",null,[e("img",{src:r,alt:"attach-shell-cap-kyma-app"})],-1),R=e("p",null,"Check for your files: commad ls",-1),V=e("p",null,[e("img",{src:c,alt:"ls-attach-shell-cap-kyma-app"})],-1),$=e("p",null,"Run the container using the side bar of VS Code",-1),T=e("p",null,[e("img",{src:p,alt:"run-container-locally-cap-kyma-app"})],-1),B=e("p",null,[e("img",{src:i,alt:"open-in-browser-shell"})],-1),F=e("p",null,[e("img",{src:u,alt:"browser-shell-cap-kyma"})],-1),E=e("h2",{id:"deploy-to-kyma",tabindex:"-1"},[n("Deploy to Kyma "),e("a",{class:"header-anchor",href:"#deploy-to-kyma","aria-hidden":"true"},"#")],-1),N=e("p",null,"Log In to Kyma (Kubernetes Cluster)",-1),O=e("p",null,"Get your Kubeconfig as described (CF Login required)",-1),j=e("p",null,"Update your kubeconfig.yml (keep in mind, secrets on Kyma are changing all 8 hours (I guess))",-1),U=e("div",{class:"language-bash line-numbers-mode"},[e("pre",null,[e("code",null,[n("node \u279C /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app "),e("span",{class:"token punctuation"},"("),n("main \u2717"),e("span",{class:"token punctuation"},")"),n(`
$ `),e("span",{class:"token function"},"env"),n(),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"grep"),n(` KUBECONFIG
`),e("span",{class:"token assign-left variable"},"KUBECONFIG"),e("span",{class:"token operator"},"="),n(`/usr/local/share/kube-devcontainer/kubeconfig.yml   
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])],-1),G=e("p",null,"Maybe you want to establish a CLI connection",-1),H=e("div",{class:"language-bash line-numbers-mode"},[e("pre",null,[e("code",null,`cf login -a https://api.cf.eu10.hana.ondemand.com -u email -p psw --skip-ssl-validation
`)]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br")])],-1),Y=e("p",null,"Check for your pods, if you have any",-1),L=e("div",{class:"language-bash line-numbers-mode"},[e("pre",null,[e("code",null,[n("node \u279C /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app "),e("span",{class:"token punctuation"},"("),n("main \u2717"),e("span",{class:"token punctuation"},")"),n(`
$ kubectl get pods
No resources found `),e("span",{class:"token keyword"},"in"),n(` default namespace.
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])],-1),q=e("p",null,"Check for your namespaces",-1),M=e("div",{class:"language-bash line-numbers-mode"},[e("pre",null,[e("code",null,[n("node \u279C /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app "),e("span",{class:"token punctuation"},"("),n("main \u2717"),e("span",{class:"token punctuation"},")"),n(`
$ kubectl get namespaces
NAME               STATUS   AGE
compass-system     Active   8d
default            Active   8d
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br")])],-1),z=e("p",null,"Prepare the Docker Registry as described",-1),J=e("p",null,"Add the stable Helm Chart repository to the helm CLI",-1),Q=e("div",{class:"language-bash line-numbers-mode"},[e("pre",null,[e("code",null,[n("node \u279C /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app "),e("span",{class:"token punctuation"},"("),n("main \u2717"),e("span",{class:"token punctuation"},")"),n(`
$ helm repo `),e("span",{class:"token function"},"add"),n(` stable https://charts.helm.sh/stable
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),W=e("p",null,"Install the Helm Chart for a docker registry",-1),X=e("div",{class:"language-bash line-numbers-mode"},[e("pre",null,[e("code",null,[n("node \u279C /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app "),e("span",{class:"token punctuation"},"("),n("main \u2717"),e("span",{class:"token punctuation"},")"),n(`
$ helm `),e("span",{class:"token function"},"install"),n(` docker-registry stable/docker-registry
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),Z=e("p",null,"You need to make the docker registry available on the public internet. The details to this step are explained later. Run the following commands",-1),ee=e("div",{class:"language-bash line-numbers-mode"},[e("pre",null,[e("code",null,[n("node \u279C /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app "),e("span",{class:"token punctuation"},"("),n("main \u2717"),e("span",{class:"token punctuation"},")"),n(` 
$ kubectl apply -f - `),e("span",{class:"token operator"},"<<"),e("span",{class:"token string"},`EOF
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
EOF`),n(`
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br"),e("span",{class:"line-number"},"21"),e("br")])],-1),ne=e("h2",{id:"push-the-docker-image-my-journey-comes-to-the-end",tabindex:"-1"},[n("Push the docker image (my journey comes to the end) "),e("a",{class:"header-anchor",href:"#push-the-docker-image-my-journey-comes-to-the-end","aria-hidden":"true"},"#")],-1),ae=e("div",{class:"language-bash line-numbers-mode"},[e("pre",null,[e("code",null,[n("node \u279C /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app "),e("span",{class:"token punctuation"},"("),n("main \u2717"),e("span",{class:"token punctuation"},")"),n(`
$ kubectl port-forward deployment/docker-registry `),e("span",{class:"token number"},"5000"),n(":5000 "),e("span",{class:"token operator"},"&"),n(`
`),e("span",{class:"token punctuation"},"["),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},"]"),n(),e("span",{class:"token number"},"6219"),n(`

node \u279C /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app `),e("span",{class:"token punctuation"},"("),n("main \u2717"),e("span",{class:"token punctuation"},")"),n(` 
my output:
Forwarding from `),e("span",{class:"token number"},"127.0"),n(".0.1:5000 -"),e("span",{class:"token operator"},">"),n(),e("span",{class:"token number"},"5000"),n(`
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br")])],-1),se=e("p",null,"Issue: connection refused",-1),te=e("div",{class:"language-bash line-numbers-mode"},[e("pre",null,[e("code",null,[n("node \u279C /workspaces/vsc-sap-hana-mta-dev-env-node14x/cap-kyma-app "),e("span",{class:"token punctuation"},"("),n("main \u2717"),e("span",{class:"token punctuation"},")"),n(`
$ docker push `),e("span",{class:"token number"},"0.0"),n(`.0.0:5000/cpapp
The push refers to repository `),e("span",{class:"token punctuation"},"["),e("span",{class:"token number"},"0.0"),n(".0.0:5000/cpapp"),e("span",{class:"token punctuation"},"]"),n(`
Get http://0.0.0.0:5000/v2/: dial tcp `),e("span",{class:"token number"},"0.0"),n(`.0.0:5000: connect: connection refused
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br")])],-1),oe=e("p",null,"Issue: It don't see this expected output",-1),le=e("div",{class:"language-bash line-numbers-mode"},[e("pre",null,[e("code",null,[n("Forwarding from "),e("span",{class:"token number"},"127.0"),n(".0.1:5000 -"),e("span",{class:"token operator"},">"),n(),e("span",{class:"token number"},"5000"),n(`
Forwarding from `),e("span",{class:"token punctuation"},"["),n("::1"),e("span",{class:"token punctuation"},"]"),n(":5000 -"),e("span",{class:"token operator"},">"),n(),e("span",{class:"token number"},"5000"),n(`
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),re=e("p",null,[e("img",{src:d,alt:"Issue Push Image failed"})],-1),ce=e("h2",{id:"any-help-to-solve-the-problem-would-be-great",tabindex:"-1"},[n("Any help to solve the problem would be great "),e("a",{class:"header-anchor",href:"#any-help-to-solve-the-problem-would-be-great","aria-hidden":"true"},"#")],-1),pe=e("p",null,[e("a",{href:"https://github.com/draschke/vsc-sap-hana-mta-dev-env-node14x/issues/5",target:"_blank",rel:"noopener noreferrer"},"Issue Push Image failed")],-1),ie=[h,b,k,_,v,y,g,f,w,A,C,P,S,x,I,K,D,R,V,$,T,B,F,E,N,O,j,U,G,H,Y,L,q,M,z,J,Q,W,X,Z,ee,ne,ae,se,te,oe,le,re,ce,pe];function ue(de,me,he,be,ke,_e){return o(),t("div",null,ie)}var ge=s(m,[["render",ue]]);export{ye as __pageData,ge as default};