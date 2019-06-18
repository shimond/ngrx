import { ShowsStore } from './../store/store';
import { Injectable } from '@angular/core';
import { Show } from '../shows.model';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { InitShowsAction } from '../store/actions';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  async reloadShows(): Promise<void> {
    const data = await this.http.get<Show[]>('http://api.tvmaze.com/shows').toPromise();
    this.store.dispatch(new InitShowsAction(data));
  }

  constructor(
    private store: Store<ShowsStore>,
    private http: HttpClient) { }
}
