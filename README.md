# Website for Rock Solid, Inc., The Concrete Coating Company

## Run it
`npm start`
- Studio at http://localhost:3333
- Web frontend at http://localhost:8000
- GraphiQL explorer at http://localhost:8000/___graphql

## Deployment
- Deploy a GraphQL API and schema to Sanity, do this whenever the schema changes
`sanity upgrade && cd studio/ && npm run graphql-deploy`

- Deploy the Sanity Studio to *.sanity.studio. This is where the CMS lives. 
`npm run sanity-deploy`

- Build & deploy to Netlify. It will source from Sanity, made possible by the sanity gatsby plugin.
`git push origin master`

- Deploy Netlify functions 
`netlify deploy --functions=./microservices`