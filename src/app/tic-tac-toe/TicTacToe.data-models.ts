export interface TicTacToeBoard {
  cols: number;
  rows?: number;
  gap?: number;
  bg?: string;
}

export interface TicTacToeTile {
  col: number;
  row?: number;
  display?: {front?: any, back?: any[]};
}
