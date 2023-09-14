import './App.css';
import ProductDetail from "./Components/ProductDetail";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HeaderMenu from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
        <HeaderMenu />
        <div style={{marginTop:"5%"}}>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                {/*<Route path="/productDetails" element={<CardDetails />}></Route>*/}
                <Route path="/productDetails/:cardSet/:id" element={<ProductDetail />} />
            </Routes>
        </div>

        <Footer />
    </div>
  );
}

export default App;