import React from "react";
import TopHeader from "./components/product/TopHeader";
import Shop from "./components/product/Shop";

const App = () => {
  // max-w-screen-2xl mx-auto
  return (
    <div className="px-5 ">
      <TopHeader />
      <Shop />
    </div>
  );
};

export default App;
