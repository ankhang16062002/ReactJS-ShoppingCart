import React from 'react'

import Grid from './Grid'
import {Link} from 'react-router-dom'
import logo from '../assets/images/Logo-2.png'

const Footer = () => {
    return (
        <div className = 'footer'>
            <div className="container">
                <Grid
                    col = '4'
                    md = '2'
                    sm = '1'
                    gap = '20'
                >
                    <div className="footer__support">
                        <div className="footer__title">
                            <h3>tổng đài hỗ trợ</h3>
                        </div>
                        <div className="footer__text">
                            <span>Liên hệ đặt hàng<strong>0868718744</strong></span>
                            <span>Thắc mắc đơn hàng<strong>0868718744</strong></span>
                            <span>Góp ý, khiếu nại<strong>0868718744</strong></span>
                        </div>
                    </div>

                    <div className="footer__about">
                        <div className="footer__title">
                            <h3>về yolo</h3>
                        </div>
                        <div className="footer__text">
                            <span><Link to = '/about'>Giới thiệu</Link></span>
                            <span><Link to = '/about'>Liên hệ</Link></span>
                            <span><Link to = '/about'>Tuyển dụng</Link></span>
                            <span><Link to = '/about'>Tin tức</Link></span>
                            <span><Link to = '/about'>Hệ thống cửa hàng</Link></span>
                        </div>
                    </div>

                    <div className="footer__customer">
                        <div className="footer__title">
                            <h3>chăm sóc khách hàng</h3>
                        </div>
                        <div className="footer__text">
                            <span><Link to = '/about'>Chính sách đổi trả</Link></span>
                            <span><Link to = '/about'>Chính sách bảo hành</Link></span>
                            <span><Link to = '/about'>Chính sách hoàn tiền</Link></span>
                        </div>
                    </div>

                    <div className="footer__intro">
                        <div className="footer__intro__logo">
                            <img src= {logo} alt="logo" />
                        </div>
                        <p className = 'footer__intro__decription'>
                            Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi 
                            ngày cho hàng triệu người tiêu dùng Việt.  
                            Hãy cùng Yolo hướng đến một cuộc sống năng  
                            động, tích cực hơn.
                        </p>
                    </div>

                </Grid>
            </div>
        </div>
    )
}

export default Footer
