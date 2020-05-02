import React from 'react';
// @ts-ignore
import styles from './index.less';
import { Button } from 'antd-mobile';
import{connect} from 'dva';
import MyBtn from '../../components/MyBtn';

@connect(({ vote, loading }) => {
  return ({
    vote,
    loading: loading.models.vote,
  })
})

class Index extends React.PureComponent{
  constructor(props){
    super(props);
  }

  public componentDidMount(){
    this.getUserList({page:1});
  }

  private async getUserList(page){
    console.log(page,'页数21')
    const {dispatch} = this.props;
    dispatch({
      type:'vote/fetchUserList',
      payload:page
    })
  }

  public render(){
    const {
      vote:{userList}
    } = this.props;
    return (
      <div className={styles.normal}>
        <div className={styles.banner}>
        </div>
        <div className={styles.timeBox}>
          <div className={styles.searchInput}>
            <i className={`${styles.searchIcon} iconfont icon-RectangleCopy`}></i>
            <input type={`search`} placeholder={`输入选手编号/姓名`} className={styles.iptCtr}/>
          </div>
          <div className={styles.timeInfo}>
            <p className={styles.countDownTitle}>
              <i className={`iconfont icon-shalou`}></i>
              距离活动结束还有
            </p>
            <div className={styles.countDown}>
              <i>7</i>天<i>22</i>时<i>20</i>分<i>06</i>秒
            </div>
          </div>
          <MyBtn className={styles.enrollBtn}>
            我要报名
          </MyBtn>

        </div>
        <div className={styles.listWrap}>
          <ul className={styles.listUl}>
            {
              userList.map((item,index)=>(
                <li key={index}>
                  <div className={styles.userIndex}>
                    TOP 1
                  </div>
                  <div className={styles.userImg}>
                    {(index/2>1)?(<img src={require('../../assets/h5/user.png')} alt=""/>):(<img src={require('../../assets/h5/pass.jpg')} alt=""/>)}
                    <div className={styles.userName}>
                      {item.name}
                    </div>
                  </div>
                  <div className={styles.userInfo}>
                    <p className={styles.votes}>
                      人气 <span>10225<i className={`iconfont icon-aixin`}></i></span>
                    </p>
                    <div className={styles.toVote}>
                      NO.{item.id}
                      <MyBtn className={styles.voteBtn} onClick={()=>{console.log(item.id)}}>
                        <i className={`iconfont icon-aixin1`} ></i>
                        &nbsp;投票
                      </MyBtn>
                    </div>
                  </div>
                </li>
              ))
            } 
          </ul>
         <MyBtn className={styles.loadMore}>
           加载更多
         </MyBtn>
        </div>
      </div>
    );  
  }
}

export default Index;