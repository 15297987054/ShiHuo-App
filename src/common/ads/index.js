import React from "react";
import "./index.css";
export default class Ads extends React.Component {
    render() {
        return (
            <div className="headCarousel">
                <div className="img">
                    <img src="http://shihuo.hupucdn.com/def/20190705/b98295c91284a0821efb1da1ddfce8f51562308807.jpg" />
                </div>
                {/*<div className="download-solgen-info">
                    <p>识货APP&nbsp;⋅&nbsp;全世界的运动好货</p>
                    <p className="spaceP">获取运动装备最低价</p>
                </div>  顶部广告稿轮播图不同的那一张结构 */}

                <a className="App-down-link" href="http://www.shihuo.cn/api/transit?source=http://m.shihuo.cn/&target=http://dwz.cn/HV7q1nIT">
                    <span className="App-down-btn">打开</span>
                    <div className="product-info">
                        <p>Nike Air Force 1</p>
                        <p className="priceDetail">¥589
                        <span className="span-discount">6.6折</span>
                            <span className="span-oldprice">¥899</span>
                        </p>
                    </div>
                </a>
                <div className="close"><img src="//m.shihuo.cn/images/trademobile/appdownload_close.png" alt="" /></div>
            </div>
        )
    }
}