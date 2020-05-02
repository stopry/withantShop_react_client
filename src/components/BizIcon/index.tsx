import React from 'react';

export default class extends React.PureComponent<any, {}> {
  constructor(props:any) {
    super(props);
  }

  public render() {
    const {type} = this.props;
    return <i className={`iconfont icon-${type}`}/>
  }
};
