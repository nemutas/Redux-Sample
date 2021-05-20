import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { css } from '@emotion/css';
import { CreateUserPage } from './components/CreateUserPage';
import { UserListPage } from './components/UserListPage';
import { persistor, store } from './store/store';

export const App: React.FC = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<div className={s_wrapper}>
					<CreateUserPage />
					<UserListPage />
				</div>
			</PersistGate>
		</Provider>
	);
};

const s_wrapper = css`
	display: flex;
	min-height: 100vh;
`;
