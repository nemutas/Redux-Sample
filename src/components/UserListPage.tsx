import React from 'react';
import { css } from '@emotion/css';
import { useUserSelector } from '../store/hooks';
import { UserCard } from './UserCard';

export const UserListPage: React.FC = () => {
	console.log('UserListPage Render');

	const users = useUserSelector();

	return (
		<div className={s_wrapper}>
			{users.map(user => (
				<UserCard key={user.id} id={user.id} username={user.username} password={user.password} />
			))}
		</div>
	);
};

const s_wrapper = css`
	flex: 1;
	/* border: 3px solid red; */
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	align-content: flex-start;
	padding: 20px;
`;
