import React from 'react';

// 组件层面的抽象不仅仅只停留在界面上，组件中的相同交互逻辑和业务逻辑也应该进行抽象

// 完成SearchInpu与List的交互
const searchDecorator = WrappedComponent => {
  class searchDecorator extends React.Component {
    constructor (props) {
      super(props);

      this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(keyword) {
      this.setState({
        data: this.props.data,
        keyword,
      })
    }
    render() {
      const { data, keyword } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          data={data}
          keyword={keyword}
          onSearch={this.handleSearch}
        />
      )
    }
  }
  return searchDecorator
}

// 完成List数据请求
const asyncSelectDecorator = WrappedComponent => {
  class AsyncSelectDecorator extends React.Component {
    componentDidMount() {
      const { url, params } = this.props;

      fetch(url, {params}).then(data => {
        this.setState({
          data,
        })
      })
    }
    render() {
      
      return (
        <WrappedComponent
          {...this.props}
          data={this.state.data}
        />
      )
    }
  }
  return AsyncSelectDecorator
}

