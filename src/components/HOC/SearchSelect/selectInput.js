import React from 'react'

// 对于颗粒度最小的组件而言，我们希望它是纯粹的、木偶示的组件
class SelectInput extends React.Component {
  static displayName = 'SelectInput';

  render() {
    const { selectedItem, isActive, onClickHeader, placeholder } = this.props;
    const { text } = selectedItem;

    return (
      <div>
        <div onClick={onClickHeader}>
          <Input 
            type="text"
            disabled
            value={text}
            placeholder={placeholder}
          />
          <Icon className={isActive} name="angle-down"/>
        </div>
      </div>
    );
  }
}
