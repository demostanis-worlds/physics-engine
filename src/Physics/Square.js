import data from "data/global";

class Square {
  constructor({ x, y, width, height, isStatic, color }) {
    this.x = x;
    this.y = y;
    this.uid = data.entityCount++;
    this.isStatic = isStatic || false;
    this.color = color || "black";
    this.width = width;
    this.height = height;
  }

  draw() {
    data.canvas.drawSquare(
      this.x,
      this.y,
      this.width,
      this.height,
      this.color
    );
  }
}

export default Square;
