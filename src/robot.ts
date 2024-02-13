import { updateLocation, insideArena, updateHeading } from "./utils";
import { Coordinates, Arena, Heading, Movement, RobotStatus, Directions, RobotInput, RobotOutput, Robot } from './types'

export const moveRobot = (currentLocation: Coordinates, currentHeading: Heading, arena: Arena, movement: Movement): { location: Coordinates, robotStatus: RobotStatus, heading: Heading } => {
  let location: Coordinates
  let robotStatus: RobotStatus = 'ok';
  let heading: Heading = currentHeading

  if (movement === 'forward') {

    try {
      location = updateLocation(currentLocation, currentHeading, movement);
    } catch (e) {
      location = currentLocation
      robotStatus = 'error';
    }
    if (!insideArena(arena, location)) {
      location = currentLocation
      robotStatus = 'crash'
    }
  } else {
    heading = updateHeading(currentHeading, movement)
    location = currentLocation

  }
  return {
    location,
    robotStatus,
    heading,
  }
}

// processes the input directions and returns the output for the robot
export const setInput = (input: RobotInput): RobotOutput => {
  const { location, heading, arena, directions } = input;
  let currentLocation = location;
  let currentHeading = heading;
  let currentStatus: RobotStatus = 'ok';
  const path: Directions = [];
  const validMovements: Movement[] = ['forward', 'left', 'right'];

  for (const movement of directions) {
    // Check for invalid movement commands
    path.push(movement); // Add only valid movements to the path
    if (!validMovements.includes(movement)) {
      currentStatus = 'error';
      // Stop processing further movements
      break;
    } else {

    }

    const updated = moveRobot(currentLocation, currentHeading, arena, movement);
    currentLocation = updated.location;
    currentStatus = updated.robotStatus;
    currentHeading = updated.heading;

    // handle error and crash
    if (updated.robotStatus === 'crash' || updated.robotStatus === 'error') {
      currentStatus = updated.robotStatus;
      break;
    }

  }

  return {
    status: currentStatus,
    location: currentLocation,
    heading: currentHeading,
    path: path,
  };
};
