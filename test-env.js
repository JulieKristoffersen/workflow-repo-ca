// test-env.js
const dotenv = require('dotenv');
dotenv.config();

console.log('BASE_URL:', process.env.BASE_URL);
console.log('TEST_USER_EMAIL:', process.env.TEST_USER_EMAIL);
console.log('TEST_USER_PASSWORD:', process.env.TEST_USER_PASSWORD);
