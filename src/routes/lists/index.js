import React from 'react'
import {connect} from 'dva'

const mapProps = ({}) => ({})
const mapActions = (dispatch) => ({
    findTmplTable: payload => dispatch({type: 'toConfigure/findTmplTable', payload}),
})

@connect(mapProps, mapActions)
class index extends React.Component {
    state = {
        tmplParms:{
            templateId: null,
            templateName: null,
            solidType: null,
            assessType: null,
            tmepType: null,
            userType: null,
            startNum: 1,
            countNum: 20,
        },
    }
    componentDidMount() {
        this.findData();
    }
    findData = () => {
       const {findTmplTable} = this.props;
       const {tmplParms} = this.state;
        var obj={};
        for(let k in tmplParms){
            if(tmplParms[k]){
                obj[k] = tmplParms[k]
            }
        }
        findTmplTable(obj).then(res => {
            console.log(res);
        })
    }
    render() {
        return <div>hello word;</div>
    }
}

export default index