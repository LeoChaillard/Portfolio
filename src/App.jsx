import { useState } from "react";
import { Header } from "./Header";
import { Console } from "./Console";
import { Footer } from "./Footer";
import { Localization } from "./Localization"

function App() {
  const [localization, setLocalization] = useState(Localization.EN);
  return (
    <div className="page">
      <Header localization={localization} setLocalization={setLocalization}/>
      <Console localization={localization}/>
      <Footer/>
    </div>
  );
}

export default App;
