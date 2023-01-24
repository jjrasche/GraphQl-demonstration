import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


const typeDefs = `#graphql
    input BookInput {
        title: String
    }

    type Book {
        title: String!
        author: Author!
    }

    type Author {
        name: String!
        dob: String
        books: [Book]
    }

    type Query {
        books: [Book]
    }

    type Mutation {
        createBook(book: BookInput): Book
    }
`;
const books = [
    {
        title: 'The Awakening',
        author: {
            dob: '1-1-89',
            name: 'henry',
        }
    }
];

const resolvers = {
    Query: {
        books: () => books,
    },
    
    Mutation: {
        createBook: (root, args, context) => {
        //   const { title: string, author: Author } = args;
            books.push(args);
            return args;
        }
      }
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);