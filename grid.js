import { Cell } from "./cell.js";

const gridSize = 4;
const cellsCount = gridSize * gridSize;

export class Grid {
  constructor(gridElement) {
    this.cells = [];
    for (let i = 0; i < cellsCount; i++) {
      this.cells.push(
        new Cell(gridElement, i % gridSize, Math.floor(i / gridSize))
      );
    }

    this.cellsGroupedByColumn = this.groupCellsByColumn();
  }

  getRandomEmptyCell() {
    const emptyCells = this.cells.filter((cell) => cell.isEmpty());
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomIndex];
  }
  groupCellsByColumn() {
    return this.cells.reduce((groupedCells, cell) => {
      groupedCells[cell.x] = groupedCells[cell.x] || [];
      groupedCells[cell.x][cell.y] = cell;
      return groupedCells;
    }, []);
  }
}
