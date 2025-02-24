import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import createSagaMiddleware from 'redux-saga';
import productSaga from './saga/productSaga';
import productReducer from './slices/productSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(productSaga);