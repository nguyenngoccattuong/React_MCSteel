import "../css/Style.css";
import "../css/Main.css";
import img from "../imgs/slider.png";
import imgAside from "../imgs/img1_asideBestSellerListProducts.png";
import imgProduct from "../imgs/img3_productHomeListProducts.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Main(params) {
  return (
    <Container>
      <Row>
        <Col sm={3}>
          <aside>
            <div class="aside__category">
              <div class="asideCategory__title">
                <div class="row">
                  <div class="asideCategoryTitle__icon">
                    <i class="fa-solid fa-bars"></i>
                  </div>
                  <div class="asideCategoryTitle__heading">
                    <h3>Danh mục sản phẩm</h3>
                  </div>
                </div>
              </div>
              <div class="asideCategory__list">
                <ul>
                  <li>
                    <a href="">Thép xây Việt - Nhật</a>
                  </li>
                  <li>
                    <a href="">Thép vằn</a>
                  </li>
                  <li>
                    <a href="">Lưới thép</a>
                  </li>
                  <li>
                    <a href="">Sản phẩm khác</a>
                  </li>
                  <li>
                    <a href="">Thép hộp</a>
                  </li>
                  <li>
                    <a href="">Thép vuông</a>
                  </li>
                  <li>
                    <a href="">Thép hình</a>
                  </li>
                  <li>
                    <a href="">Thép ống</a>
                  </li>
                  <li>
                    <a href="">Thép cuộn</a>
                  </li>
                  <li>
                    <a href="">Thép xây dựng</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="aside__bestSeller">
              <div class="asideBestSeller__title">
                <div class="row">
                  <div class="asideBestSellerTitle__icon">
                    <i class="fa-solid fa-bars"></i>
                  </div>
                  <div class="asideBestSellerTitle__heading">
                    <h3>Sản phẩm bán chạy</h3>
                  </div>
                </div>
              </div>
              <div class="asideBestSeller__list">
                <Aside image={imgAside} title="Thép cuộn trơn"></Aside>
                <Aside image={imgAside} title="Thép vằn miền nam"></Aside>
                <Aside image={imgAside} title="Thép tấm việt - nhật"></Aside>
                <Aside image={imgAside} title="Thép tấm gân miền nam"></Aside>
              </div>
            </div>
          </aside>
        </Col>
        <Col sm={9}>
          <div class="slider">
            <img src={img} alt=""></img>
          </div>
          <div class="content">
            <h1>Công ty TNHH TM - DV MẠNH CƯỜNG</h1>
            <p>
              Công ty chúng tôi xin gửi lời chào và lời cảm ơn chân thành tới
              Quý khách hàng đã và đang sử dụng sản phẩm{" "}
              <a href="">Sắt Thép Xây Dựng</a> các loại do công ty phân phối và
              bán lẻ trong thời gian qua.
            </p>
            <p>
              Với lĩnh vực kinh doanh <a href="">Sắt Thép Xây Dựng</a>, và cung
              cấp với mức giá tốt nhất cho người xây dựng cũng như các công
              trình xây dựng.
            </p>
            <p>
              <span>Công ty chúng tôi cũng đã cung ứng </span> sắt thép xây dựng
              cao cấp{" "}
              <span>
                cho các công trình nhà ở, các nhà thầu xây dựng với giá{" "}
              </span>{" "}
              tốt hàng đâu thị trường sắt thép hiện nay.
            </p>
          </div>
          <div class="productHome__title">
            <Row>
              <Col sm={10}>
                <div class="productHomeTitle__heading">
                  <h2>Sắt thép xây dựng</h2>
                </div>
              </Col>
              <Col sm={2}>
                <div class="productHomeTitle_link">
                  <a href="">Xem tất cả.</a>
                </div>
              </Col>
            </Row>
          </div>
          <div class="productHome__list">
            <Product
              image={imgProduct}
              title="Thép cuộn tròn Việt - Nhật"
            ></Product>
            <Product
              image={imgProduct}
              title="Thép cuộn tròn Việt - Nhật"
            ></Product>
            <Product
              image={imgProduct}
              title="Thép cuộn tròn Việt - Nhật"
            ></Product>
            <Product
              image={imgProduct}
              title="Thép cuộn tròn Việt - Nhật"
            ></Product>
            <Product
              image={imgProduct}
              title="Thép cuộn tròn Việt - Nhật"
            ></Product>
            <Product
              image={imgProduct}
              title="Thép cuộn tròn Việt - Nhật"
            ></Product>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function Aside(props) {
  return (
    <div class="asideBestSellerList__products">
      <div class="asideBestSellerListProducts__img">
        <img src={props.image} alt="" />
      </div>
      <h4>{props.title}</h4>
    </div>
  );
}

function Product(props) {
  return (
    <div class="product">
      <div class="product__img">
        <img src={props.image} alt="" />
      </div>
      <h3>{props.title}</h3>
    </div>
  );
}

export default Main;
