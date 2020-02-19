class Canvas {
  constructor(width, height) {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");

    this.width = width;
    this.height = height;
    this.canvas.setAttribute("width", width);
    this.canvas.setAttribute("height", height);

    document.body.appendChild(this.canvas);
  }

  update(callback) {
    requestAnimationFrame(callback);
  }

  drawCircle(x, y, radius, color) {
    this.context.beginPath();
    this.context.fillStyle = color;
    this.context.arc(x, y, radius, 0, 2 * Math.PI);
    this.context.fill();
  }

  drawSquare(x, y, width, height, color) {
    this.context.beginPath();
    this.context.fillStyle = color;
    this.context.fillRect(x, y, width, height);
  }

  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
  }
}

export default Canvas;
