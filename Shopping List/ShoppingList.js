var form = document.querySelector('form');
var input = document.querySelector('input');
var li = document.querySelector('ol');
form.onsubmit = function (event) {
  event.preventDefault();
  var value = input.value;
  input.value = '';
  var newli = document.createElement('li');
  var newbtn = document.createElement('button');
  newbtn.textContent = 'delete X';
  newli.textContent = value;
  newli.appendChild(newbtn);
  li.appendChild(newli);
  newbtn.onclick = function () {
    li.removeChild(newli);
  };
  input.focus();
};
