import React, { createContext, useState } from "react";
import TopHeader from "./components/product/TopHeader";
import Shop from "./components/product/Shop";
export const productContext = createContext();

const App = () => {
  const [cartProduct, setCartProduct] = useState([]);
  // max-w-screen-2xl mx-auto
  return (
    <div className="px-5 ">
      <productContext.Provider value={[cartProduct, setCartProduct]}>
        <TopHeader />
        <Shop />
      </productContext.Provider>
    </div>
  );
};

export default App;
