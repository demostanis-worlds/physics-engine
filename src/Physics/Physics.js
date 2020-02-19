import Circle from "Physics/Circle";
import Square from "Physics/Square";
import data from "data/global";

class Physics {
  static collision(b1, b2) {
    if(b1 instanceof Circle && b2 instanceof Circle) {
      const dx = b2.x - b1.x;
      const dy = b2.y - b1.y;

      const dist = Math.sqrt(dx * dx + dy * dy);

      if(b1.radius + b2.radius >= dist && !b2.isStatic) {
        const nx = dx / dist;
        const ny = dy / dist;

        if(b1.isStatic) {
          b2.x = b1.x + nx * (b1.radius + b2.radius);
          b2.y = b1.y + ny * (b1.radius + b2.radius);
        } else {
          const touchDistFromB1 = (dist * (b1.radius / (b1.radius + b2.radius)))         
          const contactX = b1.x + nx * touchDistFromB1;
          const contactY = b1.y + ny * touchDistFromB1;

          b1.x = contactX - nx * b1.radius;
          b1.y = contactY - ny * b1.radius;

          b2.x = contactX + nx * b2.radius;
          b2.y = contactY + ny * b2.radius;
        }
      }
    }

    if(b1 instanceof Square && b2 instanceof Circle) {
      if(Physics.circleSquareCollision(b2, b1)) {
        // Do collision reaction
      }
    }
  }

  static circleSquareCollision(b1, b2) {
    const distX = Math.abs(b1.x - b2.x - b2.width / 2);
    const distY = Math.abs(b1.y - b2.y - b2.height / 2);

    if (distX > (b2.width / 2 + b1.radius)) return false;
    if (distY > (b2.height / 2 + b1.radius)) return false;

    if (distX <= (b2.width / 2)) return true; 
    if (distY <= (b2.height / 2)) return true;

    const dx = distX - b2.width / 2;
    const dy = distY - b2.height / 2;

    return (dx * dx + dy * dy <= (b1.radius * b1.radius));
  }

  static update() {
    for(const entity of data.entities) {
      for(const otherEntity of data.entities) {
        if(entity.uid !== otherEntity.uid) {
          Physics.collision(otherEntity, entity);
        }
      }
    }
  }
}

export default Physics;
export { Circle, Square };
