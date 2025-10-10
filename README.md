# Grid-Maker
Project/Assignment 2 for CSci 39548

[Link to deployed page](https://belovedemperor.github.io/Grid-Maker/)

Team Members: Cheng Yue (username: CY343), Christopher Altamirano (username: caltam600), and Jason Huang (username: belovedEmperor)

## Documentation
### Feature Requirements
1. Grid Manipulation
    1. Add Rows: The user shall be able to add a new row to the grid. The new row should be appended to the end of the existing grid.
    2. Add Columns: The user shall be able to add a new column to the grid. The new column should be appended to the end of each existing row.
    3. Remove Rows: The user shall be able to remove the last row from the grid.
    4. Remove Columns: The user shall be able to remove the last column from each row in the grid.
2. Color Selection
    1. Color Palette: The application shall provide a dropdown menu containing a selection of colors for the user to choose from.
    2. User Color Selection: The user shall be able to select a color from the dropdown menu. The application must store the user's selected color.
3. Cell Coloring
    1. Individual Cell Coloring: The user shall be able to change the color of a single cell by clicking on it. The cell's color should change to the currently selected color.
    2. Fill All Uncolored Cells: The user shall be able to fill all cells that do not currently have a color with the currently selected color.
    3. Fill All Cells: The user shall be able to change the color of all cells in the grid to the currently selected color.
    4. Clear All Cells: The user shall be able to reset the color of all cells to their original, default color (e.g., white).
4. User Interface
    1. Action Menu: The application shall provide a clear and accessible menu for the user to select actions such as adding/removing rows and columns, and applying colors.
    2. Grid Display: The application shall display a grid of cells that is visually clear and easy to interact with.

### Application Architecture Description and Diagram
This application consits of a single web page with buttons and a grid.<br>
The buttons trigger JavaScript functions on click.<br>
The grid has a listener attached so that if a cell is clicked, a selected color will be displayed.

![](https://github.com/user-attachments/assets/4646de77-408e-48d6-a320-2cb81376d0d0)

### Epics, User Stories, and Acceptance Criteria
Epic 1: Grid Structure Management
- User Story 1: "As a user, I want to add rows to the grid so that I can make my canvas taller."
    - Acceptance Criteria:
        - When I click the "Add Row" button, a new row appears at the bottom of the grid.
        - The new row has the same number of columns as the existing rows.
- User Story 2: "As a user, I want to add columns to the grid so that I can make my canvas wider."
    - Acceptance Criteria:
        - When I click the "Add Column" button, a new column is added to the right side of every row.
- User Story 3: "As a user, I want to remove rows from the grid so that I can make my canvas shorter."
    - Acceptance Criteria:
        - Given the grid has at least one row, when I click the "Remove Row" button, the last row is removed.
- User Story 4: "As a user, I want to remove columns from the grid so that I can make my canvas narrower."
    - Acceptance Criteria:
        - Given the grid has at least one column, when I click the "Remove Column" button, the last column of every row is removed.

Epic 2: Grid Coloring
- User Story 5: "As a user, I want to select a color so that I can apply it to the grid cells."
    - Acceptance Criteria:
        - I can see a dropdown menu of color choices.
        - When I choose a color from the menu, the application saves it as the currently active color.
- User Story 6: "As a user, I want to color a single cell by clicking on it so that I can draw precisely."
    - Acceptance Criteria:
        - Given I have selected a color, when I click on any cell, its background changes to my selected color.
- User Story 7: "As a user, I want to fill all uncolored cells with my selected color so that I can quickly color the background."
    - Acceptance Criteria:
        - When I click the "Fill Uncolored" button, all cells with the default color change to my selected color.
        - Previously colored cells are not affected.
- User Story 8: "As a user, I want to fill all cells with my selected color so that I can flood the entire canvas with a single color."
    - Acceptance Criteria:
        - When I click the "Fill All" button, every cell in the grid changes to my selected color.
- User Story 9: "As a user, I want to clear all colors from the grid so that I can start a new drawing."
    - Acceptance Criteria:
        - When I click the "Clear All" button, the background color of every cell resets to its default state.

### Project Schedule
[Github Project/Gantt Chart Link](https://github.com/users/belovedEmperor/projects/3/views/1)

![](https://github.com/user-attachments/assets/dae90809-dada-4b9e-8a6a-51120edf84dd)
