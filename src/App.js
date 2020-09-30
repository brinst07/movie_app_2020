import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
//다른 컴포넌트를 다음과 같이 임포트하고
// import Potato from "./Potato";

//내가 만드는 것이 index.html의 #root div의 자식으로 들어가게 된다.
//react => 내가 여기에 쓰는 모든 요소를 생성한다. 자바스크립트로 만들고 html로 밀어넣는다.
//따라서 소스코드를 보면 react의 결과물을 볼수가 없다.
//react가 빠른이유 => 가상으로 동작한다. 소스코드에 존재하지 않음
//html이 먼저 로드되고 리액트가 동작한다.

// object안의 값을 가져올 때 props.fav = {fav}
// function Food({ name, image, rating }) {
//   return (
//     <div>
//       <h1>I like {name}</h1>
//       <h4>{rating}/5.0</h4>
//       <img src={image} alt={name} />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// };

// const foodILike = [
//   {
//     name: "Kimchi",
//     id: "Kimchi",
//     image:
//       "https://cdn.crowdpic.net/detail-thumb/thumb_d_65390B023BB5FA177242F48877F1D44B.jpg",
//     rating: 5.0,
//   },
//   {
//     name: "ramen",
//     id: "ramen",
//     image:
//       "https://img.insight.co.kr/static/2018/09/15/700/8i9p9ij7zofq0ibsk918.jpg",
//     rating: 4.8,
//   },
//   {
//     name: "kimpap",
//     id: "kimpap",
//     image:
//       "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
//     rating: 3.5,
//   },
// ];

// App(father)이 Food(children)에게 data를 보낼때 props에 데이터를 넣어 보낸다.
//function component
// function App() {
//   return (
//     <div>
//       {/* 이런식으로 삽입한다. */}
//       {/* fav는 jsx로 HTML+Javascript를 의미한다. html 태그 속성과 흡사하다 */}
//       {/* Component는 대문자로 시작해야한다. */}
//       {/* <Food fav="kimchi" />
//       <Food fav="ramen" />
//       <Food fav="samgeopsal" />
//       <Food fav="chukumi" /> */}
//       {foodILike.map((dish) => (
//         <Food
//           name={dish.name}
//           key={dish.id}
//           image={dish.image}
//           rating={dish.rating}
//         />
//       ))}
//     </div>
//   );
// }

//class componet
//App이라는 클래스는 React.Compenent를 extends함
//react는 자동적으로 class component의 render method를 자동으로 실행한다.
class App extends React.Component {
  // //extends했기때문에 render를 사용할수 있다
  // //state는 object이고 이 데이터는 변한다.
  // state = {
  //   count: 0,
  // };

  // add = () => {
  //   //this.state.count = +1; 절대 이런식으로 직접 변경하면 안된다.
  //   //  그 이유는 react는 render function을 refresh하지 않기 때문이다.

  //   // this.setState({ count: this.state.count + 1 });

  //   //setState를 호출하면 react는 state를 refresh하고 render function을 호출한다.
  //   //하지만 react는 virtualDom을 가지고 있기 때문에 전체를 refresh하는게 아닌
  //   //변화가 있는 부분만 변경한다. 마치 ajax처럼
  //   //하지만 위 코드가 좋은 코드는 아니다.
  //   //왜냐 state에 의존하고 있기 때문이다 이 의존성을 해결한 코드는 다음과 같다.
  //   this.setState((current) => ({ count: current.count + 1 }));
  // };

  // minus = () => {
  //   this.setState((current) => ({ count: current.count - 1 }));
  // };
  // componentDidMount() {
  //   console.log("component rendered");
  //   //component가 render된것을 알려준다.
  // }

  // componentDidUpdate() {
  //   console.log("didUpdate");
  //   //update되면 실행
  // }

  // componentWillUnmount() {
  //   console.log("goodbye");
  //   //component가 떠날때 호출
  // }

  state = {
    isLoading: true,
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000);
    this.getMovies();
  }

  render() {
    // console.log("render");

    //매번 this.state.isLoading을 입력하지 않게 위해 다음과 같이 코딩한다.
    const { isLoading, movies } = this.state;

    //자바스크립트 class안에 있으면 component class에 의해 혼란스러워 하므로
    //className으로 변경해준다.
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
    // <div>
    //   <h1>The number is : {this.state.count}</h1>
    //   <button onClick={this.add}>Add</button>
    //   <button onClick={this.minus}>Minus</button>
    // </div>
  }

  // constructor(props) {
  //   super(props);
  //   console.log("constructor");
  //   //component가 mount 될때, component가 screen에 표시될때, component가 Website에 갈때 => constructor를 호출한다.
  // }
}

export default App;
