import Community from "./Community";
import CTA from "./CTA";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Home from "./Home";
import Mission from "./Mission";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import "./static/css/root.css"
import Workouts from "./Workouts";
function App() {
  return (
    <div className="App">
      <div className="navbar-home-div" id="Home">
        <Navbar />
        <Home />
      </div> 
      <Mission />
      <Workouts />
      <Pricing />
      <Community />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
