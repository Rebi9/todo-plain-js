import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;
  div.appendChild(li);

  const completeButton = createCompleteButton();
  div.appendChild(completeButton);

  const deleteButton = createDeleteButton();
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

const deleteFromList = (listId, target) => {
  document.getElementById(listId).removeChild(target);
};

const createCompleteButton = () => {
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.id = "complete-button";
  completeButton.addEventListener("click", () => {
    deleteFromList("incomplete-list", completeButton.parentNode);

    const addTarget = document.createElement("div");
    addTarget.className = "list-row";

    const li = document.createElement("li");
    const text = completeButton.parentNode.firstElementChild.innerText;
    li.innerText = text;
    addTarget.appendChild(li);

    const backButton = createBackButton();
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  return completeButton;
};

const createDeleteButton = () => {
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromList("incomplete-list", deleteButton.parentNode);
  });

  return deleteButton;
};

const createBackButton = () => {
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    deleteFromList("complete-list", backButton.parentNode);

    const text = backButton.parentElement.firstElementChild.innerText;
    createIncompleteList(text);
  });

  return backButton;
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
