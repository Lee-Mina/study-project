// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  // 글제목변경 = "뇸뇸";
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [input, inputSet] = useState("");

  function New() {
    let copyArray = [...글제목];
    copyArray[0] = "여자코트추천";
    글제목변경(copyArray);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={New}></button>

      <div>
        {글제목.map(function (글, i) {
          return (
            <div className="list">
              <h2
                onClick={() => {
                  누른제목변경(i);
                  modal변경(!modal);
                }}
              >
                {글}
              </h2>
              <span
                onClick={() => {
                  따봉변경(따봉 + 1);
                }}
              >
                👍
              </span>
              {따봉}
              <p>2022.1.29</p>
              <hr />
            </div>
          );
        })}

        <button
          onClick={() => {
            누른제목변경(0);
          }}
        >
          버튼1
        </button>
        <button
          onClick={() => {
            누른제목변경(1);
          }}
        >
          버튼2
        </button>
        <button
          onClick={() => {
            누른제목변경(2);
          }}
        >
          버튼3
        </button>

        <button
          onClick={() => {
            modal변경(!modal);
          }}
        >
          버튼
        </button>
        {input}
        <input
          onChange={(e) => {
            inputSet(e.target.value);
          }}
        ></input>
        <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        {/* {modal === true ? (
          
        ) : null} */}
      </div>
      {/* <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div> */}
    </div>
  );
}
function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
