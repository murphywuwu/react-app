import * as React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import BoxWithImage from './BoxWithImage'
import BoxWithHandle from './BoxWithHandle'


class Container extends React.Component {
  render() {
		return (
			<div>
				<div style={{ marginTop: '1.5rem' }}>
					<BoxWithHandle />
          <BoxWithImage />
				</div>
			</div>
		)
	}
}

export default DragDropContext(HTML5Backend)(Container);