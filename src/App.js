import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ReviewsList from "./components/ReviewsList";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <ReviewsList />
    </div>
  );
}

export default App;
