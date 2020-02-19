import Physics, { Circle, Square } from "Physics/Physics";
import Movement from "Movement/Movement";
import Canvas from "Canvas/Canvas";
import Math from "Math/Math";
import data from "data/global";
import "style/index.css";

const KEYS = {
  ARROW_UP: 38,
  ARROW_DOWN: 40,
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39,
  PRESSED: {}
};

const WIDTH = 800, HEIGHT = 400;
const canvas = new Canvas(WIDTH, HEIGHT);
const movement = new Movement();

data.canvas = canvas;
data.entities.push(
  new Circle({
    x: 40,
    y: 40,
    color: "green",
    radius: 20,
  }),
  new Circle({
    x: 100,
    y: 100,
    radius: 35,
    isStatic: true
  }),
  new Circle({
    x: 150,
    y: 100,
    radius: 30
  }),
  new Square({
    x: 200,
    y: 200,
    width: 32,
    height: 32,
    isStatic: true
  })
);

const [player] = data.entities;

canvas.update(function _onTick(tick) {
  canvas.clear();
  Physics.update();

  const speed = movement.speed(KEYS.PRESSED);
  if(KEYS.PRESSED[KEYS.ARROW_UP]) {
    player.y -= speed;
  }
  if(KEYS.PRESSED[KEYS.ARROW_DOWN]) {
    player.y += speed;
  }
  if(KEYS.PRESSED[KEYS.ARROW_LEFT]) {
    player.x -= speed;
  }
  if(KEYS.PRESSED[KEYS.ARROW_RIGHT]) {
    player.x += speed;
  }

  for(const entity of data.entities) {
    entity.draw();
  }

  requestAnimationFrame(_onTick);
});

movement.listen([
  KEYS.ARROW_UP,
  KEYS.ARROW_DOWN,
  KEYS.ARROW_LEFT,
  KEYS.ARROW_RIGHT
], function(e) {
  KEYS.PRESSED[this.key] = e.type === "keydown";
});
