import { ActionType } from './type';

export const reducer = (state = 0, action: ActionType) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + action.count;

		case 'DECREMENT':
			return state - action.count;

		case 'RESET':
			return 0;

		default:
			return state;
	}
};
