const form = document.getElementById("expense-form");
const expenseList = document.getElementById("expenses");

const formHandler = (e) => {
  e.preventDefault();
  let amount = document.getElementById("expense");
  let desc = document.getElementById("desc");
  let category = document.getElementById("category");

  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  const spanAmount = document.createElement("span");
  const spanDesc = document.createElement("span");
  const spanCategory = document.createElement("span");
  const symbol = document.createElement("span");

  li.className = "list-group-item";
  delBtn.className = "btn btn-danger li-btn delete";
  editBtn.className = "btn btn-dark li-btn edit";
  spanAmount.className = "span-amount";
  spanCategory.className = "span-category";
  spanDesc.className = "span-desc";
  symbol.className = "symbol";

  spanAmount.appendChild(document.createTextNode(amount.value));
  spanDesc.appendChild(document.createTextNode(desc.value));
  spanCategory.appendChild(document.createTextNode(category.value));
  symbol.appendChild(document.createTextNode("₹"));

  delBtn.appendChild(document.createTextNode("Delete"));
  editBtn.appendChild(document.createTextNode("Edit"));

  delBtn.addEventListener("click", deleteHandler);
  editBtn.addEventListener("click", editHandler);

  li.appendChild(symbol);
  li.appendChild(spanAmount);
  li.appendChild(spanDesc);
  li.appendChild(spanCategory);
  li.appendChild(delBtn);
  li.appendChild(editBtn);

  expenseList.appendChild(li);

  let expList = {
    amount: amount.value,
    desc: desc.value,
    category: category.value,
  };
  localStorage.setItem(desc.value, JSON.stringify(expList));

  desc.value = "";
  amount.value = "";
  category.value = "Food";
};

const deleteHandler = (e) => {
  const li = e.target.parentElement;
  const desc = li.querySelector(".span-desc").textContent;
  localStorage.removeItem(desc);
  expenseList.removeChild(li);
};

const editHandler = (e) => {
  const li = e.target.parentElement;
  const desc = li.querySelector(".span-desc").textContent;
  const amount = li.querySelector(".span-amount").textContent;
  const category = li.querySelector(".span-category").textContent;

  localStorage.removeItem(desc);
  expenseList.removeChild(li);

  document.getElementById("desc").value = desc;
  document.getElementById("expense").value = amount;
  document.getElementById("category").value = category;
};

form.addEventListener("submit", formHandler);
