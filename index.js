const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');

let myLeads = [];

inputBtn.addEventListener('click', () => {
  myLeads.push(inputEl.value);
});
