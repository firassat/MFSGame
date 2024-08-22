import Action from "./Actions";

class MinMax {
  max(GameState) {
    const action = new Action();
    if (action.isFinish(GameState.board)) {
      const p = action.evaluate(GameState.board);
      return [GameState, p];
    }
    const nextState = action.nextState(GameState.board, "x");

    let min = Number.MIN_VALUE;
    let index = 0;
    nextState.map((state, i) => {
      const p = this.min(state)[1];
      if (p > min) {
        min = p;
        index = i;
      }
    });

    return [nextState[index], min];
  }
  min(GameState) {
    const action = new Action();
    if (action.isFinish(GameState.board)) {
      const p = action.evaluate(GameState.board);
      return [GameState, p];
    }
    const nextState = action.nextState(GameState.board, "o");

    let max = Number.MAX_VALUE;
    let index = 0;

    nextState.map((state, i) => {
      const p = this.max(state)[1];
      if (p < max) {
        max = p;
        index = i;
      }
    });

    return [nextState[index], max];
  }
}
export default MinMax;
