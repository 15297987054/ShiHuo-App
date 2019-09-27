import React from "react";
import Ads from "../../common/ads";
import { NavLink } from "react-router-dom";
import "./index.css"
export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            arr: ["推荐", "篮球", "健身", "跑步", "潮流"],
            arrListSubMune: ["全部", "单品推荐", "原创精选", "用户晒物"],
            index1: "",
            index2: "",
        }
    }
    render() {
        let { arr, index1, arrListSubMune, index2 } = this.state;
        return (
            <div>
                <Ads />
                <div className="bannerimg">
                    <img alt="" src="http://shihuo.hupucdn.com/appHome/201901/0909/246bc13aad8b60058a81d242512e983f.png?imageView2/2/w/750/h/380/interlace/1" />

                    <div className="searchBox">
                        <div className="search">
                            <input type="text" placeholder="搜索商品、品牌" />
                        </div>
                        <NavLink to={"/beforeLogin"}>
                            <i className="iconfont" id="icon">{"\ue60b"}</i>
                        </NavLink>
                    </div>
                </div>
                <div className="pic-banner">
                    <ul>
                        <li className="pic-banner-li">
                            <span>
                                <div className="tit">
                                    <h2>跑步</h2>
                                    <p>女王节快乐</p>
                                </div>
                                <div className="pic">
                                    <img alt="" src="http://shihuo.hupucdn.com/def/20180801/a580ec1affbbf4a344974bc92969c7671533133549.jpg?imageView2/0/w/160/h/160/interlace/1" />
                                </div>
                            </span>
                        </li>
                        <li className="pic-banner-li">
                            <span>
                                <div className="tit">
                                    <h2>健身</h2>
                                    <p>布瑞特装备秒杀</p>
                                </div>
                                <div className="pic">
                                    <img alt="" src="http://shihuo.hupucdn.com/def/20170915/0446a5d97bf800d5322341aab554035d1505460763.jpg?imageView2/0/w/160/h/160/interlace/1" />
                                </div>
                            </span>
                        </li>
                        <li className="pic-banner-li">
                            <span>
                                <div className="tit">
                                    <h2>足球</h2>
                                    <p>其实是在吹总裁</p>
                                </div>
                                <div className="pic">
                                    <img alt="" src="http://shihuo.hupucdn.com/trade/reposition/2017-09-13/6f2b59787e5a18c4dca091ce9ecb4fae.png?imageView2/0/w/160/h/160/interlace/1" />
                                </div>
                            </span>
                        </li>
                        <li className="pic-banner-li">
                            <span>
                                <div className="tit">
                                    <h2>潮流</h2>
                                    <p>78元短袖秒杀</p>
                                </div>
                                <div className="pic">
                                    <img alt="" src="http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzI1NTA1OTI4MDYvVEIybmJKRHJoeG1wdUZqU1pGTlhYWHJSWFhhXyEhMjU1MDU5MjgwNi5qcGc?imageView2/0/w/160/h/160/interlace/1" />
                                </div>
                            </span>
                        </li>
                        <li className="pic-banner-li">
                            <span>
                                <div className="tit">
                                    <h2>数码</h2>
                                    <p>连接下一个未来</p>
                                </div>
                                <div className="pic">
                                    <img alt="" src="http://shihuo.hupucdn.com/appZone/201710/1317/749c6c723b3029420783d6358d19799c.jpg?imageView2/0/w/160/h/160/interlace/1" />
                                </div>
                            </span>
                        </li>
                        <li className="pic-banner-li">
                            <span>
                                <div className="tit">
                                    <h2>篮球</h2>
                                    <p>纯白系列秒杀</p>
                                </div>
                                <div className="pic">
                                    <img alt="" src="http://shihuo.hupucdn.com/def/20180801/a580ec1affbbf4a344974bc92969c7671533133549.jpg?imageView2/0/w/160/h/160/interlace/1" />
                                </div>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="discount">
                    <ul>
                        <li className="discount-li">
                            <h2>今日优惠</h2>
                            <p className="discount-li-p">EQT 5折好价</p>
                            <p className="imgs">
                                <img alt="" src="http://shihuo.hupucdn.com/appHome/201807/1811/1d039f64648d5e33025c747ec6420060.jpg?imageView2/2/w/120/h/120/interlace/1" />
                            </p>
                        </li>
                        <li className="discount-li">
                            <h2>限时团购</h2>
                            <p className="discount-li-p">春节不打烊</p>
                            <p className="imgs">
                                <img alt="" src="http://shihuo.hupucdn.com/appHome/201802/0716/5d0eea37252cd190ba0975b3e5e1f49e.png?imageView2/2/w/120/h/120/interlace/1" />
                            </p>
                        </li>
                        <li className="discount-li">
                            <h2>免费抽奖</h2>
                            <p className="discount-li-p">识货抽奖 天天免费</p>
                            <p className="imgs">
                                <img alt="" src="http://shihuo.hupucdn.com/kupload2018/2019715/15631798110000.jpeg?imageView2/2/w/120/h/120/interlace/1" />
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="hot-activity">
                    <h2>热门活动</h2>
                    <ul>
                        <li className="hot-activity-li">
                            <span>
                                <div>
                                    <img alt="" src="http://shihuo.hupucdn.com/appHome/201808/1710/5e683699826e2a13abd239e4e4e36793.jpg" />
                                </div>
                                <p className="p1">skullcandy骷髅头耳机</p>
                                <p className="p2">券后低至89元起</p>
                            </span>
                        </li>
                        <li className="hot-activity-li">
                            <span>
                                <div>
                                    <img alt="" src="http://shihuo.hupucdn.com/appZone/201807/2411/b9541b36f94bfa8c6c51482e7536eb35.jpg" />
                                </div>
                                <p className="p1">实战性价比之选</p>
                                <p className="p2">球星在线</p>
                            </span>
                        </li>
                        <li className="hot-activity-li">
                            <span>
                                <div>
                                    <img alt="" src="http://shihuo.hupucdn.com/appZone/201811/1214/7d721a0762b1a4762557aa33c75e6404.jpg" />
                                </div>
                                <p className="p1">花鸟市场行</p>
                                <p className="p2">今天穿这样</p>
                            </span>
                        </li>
                        <li className="hot-activity-li">
                            <span>
                                <div>
                                    <img alt="" src="http://shihuo.hupucdn.com/appZone/201811/1019/7e5b5b66171686cf805178be1c793bf0.jpg" />
                                </div>
                                <p className="p1">虎扑优选精选篮球袜</p>
                                <p className="p2">低至6.9元</p>
                            </span>
                        </li>
                        <li className="hot-activity-li">
                            <span>
                                <div>
                                    <img alt="" src="http://shihuo.hupucdn.com/appZone/201811/2311/e5e9c867a2016694abe40d752c81080a.jpg" />
                                </div>
                                <p className="p1">应季机能风</p>
                                <p className="p2">酷战雨雪</p>
                            </span>
                        </li>
                        <li className="hot-activity-li">
                            <span>
                                <div>
                                    <img alt="" src="http://shihuo.hupucdn.com/appZone/201805/1414/c5f797407c24e87cb7648abc937e9955.jpg" />
                                </div>
                                <p className="p1">热门资讯</p>
                                <p className="p2">最新最热门的数码资讯</p>
                            </span>
                        </li>
                    </ul>
                </div>
                <div id="listview">
                    <div className="list-view-top">
                        <div className="list-menu">
                            <ul className="nav">
                                {
                                    arr.map((item, index) => (
                                        <li key={index} style={{ borderBottom: index1 == index ? "3px solid #ff4338" : "" }} onClick={this.handleLiClick.bind(this, index)} className={index1 == index ? "active" : ""}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="list-submenu">
                        <ul>
                            {
                                arrListSubMune.map((item, index) => (
                                    <li key={index} className={index2 == index ? "active2" : ""} onClick={this.handleLiClick2.bind(this, index)}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="list-view">
                    <ul>
                        <li>
                            <span className="Haden">
                                <div className="Haden-img">
                                    <img alt="" src="http://shihuo.hupucdn.com/article/2019-09-20/753dcac8f6be1031d499665cca68719d.jpg?imageView2/0/w/600/h/600/interlace/1" />
                                </div>
                                <div className="Haden-right">
                                    <h2>新赛季来临，签名鞋集体爆发，你最期待哪一双？</h2>
                                    <div className="face">
                                        <img alt="" src="http://i1.hoopchina.com.cn/user/068/25909068/25909068_big_2.jpg" />
                                        <span>Leunghongjian</span>
                                    </div>
                                    <div className="face">
                                        <span className="face-span">最新鞋报</span>
                                    </div>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span className="Haden">
                                <div className="Haden-img">
                                    <img alt="" src="http://shihuo.hupucdn.com/def/20181214/03af1d37e9faa25f7218680b0d16ef131544758109.jpg?imageView2/0/w/600/h/600/interlace/1" />
                                </div>
                                <div className="Haden-right">
                                    <h2>Air Jordan 11</h2>
                                    <div className="detail">
                                        <img alt="" src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" />
                                        <span>鞋面在光线下呈现一丝墨绿</span>
                                        <img alt="" src="http://sh1.hoopchina.com.cn/images/trademobile/quote_right.png" />
                                    </div>
                                    <div className="detail">
                                        <span className="detail-span">天猫</span>
                                        <span className="detail-span1">￥1899</span>
                                    </div>
                                </div>
                            </span>
                        </li>
                        <li>
                            <div className="bottom-list">
                                <p>今日优惠</p>
                                <div className="imgbox">
                                    <span><img alt="" src="http://shihuo.hupucdn.com/newsIndex11/201909/2212/2d1950ee1be7525733661e44d880a767.jpg?imageView2/0/w/600/h/600/interlace/1" /></span>
                                    <span><img alt="" src="http://shihuo.hupucdn.com/newsIndex11/201909/2213/8e1230ca01303ee2c3dc7bae0db9aa79.jpg?imageView2/0/w/600/h/600/interlace/1" /></span>
                                    <span><img alt="" src="http://shihuo.hupucdn.com/newsIndex11/201909/2216/ec722a6eb9cd0fe6369cff592941cfb8.jpg?imageView2/0/w/600/h/600/interlace/1" /></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span className="Haden">
                                <div className="Haden-img">
                                    <img alt="" src="http://shihuo.hupucdn.com/def/20181214/03af1d37e9faa25f7218680b0d16ef131544758109.jpg?imageView2/0/w/600/h/600/interlace/1" />
                                </div>
                                <div className="Haden-right">
                                    <h2>Air Jordan 11</h2>
                                    <div className="detail">
                                        <img alt="" src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" />
                                        <span>鞋面在光线下呈现一丝墨绿</span>
                                        <img alt="" src="http://sh1.hoopchina.com.cn/images/trademobile/quote_right.png" />
                                    </div>
                                    <div className="detail">
                                        <span className="detail-span">天猫</span>
                                        <span className="detail-span1">￥1899</span>
                                    </div>
                                </div>
                            </span>
                        </li>
                        <li>
                            <span className="Haden">
                                <div className="Haden-img">
                                    <img alt="" src="http://shihuo.hupucdn.com/def/20181214/03af1d37e9faa25f7218680b0d16ef131544758109.jpg?imageView2/0/w/600/h/600/interlace/1" />
                                </div>
                                <div className="Haden-right">
                                    <h2>Air Jordan 11</h2>
                                    <div className="detail">
                                        <img alt="" src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" />
                                        <span>鞋面在光线下呈现一丝墨绿</span>
                                        <img alt="" src="http://sh1.hoopchina.com.cn/images/trademobile/quote_right.png" />
                                    </div>
                                    <div className="detail">
                                        <span className="detail-span">天猫</span>
                                        <span className="detail-span1">￥1899</span>
                                    </div>
                                </div>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
    handleLiClick(index) {
        this.setState({
            index1: index,
        })
    }
    handleLiClick2(index) {
        this.setState({
            index2: index,
        })
    }
}