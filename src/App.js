import React from "react";
import PropTypes from "prop-types";
//다른 컴포넌트를 다음과 같이 임포트하고
// import Potato from "./Potato";

//내가 만드는 것이 index.html의 #root div의 자식으로 들어가게 된다.
//react => 내가 여기에 쓰는 모든 요소를 생성한다. 자바스크립트로 만들고 html로 밀어넣는다.
//따라서 소스코드를 보면 react의 결과물을 볼수가 없다.
//react가 빠른이유 => 가상으로 동작한다. 소스코드에 존재하지 않음
//html이 먼저 로드되고 리액트가 동작한다.

// object안의 값을 가져올 때 props.fav = {fav}
function Food({ name, image, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    name: "Kimchi",
    id: "Kimchi",
    image:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_65390B023BB5FA177242F48877F1D44B.jpg",
    rating: 5.0,
  },
  {
    name: "ramen",
    id: "ramen",
    image:
      "https://img.insight.co.kr/static/2018/09/15/700/8i9p9ij7zofq0ibsk918.jpg",
    rating: 4.8,
  },
  {
    name: "kimpap",
    id: "kimpap",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
    rating: 3.5,
  },
];

// App(father)이 Food(children)에게 data를 보낼때 props에 데이터를 넣어 보낸다.
function App() {
  return (
    <div>
      {/* 이런식으로 삽입한다. */}
      {/* fav는 jsx로 HTML+Javascript를 의미한다. html 태그 속성과 흡사하다 */}
      {/* Component는 대문자로 시작해야한다. */}
      {/* <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgeopsal" />
      <Food fav="chukumi" /> */}
      {foodILike.map((dish) => (
        <Food
          name={dish.name}
          key={dish.id}
          image={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
