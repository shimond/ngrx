import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/store';
import { map } from 'rxjs/operators';
import { InitShowsAction, RemoveShowAction } from '../store/actions';
import { Show } from '../shows.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todo$: Observable<Show[]>;

  done: Show[] = [
  ];

  drop(event: CdkDragDrop<Show[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      const show = event.previousContainer.data[event.previousIndex];
      this.store.dispatch(new RemoveShowAction(show));

      // transferArrayItem(event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex);

    }
  }

  constructor(private store: Store<AppStore>) {
    this.todo$ = store.select(x => x.showsData.shows);
  }
}
