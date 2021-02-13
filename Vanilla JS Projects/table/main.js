const tableData = [
  'Item1',
  'Item2',
  'Item3',
  'Item4',
  'Item5',
  'Item6',
  'Item7',
  'Item8',
  'Item9',
  'Item10',
  'Item11',
  'Item12',
  'Item13',
  'Item14',
  'Item15',
  'Item16',
  'Item17',
  'Item18',
  'Item19',
];

const list_element = document.getElementById('list');
const paginationElement = document.getElementById('pagination');

let currentPage = 1;
let rows = 5;

function displaylist(items, wrapper, rowsPerPage, page) {
  // clear the current;
  wrapper.innerHTML = '';
  // set the page to -- as array starts from 0 but the ui in the page start from 1

  page--;
  let start = rowsPerPage * page;
  let end = start + rowsPerPage;
  let paginatedItems = items.slice(start, end);
  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];
    let item_element = document.createElement('div');
    item_element.classList.add('item');
    item_element.innerText = item;
    wrapper.appendChild(item_element);
  }
}
function setupPagination(items, wrapper, rowsPerPage) {
  wrapper.innerHTML = '';
  let pageCount = Math.ceil(items.length / rowsPerPage);
  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginationButton(i, items);
    wrapper.appendChild(btn);
  }
}

function paginationButton(page, items) {
  let button = document.createElement('button');
  button.innerText = page;
  if (currentPage == page) {
    button.classList.add('active');
  }
  button.addEventListener('click', function () {
    currentPage = page;
    displaylist(items, list_element, rows, currentPage);
    let current_btn = document.querySelector('.pagenumbers button.active');
    current_btn.classList.remove('active');
    button.classList.add('active');
  });
  return button;
}
displaylist(tableData, list_element, rows, currentPage);
setupPagination(tableData, paginationElement, rows);
