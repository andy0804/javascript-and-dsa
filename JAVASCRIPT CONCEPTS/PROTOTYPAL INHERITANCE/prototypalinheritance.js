/**
 * In programming, we often want to take something and extend it.

For instance, we have a user object with its properties and methods,
 and want to make admin and guest as slightly modified variants of it. 
 We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.
 */

 /**
  * The prototype is a little bit “magical”. 
  * When we want to read a property from object, and it’s missing, 
  * JavaScript automatically takes it from the prototype. In programming, 
  * such thing is called “prototypal inheritance”. Many cool language features and programming techniques
  *  are based on it.
  */

  let user = {
      logIn : ()=> ( console.log('Logged in')),
      logOut :  ()=> ( console.log('Logged out')),
      company:'XYC INCORPORATED'
  }

  let guest  = {
    readData : true,
    writeData : false
  }

  guest.__proto__ = user;

  guest.logIn();