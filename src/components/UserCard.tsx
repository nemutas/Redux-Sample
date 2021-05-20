import React from 'react';
import { css } from '@emotion/css';
import { Card, makeStyles } from '@material-ui/core';
import { UserInfoType } from '../store/user/type';
import { UserCardCommand } from './UserCardCommand';
import { UserCardItem } from './UserCardItem';

const useStyles = makeStyles({
	card: {
		width: '200px',
		height: '250px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		margin: '10px'
	}
});

export const UserCard: React.FC<UserInfoType> = props => {
	const { id, username, password } = props;
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<UserCardItem value={id}>ID</UserCardItem>
			<UserCardItem value={username}>UserName</UserCardItem>
			<UserCardItem value={password}>PassWord</UserCardItem>
			<UserCardCommand user={{ id, username, password }} />
		</Card>
	);
};
