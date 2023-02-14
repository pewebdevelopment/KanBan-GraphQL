const { book, booksArr, sportsArr } = require("./data");

const Tasks = require("../Models/task");

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
        const task = await Tasks.findById(id);
        return task;
      } catch (err) {
        return err;
      }
    },

    tasks: async (parent, args, contextValue, info) => {
      try {
        const tasks = await Tasks.find();
        return tasks;
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

    createTask: async (root, args, context) => {
      const { name, iconURL, tags, status, createdAt, updatedAt, dueAt } = args;

      try {
        const newTask = new Tasks({
          name,
          iconURL,
          tags,
          status,
          createdAt,
          updatedAt,
          dueAt,
        });

        await newTask.save();
        return newTask;
      } catch (err) {
        return err;
      }
    },
  },
};

module.exports = Resolvers;
