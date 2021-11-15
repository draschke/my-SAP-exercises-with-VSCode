---
sidebarDepth: 3
head:
  - - meta
    - name: title
      content: "Devtoberfest 2021 Frontend Week Coding Challenge with VS Code and DevContainer"
  - - meta
    - name: description
      content: "This is a tutorial for the Devtoberfest 2021 Coding Challenge of week 6. There was an app with a bad loading performance and we are going to optimize it."
  - - meta
    - name: keywords
      content: UI5 Devtoberfest 2021, VS Code UI5, Devtoberfest 2021, VS Code Dev Container
---

# Optimize the Devtoberfest 2021 Coding Challenge - App

 In this exercise I will show you, how we can optimize the [Devtoberfest 2021 Coding Challenge - App](https://github.com/SAP-samples/devtoberfest-2021-frontend-coding-challenge). Following this SAP developer tutorial, you will learn more useful hints to optimize a Fiori UI5 app. For this tutorial I recommend using this [.devcontainer](https://github.com/draschke/devtoberfest-2021-frontend-coding-challenge/tree/main/.devcontainer) and you won't have to install any additional programs.
 If you have questions for setting up a DevContainer, you can follow all the steps already explained in this documentation [VS Code Dev Container for SAP HANA App development](https://draschke.github.io/vsc-sap-hana-mta-dev-env-node14x/).

## Preparations

- Use this [.devcontainer](https://github.com/draschke/devtoberfest-2021-frontend-coding-challenge/tree/main/.devcontainer) and ***no additional installations*** are necessary for this exercise!

## Kick off development

Step 1: Set up local development environment

Use this [.devcontainer](https://github.com/draschke/devtoberfest-2021-frontend-coding-challenge/tree/main/.devcontainer)

Step 2: npm update and installation

```bash
$ npm install -g npm
$ npm outdated
$ npm update
$ npm install -g npm-check-updates
$ ncu -u
--> output
 @ui5/cli                   ^2.11.2  →  ^2.14.0     
 karma                       ^6.3.4  →   ^6.3.8     
 prettier                    ^2.3.2  →   ^2.4.1     
 ui5-middleware-livereload   ^0.5.4  →   ^0.5.8  

npm i
```

Step 3: Use the latest UI5 version (ui5.yaml)

```bash
$ ui5 use sapui5@latest
--> output
Updated configuration written to ui5.yaml
This project is now using SAPUI5 version 1.96.0
```

Step 4: Check for UI5 npm versions

```bash
$ ui5 versions
INFO: Using local @ui5/cli installation
-->
@ui5/cli:      2.14.0
@ui5/builder:  2.11.1
@ui5/server:   2.4.0
@ui5/fs:       2.0.6
@ui5/project:  2.6.0
@ui5/logger:   2.0.1
```

Now should you local environment up to date.

Step 6: Performance Checklist

There is a great [performance checklist](https://ui5.sap.com/#/topic/9c6400eb7dc145b78e94a81e6e390780) which you can follow at first

A big help for all your investigations is the [Support Assistant](https://ui5.sap.com/#/topic/57ccd7d7103640e3a187ed55e1d2c163.html)

Add the parameter ***?sap-ui-debug=true*** at the end on your index.html file, like this
App-URL: http://localhost:8080/index.html?sap-ui-debug=true

Now you can open the tool via the keyboard shortcut ***Ctrl Shift Alt P*** 
After that you can analyze your App by pressing the ***Analyze*** Button on the top of this window.

You will see a lot of issues which should be fixed. Lets do it.

Enable Asynchronous Loading in the Bootstrap

index.html

```html
<script 
id="sap-ui-bootstrap"
src="/resources/sap-ui-core.js"
data-sap-ui-theme="sap_belize"
data-sap-ui-compatVersion="edge"
data-sap-ui-async="true"
data-sap-ui-onInit="module:my/app/main"
data-sap-ui-resourceroots='{"my.app": "./"}'>
</script>
```

Load SAPUI5 from the Content Delivery Network (CDN)
Specific Version
index.html
```html
<script id="sap-ui-bootstrap"
    type="text/javascript"
    src="https://sapui5.hana.ondemand.com/1.95.0/resources/sap-ui-core.js"
    data-sap-ui-theme="sap_belize"
    data-sap-ui-libs="sap.m">
</script>
```

Default Version
index.html
```html
<script id="sap-ui-bootstrap"
    type="text/javascript"
    src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js"
    data-sap-ui-theme="sap_belize"
    data-sap-ui-libs="sap.m">
</script>
```

Ensure that Root View and Routing are Configured to Load Targets Asynchronously

```json
"sap.ui5": {
	"rootView": {
        "viewName": "sap.ui.demo.walkthrough.view.App",
        "type": "XML",
        "id": "app",
         "async": true !
    },
    "routing": {
        "config": {
            "routerClass": "sap.m.routing.Router",
            "viewType": "XML",
            "viewPath": "sap.ui.demo.walkthrough.view",
            "controlId": "app",
            "controlAggregation": "pages",
            "async": true !
        }
    },
...
```

Ensure that all Resources are Properly Configured to Avoid 404 Errors

manifest.json
```json
"sap.app": {
	"i18n": {
		"bundleUrl": "i18n/i18n.properties",
		"supportedLocales": ["en", "de"],
		"fallbackLocale": "en"
	}
}
...
```

Use manifest.json Instead of the Bootstrap to Define Dependencies

```json
"sap.ui5": {
	"dependencies": {
		"minUI5Version": "1.96.0",
		"libs": {
			"sap.ui.core": {},
			"sap.m": {},
			"sap.ui.layout": {
				"lazy": true
			}
		}
```

Ensure that Library Preloads are Enabled

...
Step 5: Now change the specific files

- Optimize Media Files 
Change the size from webapp/resources/img/github.png




