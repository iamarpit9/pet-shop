import About from "./Components/About/About";
import Account from "./Components/Account/Account";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Plans from "./Components/Plans/Plans";
import Services from "./Components/Services/Services";
import Shop from "./Components/Shop/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserState from "./Context/UserState";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserState>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/plans" element={<Plans />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/account" element={<Account />} />
          </Routes>

          <Footer />
        </UserState>
      </BrowserRouter>
    </div>
  );
}

export default App;
