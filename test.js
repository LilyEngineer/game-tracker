document.addEventListener("DOMContentLoaded", () => {
  let gameData = {
    backlog: ["Game 1", "Game 2"],
    playing: ["Game 3"],
    completed: []
  };

  // Mock the localStorage methods
  const localStorageMock = {
    getItem: () => JSON.stringify(gameData),
    setItem: (key, value) => {
      console.log(`LocalStorage Updated: ${key} = ${value}`);
      gameData = JSON.parse(value);
    }
  };

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
  });

  // Test - Adding a game
  function testAddGame() {
    const inputGameName = "New Game";
    gameData.backlog.push(inputGameName);
    console.assert(gameData.backlog.includes(inputGameName), 'Test failed: Game not added to backlog');
  }

  // Test - Moving a game from Backlog to Playing
  function testMoveGameToPlaying() {
    const gameToMove = gameData.backlog[0];
    gameData.playing.push(gameToMove);
    gameData.backlog = gameData.backlog.filter(game => game !== gameToMove);
    console.assert(gameData.playing.includes(gameToMove), 'Test failed: Game not moved to Playing');
    console.assert(!gameData.backlog.includes(gameToMove), 'Test failed: Game still in Backlog');
  }

  // Test - Moving a game from Playing to Completed
  function testMoveGameToCompleted() {
    const gameToMove = gameData.playing[0];
    gameData.completed.push(gameToMove);
    gameData.playing = gameData.playing.filter(game => game !== gameToMove);
    console.assert(gameData.completed.includes(gameToMove), 'Test failed: Game not moved to Completed');
    console.assert(!gameData.playing.includes(gameToMove), 'Test failed: Game still in Playing');
  }

  // Test - Deleting a game
  function testDeleteGame() {
    const gameToDelete = gameData.playing[0];
    gameData.playing = gameData.playing.filter(game => game !== gameToDelete);
    console.assert(!gameData.playing.includes(gameToDelete), 'Test failed: Game not deleted');
  }

  // Test - Reset Tracker (Clear all data)
  function testResetTracker() {
    gameData = { backlog: [], playing: [], completed: [] };
    console.assert(gameData.backlog.length === 0, 'Test failed: Backlog not cleared');
    console.assert(gameData.playing.length === 0, 'Test failed: Playing not cleared');
    console.assert(gameData.completed.length === 0, 'Test failed: Completed not cleared');
  }

  // Run all tests
  testAddGame();
  testMoveGameToPlaying();
  testMoveGameToCompleted();
  testDeleteGame();
  testResetTracker();

  console.log('All tests completed.');
});
