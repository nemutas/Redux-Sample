import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as screenReducer } from './screen/reducer';
import { reducer as userReducer } from './user/reducer';

const rootReducer = combineReducers({
	user: userReducer,
	dark: screenReducer
});

// store 永続化の設定
const persistConfig = {
	key: 'root', // Storageに保存されるキー名
	storage, // 保存先としてlocalStorageがここで設定される
	whitelist: ['user', 'dark'] // 保存するstate
};
const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

// redux dev tool を使えるようにする
const enhancer =
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

// store の作成
// export const store = createStore(rootReducer, enhancer);
export const store = createStore(persistedReducer, enhancer);
// store 永続化の設定
export const persistor = persistStore(store);

export type StateType = ReturnType<typeof store.getState>;
