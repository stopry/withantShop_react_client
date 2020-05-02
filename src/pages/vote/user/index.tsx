
import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
interface IVote {
  vote:any,
  dispatch?:any
}

@connect(({vote})=>({vote}))
export default class index extends React.Component<IVote>{

  constructor(porps:any){
    super(porps);
  }

  setInDetailFalse(){
    const { dispatch } = this.props;
   /* dispatch({
      type:'vote/setInDetail',
      payload:true
    })
    console.log('userindex',"userindex");*/
  }

  componentDidMount(): void {
    this.setInDetailFalse()
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className={styles.normal}>
        <h1>Page index</h1>
      </div>
    );
  }
}
