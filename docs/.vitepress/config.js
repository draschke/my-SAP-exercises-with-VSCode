module.exports = {
    lang: 'en-US',
    title: 'My journey through SAP App Development exercises',
    description: 'My exercises with SAP HANA, SAP HANA XSA, Cloud Foundry, Kyma and other nice things',
    // base: '/base/',
    markdown: {
      lineNumbers: true
    },
    themeConfig: {
      repo: 'workspaces/my-SAP-exercises-with-VSCode',
      docsDir: 'docs',
 
      editLinks: true,
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',
  


      nav: [
        // { text: 'Home', link: '/', activeMatch: '^/$|^/guide/' },
        { text: 'Home', link: '/'},
        {
          text: 'Exercises',
          link: '/config/basics',
          activeMatch: '^/config/'
        },
        {
          text: 'Release Notes',
          link: 'https://github.com/vuejs/vitepress/releases'
        }
      ],
  
      sidebar: {
        // '/guide/': getGuideSidebar(),
        '/config/': getConfigSidebar()
        // '/': getGuideSidebar()
      }
    }
  }
  
  function getGuideSidebar() {
    return [
      {
        text: 'Introduction',
        children: [
          { text: 'Motivation', link: '/' }
        ]
      }
    ]
  }
  
  function getConfigSidebar() {
    return [
      {
        text: 'Exercises',
        children: [{ text: 'Basics', link: '/config/basics' }]
      },
      {
        text: 'Exercises: App dev on SAP BTP',
        children: [ 
          { text: 'Run a CAP Application on Kyma', link: '/config/App-dev-on-SAP-BTP/1/Run-a-CAP-Application-on-Kyma' }
          // { text: 'Homepage', link: '/config/homepage' }
        ]
      },
      {
        text: 'Exercises: SAP-Tech-Bytes',
        children: [
          { text: 'Using GitHub Actions to Deploy Continuously to Kyma K8s Cluster', link: '/config/SAP-Tech-Bytes/Using-GitHub-Actions-to-Deploy-Continuously-to-Kyma-K8s-Cluster' },
        ]
      }

    ]
  }
  