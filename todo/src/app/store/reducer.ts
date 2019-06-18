import { CounterStore, INIT_APP_STORE, ShowsStore } from './store';
import { MainActions, INCEMENT_COUNTER, ShowsActions, INIT_SHOWS, INIT_SHOWS3, REMOVE_SHOW } from './actions';

export function counterReducer(state: CounterStore = INIT_APP_STORE.counterData, action: MainActions): CounterStore {
    switch (action.type) {
        case INCEMENT_COUNTER:
            return { counter: state.counter + 1 };
    }
    return state;
}

export function showsReducer(state: ShowsStore = INIT_APP_STORE.showsData, action: ShowsActions): ShowsStore {
    switch (action.type) {
        case INIT_SHOWS:
            return { shows: action.shows };
        case REMOVE_SHOW:
            console.log(action.show.id);
            return { shows: state.shows.filter(x => x.id !== action.show.id) };

    }
    return state;
}
