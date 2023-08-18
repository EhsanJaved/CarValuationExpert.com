import LandingPage from "./modules/LandingPage";
import CarRequirementsForm from "./modules/CarRequirementsForm";
import {Route, Routes} from "react-router-dom";
import Content from "./modules/Content";
import Result from "./modules/Result";
import PreAbout from "./modules/PreAbout";
import ChartComponent from "./modules/Charts";
import AboutMe2 from "./modules/AboutMe2";
import Scrape from "./modules/Scrape";
import { useState } from "react";
import Scraper_olx from "./modules/ScraperOlx";
function App() {

  const [dataFromChildA, setDataFromChildA] = useState(null);

  const receiveDataFromChildA = (data) => {
    setDataFromChildA(data);
  };

  return (
    <Routes>
        <Route exect path="/" element={<LandingPage/>}>
        <Route exect path="/" element={<Content/>}/>
        <Route exect path="/prediction" element={<CarRequirementsForm sendDataToParent={receiveDataFromChildA} />}/>
        <Route path="/prediction/process"  element={<Result data_Recived={dataFromChildA} />}/>
          {/* </Route> */}
        <Route exect path="/about" element={<AboutMe2/>}/>
        <Route exect path="/predictionAbout" element={<PreAbout/>}/>
        <Route exect path="/charts" element={<ChartComponent/>}/>
        <Route exect path="/Scrape" element={<Scrape/>}/>
        <Route exect path="/Scrape/olx" element={<Scraper_olx/>} />
        <Route exect path="/Scrape/pw" element={<Scraper_olx/>} />
        </Route>
      </Routes>
  );
}

export default App;
