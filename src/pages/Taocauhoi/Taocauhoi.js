import React from "react";
import "./Taocauhoi.css";
import img1 from "../../assets/Taocauhoi/bg2557-n123-200h.png";
import img2 from "../../assets/Taocauhoi/bg2557-1qz-1200w.png";
import img3 from "../../assets/Taocauhoi/ellipse3462557-slme-300h.png";
import img4 from "../../assets/Taocauhoi/ellipse3472557-y09-300h.png";
import img5 from "../../assets/Taocauhoi/bg2559-r6km-200w.png";
import img6 from "../../assets/Taocauhoi/rectangle2867i255-3cff-200h.png";
import img7 from "../../assets/Taocauhoi/downarrow24outlinei255-e7mi.svg";
import img8 from "../../assets/Taocauhoi/downarrow24outlinei255-o3gk.svg";
import img9 from "../../assets/Taocauhoi/profile24outlinei255-wp6p.svg";
import img10 from "../../assets/Taocauhoi/rectangle28962559-snk0s-200h.png";
import img11 from "../../assets/Taocauhoi/vector2559-t6x.svg";
import img12 from "../../assets/Taocauhoi/vectori255-ilkg9.svg";
import img13 from "../../assets/Taocauhoi/linkediniconi255-kj7u.svg";
import img14 from "../../assets/Taocauhoi/vectori255-ku0k.svg";
import img15 from "../../assets/Taocauhoi/bgi255-axs-200h.png";
import img16 from "../../assets/Taocauhoi/instagramiconi255-ubg.svg";
import img17 from "../../assets/Taocauhoi/vectori255-tk1n.svg";
import img18 from "../../assets/Taocauhoi/vectori255-326.svg";
import img19 from "../../assets/Taocauhoi/vectori255-9cx.svg";
import img20 from "../../assets/Taocauhoi/vectori255-a87f.svg";
import { Helmet } from "react-helmet";

