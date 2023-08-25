const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

let myLeads = [];

inputBtn.addEventListener('click', () => {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  renderLeads();
});

function renderLeads() {
  let listItems = '';

  for (let lead of myLeads) {
    listItems += `<li>${lead}</li>`;
  }
  // DOM manipulation has a cost
  ulEl.innerHTML = listItems;
}
