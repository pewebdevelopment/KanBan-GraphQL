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
    book(id: Int): Book
    books: [Book]
  }

  type Mutation {
    addBook(title: String, author: String, pages: Int): Book
  }
  #   type Subscriptions {

  #   }
`;

const book = { title: "My Awesome Book", author: "Zen", pages: 10023 };

const booksArr = [
  { title: "Book 1", author: "Zen", pages: 100 },
  { title: "Book 2", author: "ZenPhysics", pages: 800 },
  { title: "Book 3", author: "ZenAthang", pages: 1900 },
  { title: "Book 4", author: "Zen", pages: 200 },
];

const sportsArr = [
  { title: "Cricket", fans: 100000 },
  { title: "Football", fans: 166 },
  { title: "Hockey", fans: 1077 },
  { title: "Chess", fans: 1000 },
];

const app = express();

const Resolvers = {
  Query: {
    book: (parent, args, contextValue, info) => {
      console.log(args);

      return booksArr[args.id - 1];
      // return book;
    },

    books: () => {
      return booksArr;
    },
  },

  Mutation: {
    addBook: (root, args, context) => {
      const { title, author, pages } = args;
      const newBook = { title: title, author: author, pages };
      booksArr.push(newBook);
      return newBook;
    },
  },

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
