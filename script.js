// Color Variable to be used in functions
let selectedColor = "";

function addRow() {
  const table = document.getElementById("grid");

  let numCols;

  if (table.rows.length > 0) {
    numCols = table.rows[0].cells.length;
  } else {
    numCols = 1;
  }
  // Now add a row with numCols cells
  const newRow = table.insertRow();
  for (let i = 0; i < numCols; i++) {
    newRow.insertCell();
  }
}

function addColumn() {
  const table = document.getElementById("grid");
  // check if there's a row exist if not added one automatically when user clicking on Add Col
  if (table.rows.length === 0) {
    document.getElementById("add_row").click();
    return;
  }

  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    row.insertCell();
  }
}

function deleteRow() {
  const table = document.getElementById("grid");

  if (table.rows.length > 0) {
    table.deleteRow(-1);
  } else {
    console.log("This table is empty and rows cannot be removed!");
  }
}

function deleteColumn() {
  const table = document.getElementById("grid");

  if (table.rows.length === 0) {
    return;
  }

  const lastCellIndex = table.rows[0].cells.length - 1;

  for (i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    row.deleteCell(lastCellIndex);
  }
}

// select color function
const colorSelect = document.getElementById("select");

colorSelect.addEventListener("change", function () {
  selectedColor = this.value;
  console.log("Selected color:", selectedColor); // for testing
});

// Color single cell function
let grid = document.getElementById("grid");
grid.addEventListener("click", function (clickedPart) {
  // clickedPart.target is the part that was clicked
  if (clickedPart.target.tagName === "TD" && selectedColor) {
    //check for type (if cell) and valid color
    clickedPart.target.style.backgroundColor = selectedColor;
  }
});
