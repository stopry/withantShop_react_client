import React from 'react';
import {Modal} from 'antd-mobile';

export const useModal = (initTitle: string, initContent: string | React.ReactElement) => {
  const [visible, setVisible] = React.useState(false);
  const [title, setTitle] = React.useState(initTitle);
  const [content, setContent] = React.useState(initContent);
  const CustomModal =  () => {
      return (<Modal
        visible={visible}
        title={title}
        closable={false}
    >
        {content}
    </Modal>);
  }
  const show = (content?: string | React.ReactElement) => {
      content && setContent(content);
      setVisible(true);
  };
  const hide = (delay?: number) => {
      if (delay) {
          setTimeout(() => setVisible(false), delay);
      } else {
          setVisible(false)
      }
  };
  return {
      show, hide, CustomModal, setTitle, setContent
  }
}