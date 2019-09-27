import dva from 'dva'
import '../regist'
import './index.less'

// 1. Initialize
const app = dva({
    initialState: {},
    onError(e) {
        // console.error(e)
    }
});
// 2. Pluginss
// app.use({});

// 3. Model
app.model(require('../routes/index/models').default);
app.model(require('../routes/lists/models').default);
// 4. Router
app.router(require('./route/index').default);
// 5. Start
app.start('#root');

