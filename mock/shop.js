import {mock,Random} from 'mockjs';

function fetchBanner(req,res){
  res.send({
    code:200,
    data:{
      logo:'WithAnt',
      shopDesc:'蚂蚁的店',
      imgList:[
        {
          imgPath:"https://img.zcool.cn/community/0181c05e15daa7a80121651858e95f.jpg@1280w_1l_2o_100sh.jpg",
          bgPath:null,
          id:1,
          proName:'New Year Happy',
          proTitle:'上新产品，蚂蚁小包',
          proDesc:'2020二月新产品',
        },
        {
          imgPath:"https://img.zcool.cn/community/010bf55e15da6ba80120a89503f224.jpg@1280w_1l_2o_100sh.jpg",
          bgPath:null,
          id:1,
          proName:'Perfect Day',
          proTitle:'财源广进',
          proDesc:'蚂蚁在手回家不愁',
        },
        {
          imgPath:"https://img.zcool.cn/community/011a9c5e15da91a80120a895bcfae5.jpg@1280w_1l_2o_100sh.jpg",
          bgPath:null,
          id:1,
          proName:'Food Great',
          proTitle:'上新产品，蚂蚁小包',
          proDesc:'2020二月新产品',
        },
      ]
    },
    message:'获取成功'
  })
}


export default{
  // 'GET /api/banner/fdf':fetchBanner,
}