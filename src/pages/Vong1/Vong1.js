import React from "react";
import "./Vongmot.css";
import img1 from "../../assets/Vong1/rectangle28761642-f0fs-700w.png";
import img2 from "../../assets/Vong1/rectangle28771642-mp9f-200h.png";
import img3 from "../../assets/Vong1/mdirun1643-dg.svg";
import img4 from "../../assets/Vong1/image1462-rsoj-200w.png";
import img5 from "../../assets/Vong1/image1462-bggv-200w.png";
import img6 from "../../assets/Vong1/image1462-h99i-200w.png";
import img7 from "../../assets/Vong1/image1462-rzo-200w.png";
import img8 from "../../assets/Vong1/rectangle2867i144-qmf-200h.png";
import img9 from "../../assets/Vong1/downarrow24outlinei144-ly9r.svg";
import img10 from "../../assets/Vong1/downarrow24outlinei144-h4qp.svg";
import img11 from "../../assets/Vong1/profile24outlinei144-ka9.svg";
import { Helmet } from "react-helmet";

export default function Vong1() {
  return (
    <div className="home-container">
      <Helmet>
        <title>Loyal Quintessential Whale</title>
        <meta property="og:title" content="Loyal Quintessential Whale" />
      </Helmet>
      <div className="home-v-o-n-g1">
        <div className="home-group7609">
          <div className="home-container1">
            <div className="home-group76091" />
            <div className="home-cautraloito">
              <div className="home-cautraloi">
                <button className="home-button button">A. ABC</button>
                <button className="home-button1 button">A. ABC</button>
                <button className="home-button2 button">A. ABC</button>
                <button className="home-button3 button">A. ABC</button>
              </div>
              <span className="home-text">
                <span>Câu trả lời</span>
              </span>
              <button type="submit" className="home-button4 button">
                Button
              </button>
            </div>
            <div className="home-cauhoi">
              <img
                alt="Rectangle28761642"
                src={img1}
                className="home-rectangle2876"
              />
              <img
                alt="Rectangle28771642"
                src={img2}
                className="home-rectangle2877"
              />
            </div>
            <div className="home-group7614">
              <span className="home-text02">
                <span>LƯỢT X</span>
              </span>
              <img alt="mdirun1643" src={img3} className="home-mdirun" />
            </div>
          </div>
          <div className="home-player">
            <div className="home-frame4">
              <span className="home-text04">
                <span>name</span>
              </span>
              <span className="home-text06">
                <span>123</span>
              </span>
              <img alt="Image1462" src={img4} className="home-image" />
            </div>
            <div className="home-frame3">
              <span className="home-text08">
                <span>name</span>
              </span>
              <span className="home-text10">
                <span>123</span>
              </span>
              <img alt="Image1462" src={img5} className="home-image1" />
            </div>
            <div className="home-frame2">
              <span className="home-text12">
                <span>name</span>
              </span>
              <span className="home-text14">
                <span>123</span>
              </span>
              <img alt="Image1462" src={img6} className="home-image2" />
            </div>
            <div className="home-frame1">
              <span className="home-text16">
                <span>name</span>
              </span>
              <span className="home-text18">
                <span>123</span>
              </span>
              <img alt="Image1462" src={img7} className="home-image3" />
            </div>
          </div>
        </div>
        <div className="home-header">
          <div className="home-uppernev">
            <img
              alt="Rectangle2867I144"
              src={img8}
              className="home-rectangle2867"
            />
            <div className="home-menu">
              <div className="home-courses">
                <span className="home-text20">
                  <span>Giới thiệu</span>
                </span>
              </div>
              <div className="home-for-college">
                <span className="home-text22">
                  <span>Hướng dẫn</span>
                </span>
              </div>
              <div className="home-for-high-school">
                <span className="home-text24">
                  <span>Bảng xếp hạng</span>
                </span>
                <img
                  alt="downarrow24OutlineI144"
                  src={img9}
                  className="home-downarrow24outline"
                />
              </div>
              <div className="home-for-kindergarten">
                <span className="home-text26">
                  <span>Vào thi</span>
                </span>
                <img
                  alt="downarrow24OutlineI144"
                  src={img10}
                  className="home-downarrow24outline1"
                />
              </div>
              <div className="home-for-kindergarten1">
                <span className="home-text28">
                  <span>Trang chủ</span>
                </span>
              </div>
            </div>
            <div className="home-account">
              <img
                alt="profile24OutlineI144"
                src={img11}
                className="home-profile24outline"
              />
              <span className="home-text30">
                <span>My Account</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
