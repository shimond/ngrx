import { ShowsStore, AppStore } from './../store/store';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Show } from '../shows.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  shows$: Observable<Show[]>;

  ngOnInit() {
    this.shows$ = this.store.select(x => x.showsData.shows).pipe(tap((p) => console.log('TAP', p.length)));
  }
  constructor(private breakpointObserver: BreakpointObserver, private store: Store<AppStore>) { }
}
