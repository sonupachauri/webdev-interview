// code compile , Youtube channel
//Day1-- convert object to string- only serialize data

const user = {
  name: 'sonu',
  age: 28,
  address: 'etah',
};

const jsonString = JSON.stringify(user);
// console.log(jsonString);
// console.log(JSON.parse(jsonString));

//Day2-- convert object to string- only serialize data

const checkKeyInObject = (key, obj) => {
  if (!obj) {
    return false;
  }
  // return key.toString() in obj;

  return obj.hasOwnProperty(key);
};
const obj = { name: 'sonu', gender: 'male' };
// console.log(checkKeyInObject('toString', obj));

// check value exist or not by own

// Day 3-- Use of Map Method (cant modify--Immutable)

const persons = [
  { name: 'sonu p', age: 20 },
  { name: 'sonu s', age: 24 },
  { name: 'sonu f', age: 12 },
  { name: 'sonu k', age: 25 },
];

const mapPerson = persons.map(person => {
  return { ...person, age: person.age * 2 };
});

// console.log(mapPerson);

// Day 4-- Refine Code

// function fetchRole(roleId) {
//   switch (roleId) {
//     case 1:
//       return userRoles.values;
//     case 2:
//       return userRoles.values;
//     case 3:
//       return userRoles.values;
//     default:
//       return 'User';
//   }
// }

function fetchRole(roleId) {
  const userRoles = { 1: 'Admin', 2: 'Moderator', 3: 'Special User' };
  // const userRoles = [{ 1: 'Admin' }, { 2: 'Moderator' }, { 3: 'Special User' }];
  return userRoles[roleId] || 'User';
}

// console.log(fetchRole(4));

// Day 5-- Refine Code
