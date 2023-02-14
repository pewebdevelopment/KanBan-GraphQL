const { gql } = require("apollo-server");

const TypeDefinitions = gql`
  type Book {
    title: String
    author: String
    pages: Int
  }

  ###################################
  # Following are the Task Types similar to Mongo

  type Task {
    name: String
    iconURL: String
    tags: [String]
    status: String
    createdAt: String
    updatedAt: String
    dueAt: String
  }

  ###################################

  type Query {
    book(id: String): Book
    books: [Book]

    task(id: String): Task
    tasks: [Task]
  }

  type Mutation {
    addBook(title: String, author: String, pages: Int): Book
    createTask(
      name: String
      iconURL: String
      tags: [String]
      status: String
      createdAt: String
      updatedAt: String
      dueAt: String
    ): Task
  }
`;

module.exports = TypeDefinitions;
