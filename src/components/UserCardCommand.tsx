import React from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/css';
import { Button } from '@material-ui/core';
import { deleteUser } from '../store/user/action';
import { UserInfoType } from '../store/user/type';

type PropsType = {
	user: UserInfoType;
};

export const UserCardCommand: React.FC<PropsType> = props => {
	const dispatch = useDispatch();

	const onClickDeleteUser = () => {
		dispatch(deleteUser(props.user));
	};

	return (
		<div className={s_delete_wrapper}>
			<Button
				style={{ width: '80px', height: '25px', marginRight: '10px' }}
				variant="outlined"
				color="secondary"
				onClick={() => onClickDeleteUser()}>
				Delete
			</Button>
		</div>
	);
};

const s_delete_wrapper = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;
