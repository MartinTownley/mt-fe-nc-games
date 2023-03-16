import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ReviewsList from "./components/ReviewsList";
import SingleReview from "./components/SingleReview";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ReviewsList />} />
        <Route path="/reviews/:reviewId" element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
