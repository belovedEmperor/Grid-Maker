# Grid-Maker

# NOTE TO ALL - EACH USER STORY REQUIRES A NEW BRANCH.
User stories provided by professor:
1. select an action from a menu
2. add rows to the grid
3. add columns to the grid
4. remove rows from the grid
5. remove columns from the grid
6. select a color from a dropdown menu of colors
7. color a single cell, by clicking on the cell, and change its color to the selected color
8. color all uncolored cells with the selected color
9. color all cells with the selected color
10. clear all cells' color and restore all cells to their initial color (e.g., white)

Please also *check pull requests* before cloning or pulling from main.<br>
This will minimize merge conflicts.<br>
Please be cautious when deleting files as well.

p.s. This note should be removed before project submission.

# PLEASE USE THE PROJECT FOR THE GANTT CHART
Project located at:

![](https://github.com/user-attachments/assets/2d77e6d2-d7fa-4d7e-913c-0b6adba451f3)
![](https://github.com/user-attachments/assets/80d51ce8-aee9-490e-b74e-5aa75bd48a97)
![](https://github.com/user-attachments/assets/7f6d2810-8a38-42a9-9616-3ed793e36a6d)

You can add *issues* either through the project or through the normal repo issue menu.<br>
Adding *pull requests* to the project also works, just make sure to set the dates and provide a descriptive title.<br>
Please add one issue per branch/user story.<br>
***

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
***Undetermined***<br>
Will be added at a later date.

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
***Undetermined***<br>
Will be added at a later date based on Github project issues Gantt chart.
