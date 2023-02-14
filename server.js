const express = require("express");

const connectMongo = require("./utils/connection");

const { ApolloServer, gql } = require("apollo-server");

const Resolvers = require("./Resolvers/index");

const TypeDefinitions = require("./GraphQLSchema/index");

// const Routes = require("./routes/index.js");

connectMongo();

const app = express();

//   Subscriptions: {
//     book: () => {
//       return book;
//     },
//   },

const Server = new ApolloServer({
  typeDefs: TypeDefinitions,
  resolvers: Resolvers,
}); // Instance of ApolloServer

app.use("/api", (req, res, next) => {
  res.status(200).send("success");
});

Server.listen(5000); // Apollo Server is listening to 5000
