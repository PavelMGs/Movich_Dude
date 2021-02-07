import { ICard } from '../../interface/interface';
import { CLEAR_STATE, SET_CARD } from '../actions/actionsTypes';

interface IAction {
  type: string;
  payload: ICard;
}

export type StateType = Array<ICard>;

// eslint-disable-next-line import/prefer-default-export
export const filmCards = (state: StateType = [], action: IAction) => {
  switch (action.type) {
    case SET_CARD:
      let hasItem = false;
      const newSetState = state.map((item) => {
        if (item.id === action.payload.id) {
          // eslint-disable-next-line no-param-reassign
          item = action.payload;
          hasItem = true;
        }
        return item;
      });
      if (!hasItem) {
        newSetState.push(action.payload);
      }
      return newSetState;

    case CLEAR_STATE: {
      const newState: StateType = [];
      return {
        state: newState,
      };
    }

    default:
      return state;
  }
};
