import Header from "./components/header/Header";
import LessonCard from "./components/lesson/LessonCard";
import "./style.scss";
import { data } from "./helper/data";

function App() {
  return (
    <div className="App">
      <Header />
      <LessonCard data={data} />
    </div>
  );
}

export default App;
