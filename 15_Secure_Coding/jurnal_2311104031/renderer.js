const { registerUser, loginUser } = require('./auth');

window.handleRegister = () => {
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;
  const result = registerUser(username, password);
  document.getElementById('result').textContent = result.message;
};

window.handleLogin = () => {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  const result = loginUser(username, password);
  document.getElementById('result').textContent = result.message;
};
