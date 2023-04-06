import React from "react";
import "./Dangki2.css";
import img1 from "../../assets/Dangki2/log in-400h.png";
import img2 from "../../assets/Dangki2/rectangle2868i134-5ugn-200h.png";
import img3 from "../../assets/Dangki2/checked24outline2837-aysi.svg";
import img4 from "../../assets/Dangki2/message24outline2837-ucw6.svg";
import img5 from "../../assets/Dangki2/rectangle28652837-j5d4-200h.png";
import img6 from "../../assets/Dangki2/rectangle28662837-td1k-200h.png";
import img7 from "../../assets/Dangki2/googleplus112837-aypr.svg";
import img8 from "../../assets/Dangki2/line2837-hk9-200w.png";
import { Helmet } from "react-helmet";

export default function Dangki2() {
  return (
    <div className="home-container">
      <Helmet>
        <title>Candid Made Up Rail</title>
        <meta property="og:title" content="Candid Made Up Rail" />
      </Helmet>
      <div className="home-login">
        <div className="home-group7626">
          <div className="home-left">
            <img alt="not img" src={img1} className="home-image" />
            <img
              alt="Rectangle2868I134"
              src={img2}
              className="home-rectangle2868"
            />
            <span className="home-text">
              Chào mừng đến với đường lên đỉnh Olympia
            </span>
          </div>
          <div className="home-form">
            <div className="home-keepme">
              <span className="home-text01">
                Điều khoản dịch vụ &amp; chính sách bảo mật
              </span>
              <img
                alt="Checked24Outline2837"
                src={img3}
                className="home-checked24outline"
              />
            </div>
            <div className="home-passord">
              <span className="home-text02">Nhập lại mật khẩu</span>
              <input
                type="text"
                placeholder="********"
                className="home-textinput input"
              />
            </div>
            <div className="home-passord1">
              <span className="home-text03">
                <span>Mật khẩu</span>
              </span>
              <input
                type="text"
                placeholder="********"
                className="home-textinput1 input"
              />
            </div>
            <div className="home-tendangnhap">
              <span className="home-text05">
                <span>Email</span>
              </span>
              <img
                alt="message24Outline2837"
                src={img4}
                className="home-message24outline"
              />
              <input
                type="text"
                placeholder="nguyenvana@example.com"
                className="home-textinput2 input"
              />
            </div>
            <div className="home-option">
              <span className="home-text07">Hoặc đăng nhập với email</span>
              <img
                alt="Rectangle28652837"
                src={img5}
                className="home-rectangle2865"
              />
              <img
                alt="Rectangle28662837"
                src={img6}
                className="home-rectangle2866"
              />
            </div>
            <div className="home-google">
              <span className="home-text08">
                <span>Đăng kí với Google</span>
              </span>
              <div className="home-icon">
                <img
                  alt="googleplus112837"
                  src={img7}
                  className="home-googleplus11"
                />
              </div>
            </div>
            <button className="home-button button">Đăng kí</button>
            <div className="home-container1">
              <span className="home-text10">
                <span>
                  Bạn đã có tài khoản ?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="home-text12">Đăng nhập</span>
              </span>
              <div className="home-container2"></div>
            </div>
          </div>
          <img alt="Line2837" src={img8} className="home-line" />
        </div>
      </div>
    </div>
  );
}
