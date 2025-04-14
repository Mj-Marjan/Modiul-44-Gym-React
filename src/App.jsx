
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing/Pricing'


const PricingPromise = fetch("pricingData.json")
             .then(res => res.json())
function App() {

  return (
    <>
      <header>
      <Navbar></Navbar>
      </header>
      <main>
        <suspense fallback={<span className="loading loading-spinner loading-xl"></span>
}>
          <Pricing PricingPromise={PricingPromise}>

          </Pricing>
        </suspense>
      </main>
    </>
  )
}

export default App
