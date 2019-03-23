import {Action} from '../actions';
import {IStoreState} from '../types';
import Player from "../models/Player";
import {Actions} from "../constants";
import {default as i18n} from "../i18n";
import NameGenerator from "../models/NameGenerator";

const initialState: IStoreState = {
    nameHost: undefined,
    nameGuest: undefined,
    hostReady: false,
    guestReady: false,
    whoAmI: undefined,
    ownName: NameGenerator.getNameFromLocalStorage(),
    preset: undefined,
    nextAction: 0,
    events: [],
    language: i18n.language,
    showModal: (NameGenerator.getNameFromLocalStorage() === null)
};

export function updateState(state: IStoreState = initialState, action?: Action): IStoreState {
    if (!action) return state;
    switch (action.type) {
        case Actions.ACTION_COMPLETED:
            console.log(Actions.ACTION_COMPLETED, state.nextAction + 1);
            const eventsCopy = [...state.events];
            eventsCopy.push(action.value);
            return {...state, nextAction: state.nextAction + 1, events: eventsCopy};
        case Actions.SET_NAME:
            console.log(Actions.SET_NAME, action);
            if (action.player === Player.HOST) {
                return {...state, nameHost: action.value, hostReady: true};
            } else if (action.player === Player.GUEST) {
                return {...state, nameGuest: action.value, guestReady: true};
            } else {
                return state;
            }
        case Actions.CHANGE_OWN_NAME:
            console.log(Actions.CHANGE_OWN_NAME, action);
            NameGenerator.writeNameToLocalStorage(action.value);
            return {...state, ownName: action.value, showModal: action.value === null};
        case Actions.APPLY_CONFIG:
            console.log(Actions.APPLY_CONFIG, action.value);
            let hostReady = state.hostReady;
            let guestReady = state.guestReady;
            if (action.value.yourPlayerType === Player.HOST) {
                hostReady = true;
            }
            if (action.value.yourPlayerType === Player.GUEST) {
                hostReady = true;
                guestReady = true;
            }
            return {
                ...state,
                events: action.value.events,
                nameGuest: action.value.nameGuest,
                nameHost: action.value.nameHost,
                nextAction: action.value.nextAction,
                whoAmI: action.value.yourPlayerType,
                hostReady,
                guestReady
            };
        case Actions.SET_LANGUAGE:
            console.log(Actions.SET_LANGUAGE, action.language);
            i18n.changeLanguage(action.language);
            return {
                ...state,
                language: action.language
            }

    }
    return state;
}
