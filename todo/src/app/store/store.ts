import { ActionReducerMap } from '@ngrx/store';
import { counterReducer, showsReducer } from './reducer';
import { Show } from '../shows.model';


export interface CounterStore {
    counter: number;
}

export interface ShowsStore {
    shows: Show[];
}



export interface AppStore {
    counterData: CounterStore;
    showsData: ShowsStore;
}

export const INIT_APP_STORE: AppStore = {
    counterData: { counter: 0 },
    showsData: { shows: [] }
};


export const reducers: ActionReducerMap<AppStore> = {
    counterData: counterReducer,
    showsData: showsReducer
};



