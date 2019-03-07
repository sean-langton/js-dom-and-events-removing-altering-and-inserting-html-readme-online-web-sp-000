//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});


const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  console.log(e.which);
});
