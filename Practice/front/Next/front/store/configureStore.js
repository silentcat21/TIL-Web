// configureStore.js
import { createWrapper } from "next-redux-wrapper";
import { createStore } from 'redux';
import reducer from '../reducers'

const configureStore = () => {
    const store = createStore(reducer);
    store.dispatch({  //dispatch 하면 리듀서로 전달이 됨
        type: 'CHANGE_NICKNAME',
        data: 'Choisang'
    })
    return store
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development' //디버그 트루로 해놓으면 오류관리를 좀더 자세히 해줌
});

export default wrapper;