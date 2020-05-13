import React from 'react';
import{connect,useDispatch} from 'dva';

const styles = require('./article.less')

const Article:React.FC<any> = props=>{

  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch({
      type:'shop/setInDetail',
      payload:true
    })
  },[]);

  return(
    <div className={styles.articleWrap}>
      <h2 className={styles.arcTitle}>
        又到了春如四季的日子了
      </h2>
      <div className={styles.auther}>
        WithAnt
        <time>2020/05/09</time>
      </div> 
      <div className={styles.arcCom}>
        <p  id='ddd'>
        十句真言

　　第一句：

　　做人，一定要知恩图报！别忘了曾经帮助过你的恩人，别伤害经常指引你的贵人，否则，你的朋友会越来越少，你的人生会越过越难。

　　第二句：

　　别人怎么看你，怎么说你，都是他们的事，和你毫无关系，你要怎么活，怎么过，也和他们毫无关系，做好你自己，无需去在意。

　　第三句：

　　当你到了一定的年龄，你就会明白，聪明是一种天赋，而善良是一种选择，善良永远比聪明难做！

　　第四句：

　　不联系，不代表忘记，但是不闻不问一定是疏远了，变淡了，彼此沉默太久，最后连问候都需要斟酌，连主动都需要勇气！

　　第五句：

　　语言，是最具有影响力的的东西，也是最具有杀伤力的武器，所以永远不要嘲讽和用比较绝的话去伤害那些爱你的人。

　　第六句：

　　有时候，等待会等来遗憾，所谓的来日方长，其实就是挥手告别。机会错过了，没有下一次，真情错过了，就是一辈子！

　　第七句：

　　不纠缠，不抱怨，不强求，不计算，用顺其自然的心态，过轻松自在的生活，用心甘情愿的态度，过随遇而安的人生。

　　第八句：

　　有些人和事，不是别人错了，而是自己看错了，自己眼瞎别怪别人，其实都是自己的问题。

　　第九句：

　　有时候，我们原谅了别人，却依然不快乐，我们放下了仇恨，却依然不开心，那是因为，我们忘了原谅自己，放过自己。

　　第十句：

　　最好的幸福，就是活着！以自己喜欢的方式活着，不要管别人如何对待你、评价你，健康快乐才是重点，才大于一切！
        </p>
      </div>
      <div className={styles.arcBot}>

      </div>
    </div>
  )
}


export default connect(({shop}:any)=>{

  return{

  }
})(Article);