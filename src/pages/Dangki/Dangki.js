import React, { useState } from "react";
//import axios from "../../Axios";
import { registerUser } from "../../api.js";
import "./Dangki.css";
import img1 from "../../assets/Dangki/log in-400h.png";
import img2 from "../../assets/Dangki/rectangle2868i134-5ugn-200h.png";
import img3 from "../../assets/Dangki/checked24outline2837-aysi.svg";
import img4 from "../../assets/Dangki/eye112837-b1i.svg";
import img5 from "../../assets/Dangki/lockpadlocksafesecurityprotectedlockalt24outline2837-f93f.svg";
//import img6 from "../../assets/Dangki/message24outline2837-ucw6.svg";
import img7 from "../../assets/Dangki/rectangle28652837-j5d4-200h.png";
import img8 from "../../assets/Dangki/rectangle28662837-td1k-200h.png";
import img9 from "../../assets/Dangki/googleplus112837-aypr.svg";
import img10 from "../../assets/Dangki/line2837-hk9-200w.png";

import { Helmet } from "react-helmet";
function Dangki() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await registerUser(username, password, confirmPassword);
    console.log(response.data);
  };
  return (
    <div className="home-container1">
      <Helmet>
        <title>Candid Made Up Rail</title>
        <meta property="og:title" content="Candid Made Up Rail" />
      </Helmet>
      <div className="home-login1">
        <div className="home-group76261">
          <div className="home-left1">
            <img alt="not img" src={img1} className="home-image1" />
            <span className="home-text1">
              <span>Chào mừng đến với đường lên đỉnh Olympia</span>
            </span>
            <img
              alt="Rectangle2868I134"
              src={img2}
              className="home-rectangle28681"
            />
          </div>
          <div className="home-form1">
            <form onSubmit={handleSubmit}>
              <div className="home-keepme1">
                <span className="home-text021">
                  Điều khoản dịch vụ &amp; chính sách bảo mật
                </span>
                <img
                  alt="Checked24Outline2837"
                  src={img3}
                  className="home-checked24outline1"
                />
              </div>
              <div className="home-passord1">
                <div className="home-name1">
                  <img alt="eye112837" src={img4} className="home-eye111" />
                  <img
                    alt="lockpadlocksafesecurityprotectedlockalt24Outline2837"
                    src={img5}
                    className="home-lockpadlocksafesecurityprotectedlockalt24outline1"
                  />
                  <input
                    type="text"
                    placeholder="********"
                    className="home-textinput input1"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <span className="home-text031">Nhập lại mật khẩu</span>
              </div>
              <div className="home-passord11">
                <div className="home-name11">
                  <img alt="eye112837" src={img4} className="home-eye1111" />
                  <img
                    alt="lockpadlocksafesecurityprotectedlockalt24Outline2837"
                    src={img5}
                    className="home-lockpadlocksafesecurityprotectedlockalt24outline11"
                  />
                  <input
                    type="text"
                    placeholder="********"
                    className="home-textinput1 input1"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <span className="home-text041">
                  <span>Mật khẩu</span>
                </span>
              </div>
              <div className="home-tendangnhap1">
                <div className="home-group76081">
                  {/* <img
                  alt="message24Outline2837"
                  src={img6}
                  className="home-message24outline"
                /> */}
                  <input
                    type="text"
                    placeholder="********"
                    className="home-textinput21"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <span className="home-text061">
                  <span>Tên đăng nhập</span>
                </span>
              </div>
              <div className="home-option1">
                <span className="home-text081">
                  <span>Hoặc đăng nhập với email</span>
                </span>
                <img
                  alt="Rectangle28652837"
                  src={img7}
                  className="home-rectangle28651"
                />
                <img
                  alt="Rectangle28662837"
                  src={img8}
                  className="home-rectangle28661"
                />
              </div>
              <div className="home-google1">
                <span className="home-text101">
                  <span>Đăng kí với Google</span>
                </span>
                <div className="home-icon1">
                  <img
                    alt="googleplus112837"
                    src={img9}
                    className="home-googleplus111"
                  />
                </div>
              </div>
              <button className="home-button button1">Đăng kí</button>
              <div className="home-container11">
                <span className="home-text121">
                  <span>
                    Bạn đã có tài khoản ?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                  <span className="home-text141">Đăng nhập</span>
                </span>
                <div className="home-container21"></div>
              </div>
            </form>
          </div>
          <img alt="Line2837" src={img10} className="home-line1" />
        </div>
      </div>
    </div>
  );
}
export default Dangki;
