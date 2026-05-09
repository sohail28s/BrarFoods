import NewsAccordion from "../Components/Accordion";
import DietaryFeatures from "../Components/DietaryFeatures";
import Dishes from "../Components/Dishes";
import FoodCulture from "../Components/Foodculture";
import MainHeroSlider from "../Components/HeroSlider";
import Menu1 from "../Components/Menu1";
import NewsletterCard from "../Components/Newsletter";
import RecipeSlider from "../Components/RecepieSlider";

function Home(){
    return(
        <>
         <MainHeroSlider />
        <Menu1 />
        <DietaryFeatures />
        <Dishes />
        <RecipeSlider />
        <NewsAccordion />
        <FoodCulture />
        <NewsletterCard />
        </>
    )
}
export default Home;