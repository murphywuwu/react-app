import React from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from './ItemType'


const boxSource = {
  beginDrag() {
    return {}
  }
}

const style: React.CSSProperties = {
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	marginRight: '1rem',
	marginBottom: '1rem',
	cursor: 'move',
}


class SourceBox extends React.Component {
  render() {
    const { isDragging, connectDragSource, showCopyIcon } = this.props;
    const opacity = isDragging ? 0.4 : 1;
    const dropEffect = showCopyIcon ? 'copy' : 'move'

    return (
      connectDragSource &&
      connectDragSource(
        <div style={{ ...style, opacity }}>
          When I am over a drop zone, I haove { showCopyIcon ? 'copy' : 'no' }{' '}icon.
        </div>,
        { dropEffect }
      )
    )
  }
}

export default DragSource(ItemTypes.BOX, boxSource, (connect, monitor) =>({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(SourceBox)