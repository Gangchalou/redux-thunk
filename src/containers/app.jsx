// import React from 'react'
import {connect} from "react-redux";

import {decrement, increment,incrementAsync} from "../redux/actions";
import Counter from '../components/counter'

export default connect (    //接受一个组件类，返回新的组件
    state=>({count:state}),
    {increment,decrement,incrementAsync}
)(Counter)     //当前的容器组建包装一个ui组件Counter

//