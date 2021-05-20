export type UserInfoType = {
	id: string;
	username: string;
	password: string;
};

export type ActionType = {
	type: 'ADD' | 'UPDATE' | 'DELETE';
	user: UserInfoType;
};
