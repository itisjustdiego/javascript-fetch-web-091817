const app = "I don't do much.";
const token = '0cb3a420cb709b26d7899f8d0ebe318f3cb33f60'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
