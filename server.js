const express = require("express");

const { ApolloServer, gql } = require("apollo-server");

const Routes = require("./routes/index.js");

const TypeDefinitions = gql`
  type Book {
    title: String
    author: String
    pages: Int
  }
  type Query {
    book: Book
    books: [Book]
  }

  #   type Mutations {

  #   }
  #   type Subscriptions {

  #   }
`;

const book = { title: null, author: "Zen", pages: 100 };

const booksArr = [
  { title: "Book 1", author: "Zen", pages: 100 },
  { title: "Book 2", author: "ZenPhysics", pages: 800 },
  { title: "Book 3", author: "ZenAthang", pages: 1900 },
  { title: "Book 4", author: "Zen", pages: 200 },
];

const app = express();

const Resolvers = {
  Query: {
    book: () => {
      return book;
    },
    books: () => {
      return booksArr;
    },
  },

  //   Mutations: {
  //     book: () => {
  //       return book;
  //     },
  //   },

  //   Subscriptions: {
  //     book: () => {
  //       return book;
  //     },
  //   },
};

const Server = new ApolloServer({
  typeDefs: TypeDefinitions,
  resolvers: Resolvers,
}); // Instance of ApolloServer

app.use("/api", (req, res, next) => {
  res.status(200).send("success");
});
// app.listen(4000); // express is listening to 4000

Server.listen(5000); // Apollo Server is listening to 5000
