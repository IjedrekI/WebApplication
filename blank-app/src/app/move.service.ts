import { Injectable } from '@angular/core';
import { Move } from './new-move/move-model';

@Injectable({
  providedIn: 'root'
})
export class MoveService {
  moveList: Move[] = [];

  addFilm(move: Move): void {
    this.moveList.push(move);
    this.newMethod();
  }

  private newMethod() {
    localStorage.setItem('moveLiset', JSON.stringify(this.moveList));
  }
}
