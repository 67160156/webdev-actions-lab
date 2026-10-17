const status = document.querySelector('#status');
const messages = ['Hello from GitHub Pages!', 'สวัสดีจาก Tamonwan 👋', 'Deployed by GitHub Actions 🚀'];
let count = 0;

document.querySelector('#helloBtn').addEventListener('click', () => {
  status.textContent = messages[count % messages.length];
  count++;
});

const themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  themeBtn.textContent = dark ? '☀️ Light mode' : '🌙 Dark mode';
});
