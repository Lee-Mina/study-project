// const button = document.querySelector(".log-btn");
// let id = document.querySelector(".id");
// let password = document.querySelector(".wrong");
// alert("아니 왜 안되는데");

const button = document.querySelector("#logb");
console.log("111", button);
button.addEventListener("click", signin);
console("에러");
function signin() {
  const id = document.querySelector(".id").value;
  const password = document.querySelector(".password").value;
  console.log(id);
  console.log(password);
  if (id === "insta_clone" && password === "1234") {
    alert("성공");
  } else {
    //아니면 함수를 실행해서 innerhtml로 글씨를 띄우는것
    const wrong = document.getElementById("wrong");
    console.log(wrong);
    // document.getElementById("#wrong").innerHTML =
    wrong.innerHTML = "잘못된 비밀번호입니다. 다시 확인하세요";

    // function flase(){
    //   const 변수 = document.querySelector(".wrong");
  }

  // if (password.value.length > 5 ? console.log("none"):button);
  // 잘못된 비밀번호입니다. 다시 확인하세요}]
}
