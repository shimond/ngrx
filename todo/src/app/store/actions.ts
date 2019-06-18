import { Action } from '@ngrx/store';
import { Show } from '../shows.model';
export const INCEMENT_COUNTER = '[Counter] IncermentCounterAction';
export const INIT_SHOWS = '[Shows] Init Shows';
export const INIT_SHOWS3 = '[Shows3] Init Shows';
export const REMOVE_SHOW = '[Shows] remove show';


export class IncermentCounterAction implements Action {
    readonly type = INCEMENT_COUNTER;
    constructor() { }
}



export class InitShowsAction implements Action {
    readonly type = INIT_SHOWS;
    constructor(public shows: Show[]) { }
}


export class RemoveShowAction implements Action {
    readonly type = REMOVE_SHOW;
    constructor(public show: Show) { }
}


export class InitShowsAction2 implements Action {
    readonly type = INIT_SHOWS3;
    constructor(public shows3: Show[]) { }
}

export type MainActions =
    IncermentCounterAction;


export type ShowsActions =
    InitShowsAction2 |
    InitShowsAction |
    RemoveShowAction;
