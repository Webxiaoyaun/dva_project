import React from 'react'
import {connect} from 'dva'
import {Spin, Icon} from 'antd'
import styles from './Loading.css'
import {global} from '../../../rdap-utils'

class Loading extends React.Component {
    componentDidMount() {
        global.loading = this
    }

    show = (tip = '正在加载...') => {
        const {dispatch} = this.props
        dispatch({
            type: 'index/loading',
            payload: {
                visible: true, tip
            }
        })
    }

    hide = (tip = '正在加载...') => {
        const {dispatch} = this.props
        dispatch({
            type: 'index/loading',
            payload: {
                visible: false, tip
            }
        })
    }

    render() {
        const {loading, tip} = this.props.index;
        const anIcon = null;
         return loading ? <Spin indicator={anIcon} spinning={loading} tip={tip} className={styles.fullloading}/> : null
    }
}

export default connect(({index}) => ({index}))(Loading)