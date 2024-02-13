type Coordinates = {
  x: number
  y: number
}

type Arena = {
  corner1: Coordinates
  corner2: Coordinates
}

type Heading = 'north' | 'east' | 'south' | 'west'
type Movement = 'forward' | 'left' | 'right'
type RobotStatus = 'ok' | 'error' | 'crash'
type Directions = Movement[]

type RobotInput = {
  location: Coordinates
  heading: Heading
  arena: Arena
  directions: Directions
}

type RobotOutput = {
  status: RobotStatus
  location: Coordinates
  heading: Heading
  path: Directions
}

type Robot = {
  robotStatus: RobotStatus
  location: Coordinates
  arena: Arena
  heading: Heading
  directions: Directions
  pathTaken: Directions
  setInput: (input: RobotInput) => RobotOutput
}




export { Coordinates, Arena, Heading, Movement, RobotStatus, Directions, RobotInput, RobotOutput, Robot }
