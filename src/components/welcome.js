import React from 'react'

export default function Welcome ( props ) { // props:挂载父组件传递给子组件的数据,不可设置
    return (<h1>Hello, { props.name }</h1>)
}

