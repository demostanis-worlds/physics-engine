import data from "data/global";

class Circle {
  constructor({ x, y, radius, isStatic, color }) {
    this.x = x;
    this.y = y;
    this.uid = data.entityCount++;
    this.isStatic = isStatic || false;
    this.color = color || "black";
    this.radius = radius;
  }

  draw() {
    data.canvas.drawCircle(
      this.x,
      this.y,
      this.radius,
      this.color
    );
  }
}

export default Circle;
