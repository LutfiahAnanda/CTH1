import { configureStore } from '@redux.js/toolkit';
import authReducer from './reducer/authReducer';

export default configureStore({
    reducer:{
        auth: authReducer,
    }
});