import { ActionType } from './type';

export const reducer = (state = false, action: ActionType) => {
	switch (action.type) {
		case 'SWITCHING':
			return action.dark;

		default:
			return state;
	}
};
