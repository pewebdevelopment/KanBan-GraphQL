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

module.exports = TypeDefinitions;
