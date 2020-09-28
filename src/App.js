import React from "react";
//내가 만드는 것이 index.html의 #root div의 자식으로 들어가게 된다.
//react => 내가 여기에 쓰는 모든 요소를 생성한다. 자바스크립트로 만들고 html로 밀어넣는다.
//따라서 소스코드를 보면 react의 결과물을 볼수가 없다.
//react가 빠른이유 => 가상으로 동작한다. 소스코드에 존재하지 않음
//html이 먼저 로드되고 리액트가 동작한다.
function App() {
  return <div>Hello!!!!</div>;
}

export default App;
