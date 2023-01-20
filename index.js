var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var rootValue = { hello: () => 'Hello world!' };

var source = '{ hello }';

type Query {
    me: User
  }
  
  type User {
    id: ID
    name: String
  }

graphql({ schema, source, rootValue }).then((response) => {
  console.log(response);
});