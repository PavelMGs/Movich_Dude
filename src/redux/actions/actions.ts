import { ICard } from '../../interface/interface';
import { CLEAR_STATE, SET_CARD } from './actionsTypes';

export const setCard = (payload: ICard) => ({
  type: SET_CARD,
  payload,
});

export const clearState = () => ({
  type: CLEAR_STATE,
});
