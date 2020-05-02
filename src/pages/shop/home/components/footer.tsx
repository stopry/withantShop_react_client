import React from 'react';
import router from 'umi/router'
const styles = require('./footer.less');

const Footer:React.FC<any> = props=>{
    return(
        <footer className={styles.footer}>
            <div className={styles.moreBtn} onClick={()=>{router.push('/shop/home/goodsList')}}>查看全部271件商品></div>
            <div className={styles.brand}>
                <h2>品牌故事</h2>
                <p>BRAND STORY</p>
                <div className={styles.bannerDetail}>
                    WithAnt 成立于1992年；是一家百年老字号，传承多种记忆。<a href="javascript:void(0)">查看更多></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;