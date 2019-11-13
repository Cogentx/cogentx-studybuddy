import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';


@NgModule({
  declarations: [BoardComponent, SquareComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TicTacToeRoutingModule,
  ]
})
export class TicTacToeModule { }
