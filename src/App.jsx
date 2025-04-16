import { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import ResultChart from "./Components/ResultChart/ResultChart";

const PricingPromise = fetch("pricingData.json").then((res) => res.json());
function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <Pricing PricingPromise={PricingPromise}></Pricing>
        </Suspense>

        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App;
