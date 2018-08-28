import React, { Component } from 'react'
import { observer } from 'mobx-react'

// 初始化状态
import ExpandableForm from './ExpandableForm'
import './styles/ProfileContainer.css'

class ProfileContainer extends Component {
    constructor () {
        this.state = {
            expanded: false
        }
    }
    static propTypes = {
        model: object.isRequired,
        title: string
    }
    static defaultProps = {
        model: {
            id: 0
        },
        title: 'Your name'
    }
    handleSubmit = ( e ) => {
        e.preventDefault();
        this.props.model.save();
    } 
    handleNameChange = ( e ) => {
        this.props.model.changeName(e.target.value);
    }
    handleExpand = ( e ) => {
        e.preventDefault();
        this.setState(prevState => ({ expanded: !prevState.expanded }))
    }
    render () {
        const {
            model,
            title
        } = this.props

        return (
            <ExpandableForm
              onSubmit = {this.handleSubmit}
              expanded = {this.state.expanded}
              onExpand = {this.handleExpand}
            >
              <div>
                  <h1>{title}</h1>
              </div>
              <input 
                type="text"
                value={model.name}
                onChange={this.handleNameChange}
                placeholder="Your Name"
              />
            </ExpandableForm>
        )
    }
}

export default observer(ProfileContainer)