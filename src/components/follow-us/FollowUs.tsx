import cup2 from "../../assets/cups/Rectangle-10.png";
import cup3 from "../../assets/cups/Rectangle-11.png";
import cup4 from "../../assets/cups/Rectangle-12.png";
import cup5 from "../../assets/cups/Rectangle-13.png";
import cup6 from "../../assets/cups/Rectangle-14.png";
import cup7 from "../../assets/cups/Rectangle-15.png";
import cup8 from "../../assets/cups/Rectangle-16.png";
import cup1 from "../../assets/cups/Rectangle-9.png";
function FollowUs() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="">Follow Us Now</p>

          <h3 className="font-Rancho text-4xl font-semibold mt-2">
            Follow on Instagram
          </h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 *:h-52 *:w-full *:object-cover *:rounded-md mt-8">
          <img src={cup1} alt="" />
          <img src={cup2} alt="" />
          <img src={cup3} alt="" />
          <img src={cup4} alt="" />
          <img src={cup5} alt="" />
          <img src={cup6} alt="" />
          <img src={cup7} alt="" />
          <img src={cup8} alt="" />
        </div>
      </div>
    </div>
  );
}

export default FollowUs;
