function addRows() {
  const table = document.getElementById("grid");

  document.getElementById("add_row").onclick = function () {
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
  };
}

function addColumns() {
  const table = document.getElementById("grid");
  document.getElementById("add_col").onclick = function () {
    // check if there's a row exist if not added one automatically when user clicking on Add Col
    if (table.rows.length === 0) {
      document.getElementById("add_row").click();
      return;
    }

    for (let i = 0; i < table.rows.length; i++) {
      const row = table.rows[i];
      row.insertCell();
    }
  };
}

function deleteRow() {
  const table = document.getElementById("grid");

  document.getElementById("remove_row").onclick = function () {
    if (table.rows.length > 0) {
      table.deleteRow(-1);
    } else {
      console.log("This table is empty and rows cannot be removed!");
    }
  };
}
function deleteColumn() {
  const table = document.getElementById("grid");

  document.getElementById("remove_col").onclick = function () {
    if (table.rows.length === 0) {
      return;
    }

    const lastCellIndex = table.rows[0].cells.length - 1;

    for (i = 0; i < table.rows.length; i++) {
      const row = table.rows[i];
      row.deleteCell(lastCellIndex);
    }
  };
}
