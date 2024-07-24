import Input from "../UI/Input"
import BestDeals from "../components/LandingPageComponents/BestDeals/BestDeals"
import CashBack5 from "../components/LandingPageComponents/CashBack5/CashBack5"
import CashBackBanner from "../components/LandingPageComponents/CashBackBanner/CashBackBanner"
import CategoryDisplay from "../components/LandingPageComponents/CategoryShower/CategoryDisplay"
import ChooseBrand from "../components/LandingPageComponents/ChooseBrand/ChooseBrand"
import HeroBanner from "../components/LandingPageComponents/Hero/HeroBanner"
import TodaysDeals from "../components/LandingPageComponents/TodaysDeals/TodaysDeals"
import "./LandingPage.css"
import { useState } from 'react';
import SearchResults from "../UI/SearchResultsBox/SearchResults"
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../components/Footer/Footer"
const LandingPage = () => {

  const [searchValue, setSearchValue] = useState('');

 
  return (
    <>
    <AnimatePresence>
    <motion.div initial={{opacity:0 }} animate={{opacity:1}} transition={{duration:1}} exit={{opacity:0}}>
      <HeroBanner />
      <div className="searchBar">
        <Input name={"main"} setSearchValue={setSearchValue} />
        <SearchResults name = {""} inputValue={searchValue} />
      </div>
      <CategoryDisplay id="category-display-section" />
      <BestDeals id="deals-section" />
      <ChooseBrand />
      <CashBackBanner />
      <TodaysDeals />
      <CashBack5 />
    
      <Footer/>
      </motion.div>
      </AnimatePresence>
    </>
  )
}

export default LandingPage