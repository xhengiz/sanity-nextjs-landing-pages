export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e44f936a4a03cedf5134c08',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-h2vj3oy9',
                  apiId: '7e842e1d-957d-4bf1-bcab-6b87cad09a63'
                },
                {
                  buildHookId: '5e44f9375f133e88c953ffa5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bsnn3i8c',
                  apiId: '7b248afc-0cef-4935-9e42-348643e12ec3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xhengiz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bsnn3i8c.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
