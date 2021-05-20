import { ActionType, UserInfoType } from './type';

const initialState: UserInfoType[] = [
	{
		id: '',
		username: '',
		password: ''
	}
];

export const reducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case 'ADD':
			if (!state.some(user => user.id === action.user.id)) {
				return [...state, action.user];
			} else {
				return state;
			}

		case 'UPDATE':
			return [...state.filter(user => user.id !== action.user.id), action.user];

		case 'DELETE':
			return state.filter(user => user.id !== action.user.id);

		default:
			return state;
	}
};

// const sort = (state: UserInfoType[]) => {
// 	const copy = state.slice();
// 	return copy.sort((a, b) => (a.id > b.id ? 1 : -1));
// };
