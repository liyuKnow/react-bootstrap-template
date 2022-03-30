import NewsLetter from "./components/NewsLetter";
import ShowCase from "./components/ShowCase";
import TopBar from "./components/TopBar";
import './App.css';
import Boxes from "./components/Boxes";
import Learn from "./components/Learn";
import Featured from "./components/Featured";
import FAQ from "./components/FAQ";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";
import Address from "./components/Address";
function App() {
  return (
    <div>
      <TopBar />
      <ShowCase />
      <NewsLetter />
      <Boxes />
      <Learn />
      <Featured />
      <FAQ />
      <Instructors />
      <Address />
      <Footer />
    </div>
  );
}

export default App;
