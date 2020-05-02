
import React,{useEffect} from 'react';
import {connect} from 'dva';
import styles from './award.css';

interface IAward {
  vote:any,
  dispatch?:any
}


function Award({dispatch}){
  useEffect(()=>{
/*    dispatch({
      type:'vote/setInDetail',
      payload:false,
    })
    console.log('award',"award");*/
  });

  return (
    <div className={styles.normal}>
      <h1>Page award</h1>
    </div>
  );
}

function mapStateToProps(state,ownProps) {
  return{
    state,ownProps
  }
}
export default connect(mapStateToProps)(Award);
