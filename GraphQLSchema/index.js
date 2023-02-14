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
    createdAt: Date
    updatedAt: Date
    dueAt: Date
  }

  ###################################

  type Query {
    book(id: Int): Book
    books: [Book]

    task(id: Int): Task
    tasks: [Task]
  }

  type Mutation {
    addBook(title: String, author: String, pages: Int): Book
  }
`;

module.exports = TypeDefinitions;
