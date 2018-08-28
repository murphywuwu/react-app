import * as React from 'react';
import {
  DragSource, 
  ConnectDragSource,
  DragSourceConnector,
  DragSourceMonitor,
} from 'react-dnd'

import ItemTypes from './ItemTypes'

const style: React.CSSProperties = {
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'move',
	float: 'left',
}

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
    }
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult()
    
    if (dropResult) {
      alert(`You dropped ${item.name} into ${dropResult.name}!`)
    }
  }
}

export default class Box extends React.Component {
  render() {
    const { isDragging, ConnectDragSource } = this.props;
    const name = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return (
      ConnectDragSource &&
      ConnectDragSource(<div style={{ ...style, opacity }}>{name}</div>)
    )
  }
}


DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
  ConnectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(Box)