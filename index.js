const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

let myLeads = ['one', 'two', 'three'];

inputBtn.addEventListener('click', () => {
  myLeads.push(inputEl.value);
});

for (let lead of myLeads) {
  ulEl.innerHTML += `<li>${lead}</li>`;
}
