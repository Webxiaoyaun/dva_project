import React from 'react';
import {connect} from 'dva';
import {Redirect, Switch, Route} from 'dva/router';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN'
import Loading from './components/Loading'
import styles from "./index.css"

function Index({index = {}, location}) {
    const {routes = []} = index;
    return (
        < ConfigProvider locale={zhCN}>
            <div>
                {
                    location.pathname === '/' ? <Redirect to={'/lists'}/> : null
                }
                <Loading/>
                {
                    <div className={styles.content}>
                        <Switch>
                            {
                                routes.map((item) => {
                                    return <Route key={item.url} path={item.url} component={item.component}></Route>
                                })
                            }
                        </Switch>
                    </div>
                }
            </div>
        </ConfigProvider>
    );
}

export default connect(({index}) => ({
    index
}))(Index);
