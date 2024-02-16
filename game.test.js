
const { checkPuzzleStatus } = require('./game');

// Mock puzzleData to simulate the game state
const puzzleData = {
  rows: [
    [{ currentState: 0, correctState: 0 }, { currentState: 1, correctState: 1 }, { currentState: 2, correctState: 2 }],
    [{ currentState: 0, correctState: 0 }, { currentState: 1, correctState: 1 }, { currentState: 2, correctState: 2 }],
    [{ currentState: 0, correctState: 0 }, { currentState: 1, correctState: 1 }, { currentState: 2, correctState: 2 }]
  ]
};

describe('checkPuzzleStatus', () => {
  it('should return "You did it!!" if all squares are correct', () => {
    const status = checkPuzzleStatus(puzzleData);
    expect(status).toBe('You did it!!');
  });

  it('should return "Something is wrong" if one or more squares are incorrect', () => {
    // Modify puzzleData to simulate an incorrect state
    puzzleData.rows[0][0].currentState = 1;

    const status = checkPuzzleStatus(puzzleData);
    expect(status).toBe('Something is wrong');
  });
});
