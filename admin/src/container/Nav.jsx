import "../css/Style.css";
import "../css/Nav.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Nav(params) {
  return (
    <nav class="nav">
      <Container>
        <Row>
          <Col sm={8}>
            <div class="navMenu">
              <ul>
                <li class="active">
                  <a href="">Trang chủ</a>
                </li>
                <li>
                  <a href="">Giới thiệu</a>
                </li>
                <li>
                  <a href="">Thép xây dựng</a>
                </li>
                <li>
                  <a href="">Báo giá thép</a>
                </li>
                <li>
                  <a href="">Vật liệu xây dựng</a>
                </li>
                <li>
                  <a href="">Liên hệ</a>
                </li>
              </ul>
            </div>
          </Col>

          <Col sm={4}>
            <div class="mt-1">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-secondary">Search</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default Nav;
