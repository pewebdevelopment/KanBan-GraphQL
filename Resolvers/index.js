const { book, booksArr, sportsArr } = require("./data");

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
};

module.exports = Resolvers;
