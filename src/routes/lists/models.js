import {apis} from '../../services'
const {FindTmplTable} = apis.index;
export default {
    namespace: 'toConfigure',
    state: {
        loading: false,
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
    effects: {
        * findTmplTable ({ payload }, { call }) {
            return yield call(FindTmplTable, payload)
        },
    },
};