export default function Taocauhoi() {
  return (
    <div className="home-container">
      <Helmet>
        <title>Irresponsible Decimal Chough</title>
        <meta property="og:title" content="Irresponsible Decimal Chough" />
      </Helmet>
      <div className="home-suadebai">
        <div className="home-header">
          <div className="home-imge">
            <div className="home-name">
              <span className="home-text">
                <span>Founder &amp; Mentor</span>
              </span>
              <span className="home-text02">
                <span>Kritsin Watson</span>
              </span>
            </div>
            <div className="home-b-g">
              <img alt="Bg2557" src={img1} className="home-bg1" />
              <img alt="Bg2557" src={img2} className="home-bg2" />
              <img
                alt="Ellipse3462557"
                src={img3}
                className="home-ellipse346"
              />
              <img
                alt="Ellipse3472557"
                src={img4}
                className="home-ellipse347"
              />
            </div>
            <img alt="BG2559" src={img5} className="home-b-g3" />
          </div>
          <div className="home-uppernev">
            <img
              alt="Rectangle2867I255"
              src={img6}
              className="home-rectangle2867"
            />
            <div className="home-menu">
              <div className="home-courses">
                <span className="home-text04">
                  <span>Giới thiệu</span>
                </span>
              </div>
              <div className="home-for-college">
                <span className="home-text06">
                  <span>Hướng dẫn</span>
                </span>
              </div>
              <div className="home-for-high-school">
                <span className="home-text08">
                  <span>Bảng xếp hạng</span>
                </span>
                <img
                  alt="downarrow24OutlineI255"
                  src={img7}
                  className="home-downarrow24outline"
                />
              </div>
              <div className="home-for-kindergarten">
                <span className="home-text10">
                  <span>Vào thi</span>
                </span>
                <img
                  alt="downarrow24OutlineI255"
                  src={img8}
                  className="home-downarrow24outline1"
                />
              </div>
              <div className="home-for-kindergarten1">
                <span className="home-text12">
                  <span>Trang chủ</span>
                </span>
              </div>
            </div>
            <div className="home-account">
              <img
                alt="profile24OutlineI255"
                src={img9}
                className="home-profile24outline"
              />
              <span className="home-text14">
                <span>My Account</span>
              </span>
            </div>
          </div>
        </div>
        <button className="home-nha button">Chỉnh sửa đề bài</button>
        <div className="home-vong1">
          <span className="home-text16">
            <span>Vòng 1</span>
          </span>
          <textarea
            placeholder="placeholder"
            className="home-textarea textarea"
            defaultValue={""}
          />
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput01 input"
          />
          <input
            type="text"
            placeholder="đáp án c"
            className="home-textinput02 input"
          />
          <input
            type="text"
            name="fs"
            placeholder="Nhập mã câu hỏi"
            className="home-nhap-ma-cau-hoi input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput03 input"
          />
          <button className="home-xac-nhan button">Xác nhận</button>
        </div>
        <div className="home-vong2">
          <input
            type="text"
            name="fs"
            placeholder="Nhập mã câu hỏi"
            className="home-nhap-ma-cau-hoi1 input"
          />
          <span className="home-text18">
            <span>Vòng 2</span>
          </span>
          <span className="home-text20">
            <span>Câu hỏi khóa phụ</span>
          </span>
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput04 input"
          />
          <textarea
            placeholder="placeholder"
            className="home-textarea1 textarea"
            defaultValue={""}
          />
          <textarea
            placeholder="placeholder"
            className="home-textarea2 textarea"
            defaultValue={""}
          />
          <textarea
            placeholder="placeholder"
            className="home-textarea3 textarea"
            defaultValue={""}
          />
          <textarea
            placeholder="placeholder"
            className="home-textarea4 textarea"
            defaultValue={""}
          />
          <button className="home-xac-nhan1 button">Xác nhận</button>
          <span className="home-text22">Nhập từ khóa chính</span>
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput05 input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput06 input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput07 input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput08 input"
          />
          <div className="home-container1">
            <img
              alt="not img"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="home-image"
            />
            <span className="home-text23">
              <span>Tải ảnh lên</span>
            </span>
          </div>
        </div>
        <div className="home-vong3">
          <span className="home-text25">
            <span>Vòng 3</span>
          </span>
          <div className="home-ha">
            <img
              alt="Rectangle28962559"
              src={img10}
              className="home-rectangle2896"
            />
            <img alt="Vector2559" src={img11} className="home-vector" />
          </div>
          <span className="home-text27">
            <span>Tải ảnh hoặc video lên</span>
          </span>
          <button className="home-xac-nhan2 button">Xác nhận</button>
          <input
            type="text"
            placeholder="Đáp án"
            className="home-textinput09 input"
          />
          <input
            type="text"
            name="fs"
            placeholder="Nhập mã câu hỏi"
            className="home-nhap-ma-cau-hoi2 input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput10 input"
          />
        </div>
        <div className="home-vong4">
          <span className="home-text29">
            <span>Vòng 4</span>
          </span>
          <span className="home-text31">
            <span>Gói 20 điểm</span>
          </span>
          <span className="home-text33">
            <span>Gói 30 điểm</span>
          </span>
          <input
            type="text"
            name="fs"
            placeholder="Nhập mã câu hỏi"
            className="home-nhap-ma-cau-hoi3 input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput11 input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput12 input"
          />
          <button className="home-xac-nhan3 button">Xác nhận</button>
          <button className="home-xac-nhan4 button">Xác nhận</button>
          <button className="home-xac-nhan5 button">Xác nhận</button>
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput13 input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput14 input"
          />
        </div>
        <div className="home-eduvi">
          <div className="home-frame5">
            <span className="home-text35">
              <span>Contact</span>
            </span>
            <span className="home-text37">
              <span>Help</span>
            </span>
            <span className="home-text39">
              <span>Privacy</span>
            </span>
            <span className="home-text41">
              <span>Terms</span>
            </span>
            <span className="home-text43">
              <span>Investors</span>
            </span>
            <span className="home-text45">
              <span>Press</span>
            </span>
            <span className="home-text47">
              <span>More</span>
            </span>
          </div>
          <div className="home-frame4">
            <span className="home-text49">
              <span>Programs</span>
            </span>
            <span className="home-text51">
              <span>Testimonial</span>
            </span>
            <span className="home-text53">
              <span>Admissions</span>
            </span>
            <span className="home-text55">
              <span>Courses</span>
            </span>
            <span className="home-text57">
              <span>Professional Education</span>
            </span>
            <span className="home-text59">
              <span>Home</span>
            </span>
            <span className="home-text61">
              <span>Quick links</span>
            </span>
          </div>
          <div className="home-frame3">
            <span className="home-text63">
              <span>E-learning courses</span>
            </span>
            <span className="home-text65">
              <span>Video Courses</span>
            </span>
            <span className="home-text67">
              <span>Offline Courses</span>
            </span>
            <span className="home-text69">
              <span>Virtual classroom courses</span>
            </span>
            <span className="home-text71">
              <span>Classroom courses</span>
            </span>
            <span className="home-text73">
              <span>Courses</span>
            </span>
          </div>
          <div className="home-frame1">
            <span className="home-text75">
              <span>Teaching Center</span>
            </span>
            <span className="home-text77">
              <span>Blog</span>
            </span>
            <span className="home-text79">
              <span>Transactions</span>
            </span>
            <span className="home-text81">
              <span>Developers</span>
            </span>
            <span className="home-text83">
              <span>Parteners</span>
            </span>
            <span className="home-text85">
              <span>Learners</span>
            </span>
            <span className="home-text87">
              <span>Community</span>
            </span>
          </div>
          <div className="home-left">
            <span className="home-text89">
              <span>
                <span>Eduvi is a registered</span>
                <br />
                <br />
                <span>trademark of Eduvi.co</span>
              </span>
            </span>
            <span className="home-text94">
              <span>© 2021 Eduvi.co</span>
            </span>
            <div className="home-social">
              <div className="home-facebooklogo1">
                <div className="home-group">
                  <img alt="VectorI255" src={img12} className="home-vector1" />
                </div>
              </div>
              <img
                alt="LinkedInIconI255"
                src={img13}
                className="home-linked-in-icon"
              />
              <div className="home-twitter-logo">
                <div className="home-group1">
                  <img alt="VectorI255" src={img14} className="home-vector2" />
                </div>
              </div>
              <div className="home-frame8">
                <img alt="bgI255" src={img15} className="home-bg4" />
                <img
                  alt="InstagramIconI255"
                  src={img16}
                  className="home-instagram-icon"
                />
              </div>
            </div>
            <div className="home-logo">
              <span className="home-text96">
                <span>Eduvi</span>
              </span>
              <div className="home-icon">
                <div className="home-openbook1">
                  <div className="home-group2">
                    <div className="home-group3">
                      <div className="home-group4">
                        <img
                          alt="VectorI255"
                          src={img17}
                          className="home-vector3"
                        />
                        <img
                          alt="VectorI255"
                          src={img18}
                          className="home-vector4"
                        />
                        <img
                          alt="VectorI255"
                          src={img19}
                          className="home-vector5"
                        />
                        <img
                          alt="VectorI255"
                          src={img20}
                          className="home-vector6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
