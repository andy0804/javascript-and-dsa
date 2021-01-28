/**
Take-home:
What does it need to do?
Accept a list of email addresses and return an integer indicating the number of unique email addresses. 
Where unique email addresses means they will be delivered to the same account using Gmail account matching. 
Specifically: Gmail will ignore the placement of "." in the username. And it will ignore any portion of the username after a "+".
Examples
test.email@gmail.com, test.email+spam@gmail.com and testemail@gmail.com will all go to the same email
 */

const emails = [
  "test.email@gmail.com",
  "test.email+spam@gmail.com",
  "testemail@gmail.com",
  "ananth.kumbla@gmail.com",
  "ananth.kumbla+spam+spam@gmail.com",
];

const uniqueEmailHandler = (email) => {
  email = email.substr(0, email.indexOf("@"));
  email = email.replace(".", "");
  if (email.indexOf("+") !== -1) {
    email = email.substr(0, email.indexOf("+"));
  }
  return email;
};
const uniqueHandler = (email) => {
  let map = {};
  email.forEach((i) => {
    let mail = uniqueEmailHandler(i);
    if (!map[mail]) {
      map[mail] = mail;
    }
  });

  console.log(Object.keys(map));

  return Object.keys(map).length;
};

const count = uniqueHandler(emails);
console.log("Count", count);
