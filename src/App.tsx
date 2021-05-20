import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { PageContainer } from './components/PageContainer';
import { persistor, store } from './store/store';

export const App: React.FC = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<PageContainer />
			</PersistGate>
		</Provider>
	);
};
