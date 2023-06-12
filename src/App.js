import React, { createContext, useState } from "react";
import TopHeader from "./components/product/TopHeader";
import Shop from "./components/product/Shop";
export const productContext = createContext();
export const amaountContext = createContext();
export const discountContext = createContext();

const App = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const [inputAmaount, setInputAmaount] = useState(0);
  const [selectValue, setSelectValue] = useState("flat");

  // max-w-screen-2xl mx-auto
  return (
    <div className="px-5 ">
      <productContext.Provider value={[cartProduct, setCartProduct]}>
        <amaountContext.Provider value={[inputAmaount, setInputAmaount]}>
          <discountContext.Provider value={[selectValue, setSelectValue]}>
            <TopHeader />
            <Shop />
          </discountContext.Provider>
        </amaountContext.Provider>
      </productContext.Provider>
    </div>
  );
};

export default App;
