
## [How to Setup a TypeScript + Node.js Project](https://khalilstemmler.com/blogs/typescript/node-starter-project/)
npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev

npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true


mkdir src
touch src/index.ts

npx tsc

npm install --save-dev ts-node nodemon
npm install --save-dev rimraf


### [Get started with Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started)
npm install @apollo/server graphql
npm install --save-dev typescript @types/node
touch tsconfig.json

I am angry that that I needed this atop package.json file `"type": "module"`
