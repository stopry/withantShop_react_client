
import React,{Suspense,lazy} from 'react';
import {List,Button} from 'antd-mobile';
import {useReducer} from '@/hooks/useReducer';
// @ts-ignore
import styles from './enroll.less';
import {useModal} from '@/pages/vote/components/useModal'


 


const Enroll: React.FC<any> = props => {

  const {hide, show, CustomModal} = useModal('系统提示',  '正在初始化...');


  const [len,setLen] = React.useState(10);

  const [todos,dispatch] = useReducer((state:Array<any>,action:string)=>{
    console.log(state,4)
    const list = [];
    for(let i = 0;i<len;i++){
      list.push(i)
    }
    setLen(len+1);
    console.log(len);
    return list;
  },["4"]);

  React.useEffect(() => {
    document.title = `You clicked ${len} times`;
  },[]);


  
  function handleAddClick(item:string){
    dispatch(item);
  }

  const TestCom = lazy(() =>
    import('./components/testCom')
  );

  return (
    <div className={styles.normal}>
      
      <h1 onClick={()=>{show("4"),hide(2000)}}>Page enroll</h1>
      <Suspense fallback={<div>正在加载中...</div>}>
          <TestCom>赫尔呵呵</TestCom>
      </Suspense>
      <CustomModal />
      <Button onClick={()=>{handleAddClick("9")}}>增加</Button>
      <List>
      {
        todos.map((item:string,i:number)=>{
          return(
          <List.Item key={i}>
            {item}
          </List.Item>
          )
        })
      }
     </List>
    </div>
  );
}

export default Enroll;