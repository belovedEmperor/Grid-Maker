  const table = document.getElementById("grid");

    // ------------ add row feature ---------------
   document.getElementById("add_row").onclick = function () {
   let numCols;

  if (table.rows.length > 0) {
    numCols = table.rows[0].cells.length;
  } else{
    numCols = 1;
  }
  // Now add a row with numCols cells
  const newRow = table.insertRow();
  for (let i = 0; i < numCols; i++) {
    const cell = newRow.insertCell();
    const rowNum = newRow.rowIndex;
    cell.textContent = "";
  }

};

  // ---------- add col feature -------------
  document.getElementById("add_col").onclick = function() {
    // check if there's a row exist if not added one automatically when user clicking on Add Col
      if(table.rows.length === 0){
        document.getElementById("add_row").click();
        return;
      }

      for(let i = 0; i < table.rows.length; i++){
        const row = table.rows[i];
        const newCell = row.insertCell();
        newCell.textContent = "";
      }
    };

       // ------------ delete row feature --------------
  document.getElementById("remove_row").onclick = function(){
    if(table.rows.length > 0){
      table.deleteRow(-1);
    }
    else{
      console.log("This table is empty and rows cannot be removed!")
    }
  };
      // ------------ delete col feature ----------------
    document.getElementById("remove_col").onclick = function(){
      if(table.rows.length === 0){
        return;
      }
      
      const lastCellIndex = table.rows[0].cells.length - 1;

      for(i = 0; i < table.rows.length; i++){
        const row = table.rows[i];
        row.deleteCell(lastCellIndex);
      }
    }
 