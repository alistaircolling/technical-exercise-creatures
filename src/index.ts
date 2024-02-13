import { setInput } from './robot';
import { RobotInput } from './types';

export function runWith(input: RobotInput) {
  return setInput(input);
}

const sampleInput: RobotInput = {
  location: { x: 0, y: 0 },
  heading: 'north',
  arena: {
    corner1: { x: 0, y: 0 },
    corner2: { x: 5, y: 5 }
  },
  directions: ['forward', 'right', 'forward', 'left']
};

console.log(JSON.stringify(runWith(sampleInput)));
