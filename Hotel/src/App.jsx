import Header from "./Global_components/Header/Header";
import Footer from "./Global_components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
