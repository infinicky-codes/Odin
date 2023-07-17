const container = document.querySelector('#container');

const par1 = document.createElement('p');
//paragraph.classList.add('paragraph');
par1.textContent = 'Hey I\'m red!';
par1.style.color = 'red';

container.appendChild(par1);

const header3 = document.createElement('h3');
header3.textContent = 'I\'m a blue h3!';
header3.style.color = 'blue';

container.appendChild(header3);

const pinkdiv = document.createElement('div');
pinkdiv.style.backgroundColor = 'pink';
pinkdiv.style.border = '1px solid black';

const header1 = document.createElement('h1');
header1.textContent = 'I\'m in a div';
const par2 = document.createElement('p');
par2.textContent = 'ME TOO!';

pinkdiv.appendChild(header1);
pinkdiv.appendChild(par2);

container.appendChild(pinkdiv);

const btn = document.querySelector('#btn');
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
