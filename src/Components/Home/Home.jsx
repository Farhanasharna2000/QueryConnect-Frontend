import About from "../About/About";
import Benefit from "../Benefit/Benefit";
import Hero from "../Hero/Hero";
import HowItWorks from "../HowItWorks/HowItWorks";
import RecentQuestions from "../RecentQuestions/RecentQuestions";
import Testimonials from "../Testimonials/Testimonials";
import TopUsers from "../TopUsers/TopUsers";

const Home = () => {
  return (
   
      <div>
   <Hero/>
   <About/>
   <HowItWorks/>
   <TopUsers/>
   <RecentQuestions/>
   <Benefit/>
   <Testimonials/>
      </div>
  
  );
};

export default Home;
