const { book, booksArr, sportsArr } = require("./data");

const moongoose = require("moongoose");

const Task = require("../Models/task");

const Resolvers = {
  Query: {
    book: (parent, args, contextValue, info) => {
      console.log(args);

      return booksArr[args.id - 1];
    },

    books: () => {
      return booksArr;
    },

    task: async (parent, args, contextValue, info) => {
      let id = args.id;

      try {
        const task = await Task.findById(id);
        return task;
      } catch (err) {
        return err;
      }
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
