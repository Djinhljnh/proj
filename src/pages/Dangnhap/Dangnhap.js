import React, { useEffect, useState } from "react";
//import { getUsers, createUser, loginUser } from "./api";
//import axios from "../../api";
import "./Dangnhap.css";
import img1 from "../../assets/DangNhap/log in-500w.png";
import img2 from "../../assets/DangNhap/rectangle2868i134-5ugn-200h.png";
import img3 from "../../assets/DangNhap/checked24outline2837-aysi.svg";
import img4 from "../../assets/DangNhap/eye112837-b1i.svg";
import img5 from "../../assets/DangNhap/lockpadlocksafesecurityprotectedlockalt24outline2837-f93f.svg";
//import img6 from "../../assets/DangNhap/message24outline2837-ucw6.svg";
import img7 from "../../assets/DangNhap/rectangle28652837-j5d4-200h.png";
import img8 from "../../assets/DangNhap/rectangle28662837-td1k-200h.png";
import img9 from "../../assets/DangNhap/googleplus112837-aypr.svg";
import img10 from "../../assets/DangNhap/line2837-hk9-200w.png";
import img11 from "../../assets/DangNhap/bg2837-197n-2000w.png";
import { Helmet } from "react-helmet";
import productApi from "../../ApiUser";
import { useNavigate } from "react-router-dom";
//import axios from "axios";

function Dangnhap() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState([]);
  /*const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/login", { username, password })
      .then((res) => {
        console.log(res.data); // In thông tin người dùng đã đăng nhập vào console
        navigate("/"); // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
      })
      .catch((err) => {
        console.log(err.response.data.message); // In thông báo lỗi vào console
      });
  };*/
  useEffect(() => {
    const fetchApi = async () => {
      const result = await productApi("users");
      setDataUser(result);
      // cai duoi nay dung de xem coi co api chua
      console.log(result);
    };
    fetchApi();
  }, []);

  useEffect(() => {}, []);
  const handleLogin = () => {
    const e = dataUser.filter(
      (data) => data.username === username && data.password === password
    );
    if (e.length > 0) {
      navigate("/");
    } else {
      alert("Vui lòng nhập đúng thông tin");
    }
  };
  return (
    <div className="home-container">
      <Helmet>
        <title>Candid Made Up Rail</title>
        <meta property="og:title" content="Candid Made Up Rail" />
      </Helmet>
      <div className="home-login">
        <img alt="BG2837" src={img11} className="home-b-g" />
        <div className="home-group7626">
          <div className="home-left">
            <img src={img1} alt="not img" className="home-image" />
            <span className="home-text">
              <span>Chào mừng đến với đường lên đỉnh Olympia</span>
            </span>
            <img
              alt="Rectangle2868I134"
              src={img2}
              className="home-rectangle2868"
            />
          </div>
          <form onSubmit={handleLogin}>
            <div className="home-form">
              <span className="home-text02">
                <span>Quên mật khẩu?</span>
              </span>
              <div className="home-keepme">
                <span className="home-text04">
                  <span>Giữ luôn đăng nhập</span>
                </span>
                <img
                  alt="Checked24Outline2837"
                  src={img3}
                  className="home-checked24outline"
                />
              </div>
              <div className="home-passord">
                <div className="home-name">
                  <img alt="eye112837" src={img4} className="home-eye11" />
                  <img
                    alt="lockpadlocksafesecurityprotectedlockalt24Outline2837"
                    src={img5}
                    className="home-lockpadlocksafesecurityprotectedlockalt24outline"
                  />
                  <input
                    type="text"
                    placeholder="********"
                    className="home-textinput input"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <span className="home-text06">
                  <span>Mật khẩu</span>
                </span>
              </div>
              <div className="home-tendangnhap">
                <div className="home-group7608">
                  {/* <img
                  alt="message24Outline2837"
                  src={img6}
                  className="home-message24outline"
                /> */}
                  <input
                    type="text"
                    placeholder="********"
                    className="home-textinput1 input"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>
                <span className="home-text08">
                  <span>Tên đăng nhập</span>
                </span>
              </div>
              <div className="home-option">
                <span className="home-text10">
                  <span>Hoặc đăng nhập với email</span>
                </span>
                <img
                  alt="Rectangle28652837"
                  src={img7}
                  className="home-rectangle2865"
                />
                <img
                  alt="Rectangle28662837"
                  src={img8}
                  className="home-rectangle2866"
                />
              </div>
              <div className="home-google">
                <span className="home-text12">
                  <span>Đăng kí với Google</span>
                </span>
                <div className="home-icon">
                  <img
                    alt="googleplus112837"
                    src={img9}
                    className="home-googleplus11"
                  />
                </div>
              </div>
              <button className="home-button button">Đăng nhập</button>
            </div>
          </form>
          <img alt="Line2837" src={img10} className="home-line" />
        </div>
      </div>
    </div>
  );
}
export default Dangnhap;
