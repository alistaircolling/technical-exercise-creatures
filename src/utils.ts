
import { Arena, Coordinates, Heading, Movement } from './types';

// ensure the coordinate is inside the arena
export const insideArena = (arena: Arena, coordinate: Coordinates): boolean => {
  const { corner1, corner2 } = arena;
  return (
    coordinate.x >= Math.min(corner1.x, corner2.x) &&
    coordinate.x <= Math.max(corner1.x, corner2.x) &&
    coordinate.y >= Math.min(corner1.y, corner2.y) &&
    coordinate.y <= Math.max(corner1.y, corner2.y)
  );
}


// returns new location 
export const updateLocation = (currentLocation: Coordinates, heading: Heading, movement: Movement): Coordinates => {
  if (movement !== 'forward') {
    return currentLocation;
  }

  switch (heading) {
    case 'north':
      return { ...currentLocation, y: currentLocation.y + 1 };
    case 'south':
      return { ...currentLocation, y: currentLocation.y - 1 };
    case 'east':
      return { ...currentLocation, x: currentLocation.x + 1 };
    case 'west':
      return { ...currentLocation, x: currentLocation.x - 1 };
    default:
      throw new Error(`Invalid heading: ${heading}`);
  }
}

export const updateHeading = (currentHeading: Heading, movement: Movement): Heading => {
  const directions: Heading[] = ['north', 'east', 'south', 'west'];
  let index = directions.indexOf(currentHeading);

  if (movement === 'left') {
    index = (index - 1 + directions.length) % directions.length;
  } else if (movement === 'right') {
    index = (index + 1) % directions.length;
  }

  return directions[index];
};
