
const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    },
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
}

// async action creator

// 액션을 동적으로 입력하는 함수 action creator
const changeNickname = (data) => {
    return {
        type: 'CHANGE_NICKNAME',
        data,
    }
}

// const changeNickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'Choisang',
// }

// store.dispatch(changeNickname('ssamin'))

changeNickname('Choisang')

// (이전상태, 액션) => 다음상태를 만들어내는 함수 reducer
const rootReducer = ((state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data
                },
            };
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                }
            };
            
    }
})

export default rootReducer;