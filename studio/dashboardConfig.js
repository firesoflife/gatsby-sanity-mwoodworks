export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '6245cfebfd628408223cead5',
                  title: 'Sanity Studio',
                  name: 'gatsby-sanity-mwoodworks-studio',
                  apiId: '34010152-4d5e-4c88-a41a-3edd91f8d5d9'
                },
                {
                  buildHookId: '6245cfeb93fcb100c3aee83d',
                  title: 'Portfolio Website',
                  name: 'gatsby-sanity-mwoodworks',
                  apiId: '0384e62f-93d3-461f-85ce-adb664ddfc7f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/firesoflife/gatsby-sanity-mwoodworks',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://gatsby-sanity-mwoodworks.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
