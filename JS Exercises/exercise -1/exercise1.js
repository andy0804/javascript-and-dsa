/**
 * Implement a().b().c() in Javascript.
 */

const a = () => {
  return {
    b: () => {
      return {
        c: () => {
          console.log("Implementing a().b().c() in Javascript");
        },
      };
    },
  };
};

a().b().c();
