import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
// Wrap your component with DragSource to make it draggable.DragSource is a higher-order component
// accepting three required parameters(to use DragSource, don't forget to wrap the top-level component of your app in DragDropContext)
import { DragSource } from 'react-dnd';

/* 
  props: 你的组件当前的props
  monitor: DragSourceMonitor的实例。使用它查询当前拖动状态的信息，例如当前拖动的项目及其类型，当前和初始坐标和偏移量，以及它是否已被删除。
  component: 
*/
const knightSource = {
  // 当拖动刚开始时，beginDrag被调用。
  // 你必须返回一个描述被拖动数据的纯Javascript对象。
  // what you return is the only information available to the drop targets about the drag source so it's import to pick the minimal data they need to know.
  // You may be tempted to put a reference to the component into it.
  // 你可能想要将组件引用到其中，但您应该非常努力地避免这样做，应该它会耦合拖动源和放置目标。从这个方法返回类似{id：props.id}的东西是个好主意。
  beginDrag(props, monitor, component) {
    return {};
  },
  // Optional:
  endDrag(props, monitor, component) {
    // monitor.didDrop
    // monitor.getDropResult
  },
  // Optional:Use it specify whether the dragging is currently allowed.if you want to always allow it, just omit this method.
  // specifying it is handy if you'd like to disable dragging based on some predicate over props?
  canDrag(props, monitor) {
    // Note: You may not call monitor.canDrag() inside this method
  },
  // Optional:
  isDragging(props, monitor) {
    // Note: You may not call monitor.isDragging() inside this method
  }
}

/* 
 
*/
function collect(connect, monitor) {
  return {
    connetctDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}

export default class Knight extends Component {
  render() {
    return <span>♘</span>;
  }
}

Knight.propTypes  = {
  connetctDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
}

/* 
  @DragSource(type, spec, collect)
  type: required.either a string, an es6 symbol, or a function that returns either given the component's props。只有为相同类型注册的放置目标才会对此拖动源生成的项目做出反应。
  spec: required.a plain JavaScript object with a few allowed methods on it.It describes how the drag source reacts to the drag and drop events.
  collect: required.The collecting function.It should return a plain object of the props to inject into your  component.It receives two parameters: connect and monitor
  options: Optional.A plain object.(除非有性能问题，否则不用使用它)
*/
export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);