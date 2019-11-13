import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { switchMap, map } from 'rxjs/operators';
import { Board, Task } from './kanban.data-models';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private boardsCollectionName = 'boards';

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  /**
   * Creates a new board for the current user
   * @param data: Board
   */
  async createBoard(data: Board) {
    const user = await this.afAuth.auth.currentUser;
    return this.db.collection(this.boardsCollectionName).add({
      ...data,
      uid: user.uid,
      tasks: [{ description: 'Hello!', label: 'yellow' }],
    });
  }

  /**
   * Delete Board
   * @param boardId: string
   */
  deleteBoard(boardId: string) {
    return this.db
      .collection(this.boardsCollectionName)
      .doc(boardId)
      .delete();
  }

  /**
   * Update Tasks on selected board
   * @param boardId: string
   * @param tasks: Task[]
   */
  updateTasks(boardId: string, tasks: Task[]) {
    return this.db
      .collection(this.boardsCollectionName)
      .doc(boardId)
      .update({ tasks });
  }

  /**
   * Remove a specific task from the board
   *
   */
  removeTask(boardId: string, task: Task) {
    return this.db
      .collection(this.boardsCollectionName)
      .doc(boardId)
      .update({
        tasks: firebase.firestore.FieldValue.arrayRemove(task),
      });
  }

  /**
   * Get all boards owned by current user
   */
  getUserBoards() {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db
            .collection<Board>(this.boardsCollectionName, ref =>
              ref.where('uid', '==', user.uid).orderBy('priority')
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }

  sortBoards(boards: Board[] ) {
    const db = firebase.firestore();
    const batch = db.batch();
    const refs = boards.map(b => db.collection(this.boardsCollectionName)
      .doc(b.id));
    refs.forEach((ref, idx) => batch.update(ref, {priority: idx}));
    batch.commit();
  }
}
