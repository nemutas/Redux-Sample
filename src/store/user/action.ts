import { ActionType, UserInfoType } from './type';

export const addUser = (user: UserInfoType): ActionType => {
	return {
		type: 'ADD',
		user
	};
};

export const updateUser = (user: UserInfoType): ActionType => {
	return {
		type: 'UPDATE',
		user
	};
};

export const deleteUser = (user: UserInfoType): ActionType => {
	return {
		type: 'DELETE',
		user
	};
};
