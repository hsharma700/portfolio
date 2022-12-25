import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, useLocation , useNavigate} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Page2 from "./components/Page2";
import Page1 from "./components/Page1";
import About from "./components/About";
import Loader from "./components/Loader";
import { AnimatePresence } from "framer-motion";

function App() {
  function myFuntion() {
    // let preload = document.getElementById("preloader")
    // setTimeout(()=>{
    //   preload.style.opacity="0"
    //   setTimeout(()=>{
    //       preload.style.display = "none";
    //   },1000)
    // },2000)
  }

  return (
      <div onLoad={myFuntion} className="App1">
        <div id="preloader"></div>
        <BrowserRouter>
          
            <Header/>
            {/* <Navbar/> */}
            <div className="main-container">
            <AnimatePresence>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hsharma/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/loader" element={<Loader />} />
                <Route path="*" element={<Home />} />

                <Route path="/about" element={<About/>}/>
                <Route path="/register" element={<Register />} />
              </Routes>
              </AnimatePresence>
            </div>
            <Footer />
        </BrowserRouter>
        
      </div>
  );
}

export default App;
