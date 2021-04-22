export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60816aa51d00af320d63f5e9',
                  title: 'Sanity Studio',
                  name: 'morgenmote-studio',
                  apiId: '3dfa8838-4c79-4b0b-8235-57acf1eb5c28'
                },
                {
                  buildHookId: '60816aa5483cb52e812b2b37',
                  title: 'Blog Website',
                  name: 'morgenmote',
                  apiId: '39e029d4-08be-40a1-9c65-75350086de1c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hallgeirg/morgenmote',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://morgenmote.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
