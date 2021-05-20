import React from 'react';
import { css } from '@emotion/css';
import { UserInfoType } from '../store/user/type';
import { UserCardCommand } from './UserCardCommand';
import { UserCardItem } from './UserCardItem';

export const UserCard: React.FC<UserInfoType> = props => {
	const { id, username, password } = props;

	return (
		<div className={s_container}>
			<UserCardItem value={id}>ID</UserCardItem>
			<UserCardItem value={username}>UserName</UserCardItem>
			<UserCardItem value={password}>PassWord</UserCardItem>
			<UserCardCommand user={{ id, username, password }} />
		</div>
	);
};

const s_container = css`
	width: 200px;
	height: 250px;
	/* border: 2px solid green; */
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	margin: 10px;
`;
