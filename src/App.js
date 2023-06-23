import './App.css';

import {AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu} from "./container"
import {Navbar} from "./components"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Laurels />
      <FindUs />
    </div>
  );
}

export default App;
