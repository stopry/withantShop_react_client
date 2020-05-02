
import React from 'react';
import {List,Button} from 'antd-mobile';

const TestCom: React.FC<any> = props => {
  return (
    <div>
      <Button>按钮</Button>
      <List>
        <List.Item>
          111
        </List.Item>
        <List.Item>
          222
        </List.Item>
        <List.Item>
          333
        </List.Item>
      </List>
      一个测试的组件
      {props.children}
    </div>
  );
}

export default TestCom;