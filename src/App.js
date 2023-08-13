import LandingPage from "./modules/LandingPage";
import MatrixRain from "./modules/Background/BackGround";
function App() {
  return (
    <div>
      <MatrixRain />
      <div className="content-overlay">
        <div className="container">
          <LandingPage/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
