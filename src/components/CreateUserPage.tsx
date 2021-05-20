import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/css';
import { Button, IconButton, TextField } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { useDarkModeSelector } from '../store/hooks';
import { screenMode } from '../store/screen/action';
import { addUser } from '../store/user/action';
import { halfwidthAlphanumeric } from '../utils/random';

export const CreateUserPage: React.FC = () => {
	const [id, setId] = useState('');
	const [username, setUserName] = useState('');
	const [password, setPassWord] = useState('');
	const [enableRegister, setEnableRegister] = useState(false);

	const dispatch = useDispatch();
	const dark = useDarkModeSelector();

	const registerUser = () => {
		dispatch(addUser({ id, username, password }));
	};

	useEffect(() => {
		setEnableRegister(!!id && !!username && !!password);
	}, [id, password, username]);

	const onClickLightDark = () => {
		dispatch(screenMode(!dark));
	};

	return (
		<div className={s_wrapper}>
			<div className={s_id}>
				<TextField
					id="user-id"
					style={{ marginRight: '10px', width: '100%' }}
					label="ID"
					onChange={e => setId(e.target.value)}
					value={id}
				/>
				<Button variant="outlined" color="default" onClick={() => setId(halfwidthAlphanumeric())}>
					Generate
				</Button>
			</div>
			<TextField
				id="user-name"
				style={{ margin: '10px' }}
				label="UserName"
				onChange={e => setUserName(e.target.value)}
			/>
			<TextField
				id="user-password"
				style={{ margin: '10px' }}
				label="PassWord"
				onChange={e => setPassWord(e.target.value)}
			/>
			<div className={s_register_wrapper}>
				<Button
					style={{ width: '100px', marginRight: '10px' }}
					variant="outlined"
					color="primary"
					disabled={!enableRegister}
					onClick={() => registerUser()}>
					Register
				</Button>
			</div>
			<div className={s_screenmode}>
				<IconButton aria-label="light-dark" onClick={() => onClickLightDark()}>
					<Brightness4Icon />
				</IconButton>
			</div>
		</div>
	);
};

const s_wrapper = css`
	width: 400px;
	border-right: 2px solid gray;
	display: flex;
	flex-direction: column;
`;

const s_id = css`
	display: flex;
	align-items: center;
	margin: 10px;
`;

const s_register_wrapper = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin-top: 10px;
`;

const s_screenmode = css`
	display: flex;
	margin-top: auto;
`;
