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

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.id = "complete-button";
  completeButton.addEventListener("click", () => {
    deleteFromList("incomplete-list", completeButton.parentNode);

    const text = completeButton.parentNode.firstElementChild.innerText;

    const addTarget = document.createElement("div");
    addTarget.className = "list-row";

    const li = document.createElement("li");
    li.innerText = text;
    addTarget.appendChild(li);

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      deleteFromList("complete-list", backButton.parentNode);

      const text = backButton.parentElement.firstElementChild.innerText;
      createIncompleteList(text);
    });
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromList("incomplete-list", deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

const deleteFromList = (listId, target) => {
  document.getElementById(listId).removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
