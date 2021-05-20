import { useSelector } from 'react-redux';
import { StateType } from './store';
import { UserInfoType } from './user/type';

export const useUserSelector = () => {
	const users = useSelector<StateType, UserInfoType[]>(state => state.user);
	return users.filter(user => user.id && user.username && user.password);
};

export const useDarkModeSelector = () => {
	const dark = useSelector<StateType, boolean>(state => state.dark);
	return dark;
};
