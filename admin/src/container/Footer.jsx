import React from "react";
import "../css/Style.css";
import "../css/Footer.css";
import imgFanpage from "../imgs/img_footerTopFanpage.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div class="footer">
      <div class="footer__top">
        <Container>
          <Row>
            <Col lg={4}>
              <div class="footerTop__aboutUs">
                <h3>Mạnh Cường Steel</h3>
                <p>
                  Chúng tôi, nhà phân phối sắt thép xây dựng Mạnh Cường hôm nay
                  xin gửi tới khách hàng, quý các công một số thông tin về sản
                  phẩm sắt thép mà chúng tôi đã cung cấp.
                </p>
                <div class="footerTopAboutUs__info">
                  <ul>
                    <li>
                      <span>
                        <i class="fa-solid fa-location-dot"></i>
                      </span>
                      <span>
                        Địa chỉ : 77 Đường số 1 ,KDC Bình Hưng, Xã Bình Hưng,
                        Bình Chánh.
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-mobile-screen"></i>
                      </span>
                      <span>Số điện thoại : 0934509710 (Hòa)</span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-envelope"></i>
                      </span>
                      <span>Gmail : satthepmanhcuongphat@gmail.com</span>
                    </li>
                  </ul>
                </div>
                <div class="footerTopAboutUs__img">
                  <img src="img/img_footerTopAboutUs.png" alt="" />
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div class="footerTop__siteMaps">
                <h4>SITE MAPS</h4>
                <div class="footerTopSiteMaps__list">
                  <ul>
                    <li>TRANG CHỦ</li>
                    <li>GIỚI THIỆU</li>
                    <li>THÉP XÂY DỰNG</li>
                    <li>BÁO GIÁ THÉP</li>
                    <li>VẬT LIÊU XÂY DỰNG</li>
                    <li>LIÊN HỆ</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div class="footerTop__product">
                <h4>SẢN PHẨM</h4>
                <div class="footerTopProduct__list">
                  <ul>
                    <li>SẮT THÉP XÂY DỰNG MIỀN NAM</li>
                    <li>SẮT THÉP XÂY DỰNG VIỆT NHẬT</li>
                    <li>SẮT THÉP XÂY DỰNG POMINA</li>
                    <li>SẮT THÉP XÂY DỰNG VIỆT ÚC</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div class="footerTop__fanpage">
                <h4>FANPAGE</h4>
                <div class="footerTopFanpage__img">
                  <img src={imgFanpage} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div class="footer__bottom">
        <Container>
          <Row>
            <Col>
              <div class="footerBottom__left">
                Copyright © 2016 Mạnh Cường Co., LTD . ALL RIGHT RESERVED
              </div>
            </Col>
            <Col>
              <div class="footerBottom__right">
                Design by Thiet Ke Web Uy Tin
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
