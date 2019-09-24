# Website for Rock Solid, Inc., The Concrete Coating Company

## Run it
`npm start`
- Studio at http://localhost:3333
- Web frontend at http://localhost:8000
- GraphiQL explorer at http://localhost:8000/___graphql

## Deploy it
- Deploy a GraphQL API and schema to Sanity, do this whenever the schema changes (rarely)
`sanity upgrade && cd studio/ && npm run graphql-deploy`

- Deploy the Sanity Studio to *.sanity.studio if you make changes to anything in /studio. This is where the CMS lives.
`npm run sanity-deploy`

- Build & deploy to Netlify if any hard code changes. It will source from Sanity CMS, made possible by the sanity gatsby plugin.
`git push origin master`