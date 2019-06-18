import { IncermentCounterAction } from './store/actions';
import { AppStore } from './store/store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShowsService } from './services/shows.service';
import { distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tv-app';
  counter$: Observable<number>;
  showslen$: Observable<number>;
  constructor(private store: Store<AppStore>) {

  }

  ngOnInit(): void {
    this.counter$ = this.store.select(x => x.counterData.counter);
    this.showslen$ = this.store.select(x => x.showsData.shows.length).pipe(distinctUntilChanged());
  }
  increment() {
    this.store.dispatch(new IncermentCounterAction());
  }

}
