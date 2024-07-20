import "../css/Style.css";
import "../css/Header.css";
import Container from "react-bootstrap/Container";
function Header(params) {
  return (
    <div class="header">
      <div class="headerTop">
        <Container>Welcome to our Mạnh Cường CO,.LTD</Container>
        {/* <div class="container">Welcome to our Mạnh Cường CO,.LTD</div> */}
      </div>
      <div class="headerBottom">
        <Container>
          <h2>Mạnh Cường Steel</h2>
          <div class="headerBottomInfo">
            <ul>
              <li>
                Địa chỉ : 77 Đường số 1,KDC Bình Hưng, Xã Bình Hưng, Bình Chánh.
              </li>
              <li>Số điện thoại: 0934509710 (Hòa )</li>
              <li>Gmail: satthepmanhcuongphat@gmail.com</li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Header;
