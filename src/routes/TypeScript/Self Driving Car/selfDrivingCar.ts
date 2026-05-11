import { getObstacleEvents } from './computer-vision';

interface AutonomousCar {
  isRunning: boolean;
  respond: (events: Events) => void;
}

interface AutonomousCarProps {
  isRunning: boolean;
  SteeringControl: Steering;
}

interface Events {
  [event: string]: boolean;
}

interface Control {
  execute: (command: string) => void;
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

class SteeringControl implements Steering {
  execute(command: string) {
    console.log(`Executing: ${command}`);
  }

  turn(direction: string) {
    this.execute(`Turn ${direction }`);
  }
}

class Car implements AutonomousCar {
  isRunning;
  SteeringControl;

  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning; 
    this.SteeringControl = props.SteeringControl;

  }
  respond(events: Events) {
    if (!this.isRunning) {
      console.log('The car is off.')
    } 
    
    Object.keys(events).forEach(eventKey => {

      if (!events[eventKey]) {
        return
      }
      if (eventKey === 'ObstacleLeft') {
        this.SteeringControl.turn('right')
      }
      if (eventKey === 'ObstacleRight') {
        this.SteeringControl.turn('left')
      }
    })
  }
}
const steering = new SteeringControl();
const autonomousCar = new Car({isRunning: true, SteeringControl: steering});

autonomousCar.respond(getObstacleEvents());


