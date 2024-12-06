import BestSales from "./components/BestSales"
import Category from "./components/Category"
import FlashSales from "./components/FlashSale"
import Hero from "./components/Hero"
import MusicSection from "./components/MusicSection"
import NewArrival from "./components/NewArrival"
import OurProject from "./components/OurProduct"
import Policy from "./components/Policy"


const page = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
<Hero/>
<FlashSales/>
<Category/>
<BestSales/>
<MusicSection/>
<OurProject/>
<NewArrival/>
<Policy/>
    </div>
  )
}

export default page