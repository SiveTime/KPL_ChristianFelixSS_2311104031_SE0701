const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const usersFilePath = path.join(__dirname, 'users.json');

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function isValidUsername(username) {
  const regex = /^[A-Za-z0-9]+$/; // hanya huruf & angka
  return regex.test(username) && username.length >= 4 && username.length <= 20;
}

function isValidPassword(password, username) {
  const hasSpecial = /[!@#$%^&*]/.test(password);
  const notContainUsername = !password.includes(username);
  return password.length >= 8 && password.length <= 20 && hasSpecial && notContainUsername;
}

function loadUsers() {
  if (!fs.existsSync(usersFilePath)) return [];
  const data = fs.readFileSync(usersFilePath);
  return JSON.parse(data);
}

function saveUsers(users) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

function registerUser(username, password) {
  if (!isValidUsername(username)) {
    return { success: false, message: 'Username invalid (alfanumerik, 4-20 karakter).' };
  }

  if (!isValidPassword(password, username)) {
    return { success: false, message: 'Password invalid (8-20 karakter, ada karakter spesial, tidak mengandung username).' };
  }

  const users = loadUsers();
  const exists = users.find(u => u.username === username);
  if (exists) return { success: false, message: 'Username sudah digunakan.' };

  const hashed = hashPassword(password);
  users.push({ username, password: hashed });
  saveUsers(users);
  return { success: true, message: 'Registrasi berhasil!' };
}

function loginUser(username, password) {
  const users = loadUsers();
  const hashed = hashPassword(password);
  const match = users.find(u => u.username === username && u.password === hashed);

  if (match) return { success: true, message: 'Login berhasil!' };
  else return { success: false, message: 'Username atau password salah.' };
}

module.exports = { registerUser, loginUser };