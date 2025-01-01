const itemInput = document.getElementById("item-input");
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear-list");
const toDoList = document.getElementById("to-do-list");

submitButton.addEventListener("click", addItem); //This listens for when the "Submit" button is clicked, and then it calls the addItem function to add a new item.

itemInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});

// The above listens for when the Enter key is pressed while the input field is focused, and it calls the addItem function.

// addItem Function //
function addItem() {
  const itemText = itemInput.value.trim(); // Get input value and remove extra spaces
  if (itemText !== "") {
    // Only add the item if the input is not empty
    const li = document.createElement("li"); // Create a new <li> element
    li.textContent = itemText; // Set the text content of the <li>

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", function () {
      li.remove(); // Remove the list item when clicked
    });

    li.appendChild(deleteButton); // Append the delete button to the <li>
    toDoList.appendChild(li); // Append the <li> to the to-do list

    // Clear the input field
    itemInput.value = "";
  }
}

// Clear the list when clear button is clicked
clearButton.addEventListener("click", function () {
  toDoList.innerHTML = ""; //  Using innerHTML = "" is a quick way to clear all the content inside an element
});
