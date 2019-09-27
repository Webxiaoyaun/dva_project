import Lists from "../lists/index"
const routes = [
    {
        url: "/lists",
        name: "Lists",
        component: Lists
    },
]
export default {
    namespace: 'index',
    state: {
        routes: routes,
        userInfo: null,
        inited: false,
        loading: false,
        hasPostern: false,
        tip: '正在加载',
    },
    reducers: {
        setState(state, {payload}) {
            return {...state, ...payload}
        },
        loading(state, {payload}) {
            return {...state, loading: payload.visible, tip: payload.tip}
        },
    },
    subscriptions: {},
    effects: {},
};
