import React from 'react';
import {connect,useDispatch} from 'dva';
import GoodsListCard from './goodsListCard';
import FilterHeader from './filterHeader';

const styles = require('./style.less')

const GoodsList:React.FC<any> = props=>{

  const dispacth = useDispatch();

  React.useEffect(()=>{
    getGoods(null)
  },[])

  const {goods=false,loading} = props;

  const getGoods=(payload:any)=>{
    dispacth({
      type:'shop/fetchGoodsData',
      payload
    })
  }


  const filterData = {
    title:'全部分类',
    selections:[
      {
        name:'公仔',
        id:1,
        seled:false
      },
      {
        name:'生活',
        id:2,
        seled:false
      },
      {
        name:'时尚',
        id:3,
        seled:false
      }
    ],
    isFocus:false,
    titleHandlerClick:()=>{
      console.log(1)
      filterData.isFocus = !filterData.isFocus;
      setFiltero({...filterData});

      filterDataPx.isFocus = false;
      setFilter({...filterDataPx});
    },
    selHandlerClick:(goodsName:any,index:number)=>{
      filterData.selections[index].seled = !filterData.selections[index].seled;
      setFiltero({...filterData});
    },
  }

  const filterDataPx = {
    title:'默认排序',
    selections:[
      {
        name:'默认排序',
        id:4,
        seled:true
      },
      {
        name:'价格从低到高',
        id:5,
        seled:false
      },
      {
        name:'价格从高到低',
        id:6,
        seled:false
      }
    ],
    isFocus:false,
    titleHandlerClick:()=>{
      console.log(9);
      filterData.isFocus = false;
      setFiltero({...filterData});

      filterDataPx.isFocus = !filterDataPx.isFocus;
      setFilter({...filterDataPx});
    },
    selHandlerClick:(goodsName:any,index:number)=>{
      console.log(goodsName);
      filterDataPx.selections.forEach((item)=>{
        item.seled = false;
      })
      filterDataPx.selections[index].seled = !filterDataPx.selections[index].seled;
      filterDataPx.title =  filterDataPx.selections[index].name;
      setFilter({...filterDataPx});
      console.log(filter);
    },
  }

  const [filtero,setFiltero] = React.useState(filterData)
  const [filter,setFilter] = React.useState(filterDataPx)

  return(
    <div className={styles.goodsList}>
      <div className={styles.filterWrap}>
        <FilterHeader
          title={filtero.title}
          selections={filtero.selections}
          titleHandlerClick={filtero.titleHandlerClick}
          selHandlerClick={filtero.selHandlerClick}
          isFocus={filtero.isFocus}
        >
        </FilterHeader>

        <FilterHeader
          title={filter.title}
          selections={filter.selections}
          titleHandlerClick={filter.titleHandlerClick}
          selHandlerClick={filter.selHandlerClick}
          isFocus={filter.isFocus}
        >
        </FilterHeader>
      </div>


      <ul className={styles.goodsListBox}>
        {
          goods.length&&goods.map((item:any,index:any)=>(
          <GoodsListCard {...item} key={index}>{item.name}</GoodsListCard>
          ))
        }
      </ul>

    </div>
  )
}

export default connect(({loading,shop}:any)=>{
  return{
    loading:loading.effects['/shop/fetchGoodsData'],
    goods:shop.goods
  }
})(GoodsList);
