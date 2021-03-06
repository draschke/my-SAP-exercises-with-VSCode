let ogprefix = "og: http://ogp.me/ns#";
let title = "SAP App Development exercises with VS Code Dev Container";
let description = "For a faster and better traceability of the exercises I decided to use the [Visual Studio Dev Container](https://github.com/draschke/my-SAP-exercises-with-VSCode#microsoft---vs-code-dev-container) which gives me the possibility to start more quickly the same exercises with the required dev environment.";
let color = "#f42525";
let author = "Dirk Raschke";
let email = "draschke@googlemail.com";

module.exports = {
  lang: "en-US",
  // <meta property="og:title" content="My journey through SAP App Development exercises">
  title: "My journey through SAP App Development exercises",
  description: "My exercises with SAP HANA, SAP HANA XSA, Cloud Foundry, Kyma and other nice things",
  base: "/my-SAP-exercises-with-VSCode/",
  head: [
    // ["link", { rel: "icon", href: `/assets/favicon.ico` }],
    // ["meta", { name: "theme-color", content: color }],
    ["meta", {
      prefix: ogprefix,
      property: "og:title",
      content: title
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:type",
      content: "article"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:url",
      content: "https://draschke.github.io/my-SAP-exercises-with-VSCode/"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:description",
      content: description
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:article:author",
      content: author
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:site_name",
      content: title
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:locale",
      content: "en_US"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:locale:alternate",
      content: "en_GB"
    }],
    // means there are 3 images on this page, the first image is 300x300, the middle one has unspecified dimensions, and the last one is 1000px tall.
    // 1 1200X627
    ["meta", {
      prefix: ogprefix,
      property: "og:image",
      content: "https://draschke.github.io/my-SAP-exercises-with-VSCode/path_1200_627.jpg"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:image:width",
      content: "1200"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:image:height",
      content: "627"
    }],
    // 2 600x314
    ["meta", {
      prefix: ogprefix,
      property: "og:image",
      content: "https://draschke.github.io/my-SAP-exercises-with-VSCode/path_600_314.jpg"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:image:width",
      content: "600"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:image:height",
      content: "314"
    }],
    // 3 unspecified
    ["meta", {
      prefix: ogprefix,
      property: "og:image",
      content: "https://draschke.github.io/my-SAP-exercises-with-VSCode/path_1200_627.jpg"
    }],
    ["meta", {
      prefix: ogprefix,
      property: "og:image:alt",
      content: title
    }],
    ["meta", {
      name: "twitter:title",
      content: title
    }],
    ["meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    ["meta", {
      name: "twitter:description",
      content: description
    }],
    ["meta", {
      name: "twitter:creator",
      content: author
    }],
    ["meta", {
      name: "twitter:site",
      content: email
    }],
    ["meta", {
      name: "twitter:image:alt",
      content: title
    }],
    ["meta", {
      name: "twitter:image",
      content: "https://draschke.github.io/my-SAP-exercises-with-VSCode/path_1200_627.jpg"
    }],
    ["meta", {
      name: "description",
      content: description
    }],
    ["meta", {
      name: "keywords",
      content: "SAP HANA exercises, SAP HANA XSA tutorial, VS Code Dev Container, SAP HANA XSA Application Architect, SAP HANA BTP, SAPUI5, SAP Fiori, DevOps, Kubernetes, K8s, Kyma, JavaScript, Node.js"
    }],
    ["meta", {
      name: "author",
      content: author
    }],
    // name: "image" => heroImage: /path_600_314.jpg
    // ["meta", { name: "image", content: "https://draschke.github.io/my-SAP-exercises-with-VSCode/path_1200_627.jpg" }],
    ["meta", {
      name: "google-site-verification",
      content: "fIcc0ZHuxODrjX67vMWV1Bm0JM-eGz04Fm4Fy6jAez0"
    }],
    // ["meta", { name: "", content: "yes" }],
    // ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    // ["link", { rel: "apple-touch-icon", href: `/assets/apple-touch-icon.png` }],
    // ["link", { rel: "mask-icon", href: "/assets/safari-pinned-tab.svg", color: color }],
    // ["meta", { name: "msapplication-TileImage", content: "/assets/mstile-150x150.png" }],
    // ["meta", { name: "msapplication-TileColor", content: color }],
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    repo: "draschke/my-SAP-exercises-with-VSCode",
    docsDir: "docs",

    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",

    nav: [
      // { text: "Home", link: "/", activeMatch: "^/$|^/guide/" },
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Exercises",
        link: "/config/basics",
        activeMatch: "^/config/",
      },
      {
        text: "Release Notes",
        link: "https://github.com/draschke/my-SAP-exercises-with-VSCode/releases",
      },
    ],

    sidebar: {
      // "/guide/": getGuideSidebar(),
      "/config/": getConfigSidebar(),
      // "/": getGuideSidebar()
    },
  },
};

function getGuideSidebar() {
  return [{
    text: "Introduction",
    children: [{
      text: "Motivation",
      link: "/"
    }],
  }, ];
}

function getConfigSidebar() {
  return [{
      text: "Exercises",
      children: [{
        text: "Basics",
        link: "/config/basics"
      }],
    },
    {
      text: "Exercises: App dev on SAP BTP",
      children: [{
        text: "Run a CAP Application on Kyma, 19.08.2021",
        link: "/config/App-dev-on-SAP-BTP/Run-a-CAP-Application-on-Kyma"
      }],
    },
    {
      text: "Exercises: SAP-Tech-Bytes",
      children: [{
        text: "Using GitHub Actions to Deploy Continuously to Kyma K8s Cluster, 8.09.2021",
        link: "/config/SAP-Tech-Bytes/Using-GitHub-Actions-to-Deploy-Continuously-to-Kyma-K8s-Cluster"
      }],
    },


    {
      text: "Exercises: Blogs-SAP-Com",
      children: [

        {
          text: "Build SAP Overview Page using SAP HANA Cloud with VS Code, 25.08.2021",
          link: "/config/Blogs-SAP-Com/Build-SAP-Overview-Page-using-SAP-HANA-Cloud-with-VS-Code"
        },
        {
          text: "Deploy a simple Node.js app to XSA platform with VS Code, 7.09.2021",
          link: "/config/Blogs-SAP-Com/Deploy-a-simple-Nodejs-app-to-XSA-platform"
        },
        {
          text: "Create a OData service with Nodejs by using CAP with VS Code, 29.10.2021",
          link: "/config/Blogs-SAP-Com/Create-a-OData-service-with-Nodejs-by-using-CAP-with-VS-Code"
        }, {
          text: "Add a piechart into the openui5 sample app, 15.11.2021",
          link: "/config/Blogs-SAP-Com/Add-a-piechart-into-the-openui5-sample-app"
        }, {
          text: "Devtoberfest 2021 Frontend Week Coding Challenge, 15.11.2021",
          link: "/config/Blogs-SAP-Com/Devtoberfest-2021-Frontend-Week-Coding-Challenge"
        }
        // ,
        // {
        //   text: "Develop the repositiory BMP on your local System with VS Code to a SAP HANA XSA",
        //   link: "/config/Blogs-SAP-Com/Develop-and-deploy-the-repositiory-BMP"
        // }
      ],
    },

  ];

}