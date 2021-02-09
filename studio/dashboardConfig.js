export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '602268c4611953bc19d3a087',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-ypfm26dx',
                  apiId: '651f2003-680d-48aa-a9c7-7cc45cd9ae6a'
                },
                {
                  buildHookId: '602268c42d7305c3825e4c67',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-59r4cdcq',
                  apiId: '8fe2df9c-a26b-4fcb-8808-e1969085f72c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lucasbastos/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-59r4cdcq.netlify.app', category: 'apps'}
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
