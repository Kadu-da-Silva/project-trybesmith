const validUsername = 'Hagar';
const validPassword = 'terrível';
const noUsernameLoginBody = { username: '', password: validPassword };

const noPasswordLoginBody = { username: validUsername, password: '' };

const notExistingUserBody = { username: 'invalidName', password: validPassword };

const existingUserWithWrongPasswordBody = { username: validUsername, password: 'wrong_password' };
const hashedPassword = '$2a$10$4ib6NvSECUeufg/V574scehbYLqQJHcjR4d1cHUjq2ndPasGQTq8u'
const existingUser = { 
  id: 1,
  username: validUsername,
  vocation: 'guerreiro',
  level: 10,
  password: hashedPassword,
};

const validLoginBody = { username: validUsername, password: validPassword };

export default {
  noUsernameLoginBody,
  noPasswordLoginBody,
  notExistingUserBody,
  existingUserWithWrongPasswordBody,
  existingUser,
  validLoginBody,
};