import firstIcon from "../assets/icons/1.png";
import secondIcon from "../assets/icons/2.png";
import thirdIcon from "../assets/icons/3.png";
import fourthIcon from "../assets/icons/4.png";
import Coffees from "../components/all-coffees/Coffees";
import FollowUs from "../components/follow-us/FollowUs";
import Hero from "../components/hero/Hero";

function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <Hero />
        <div className=" mx-auto bg-card ">
          <div className="py-6 grid grid-cols-4 justify-center items-center gap-10 px-4 max-w-6xl mx-auto pl-10    ">
            <div className="space-y-2">
              <img className="w-12" src={firstIcon} alt="" />
              <h3 className="font-Rancho text-2xl font-semibold">
                Awesome Aroma
              </h3>
              <p className="text-sm ">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
            <div className="space-y-2">
              <img className="w-12" src={secondIcon} alt="" />
              <h3 className="font-Rancho text-2xl font-semibold">
                High Quality
              </h3>
              <p className="text-sm">
                We served the coffee to you maintaining the best quality
              </p>
            </div>
            <div className="space-y-2">
              <img className="w-12" src={thirdIcon} alt="" />
              <h3 className="font-Rancho text-2xl font-semibold">
                Pure Grades
              </h3>
              <p className="text-sm">
                The coffee is made of the green coffee beans which you will love
              </p>
            </div>
            <div className="space-y-2">
              <img className="w-12" src={fourthIcon} alt="" />
              <h3 className="font-Rancho text-2xl font-semibold">
                Proper Roasting
              </h3>
              <p className="text-sm">
                Your coffee is brewed by first roasting the green coffee beans
              </p>
            </div>
          </div>
        </div>
        <Coffees />
        <FollowUs />
      </div>
    </div>
  );
}

export default Home;
