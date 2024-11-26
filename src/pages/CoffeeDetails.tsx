import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import card1 from "../assets/cups/Rectangle-12.png";
import { Card, CardContent, CardHeader } from "../components/ui/card";

function CoffeeDetails() {
  return (
    <div className=" bg-newCoffeeBg bg-cover bg-no-repeat">
      <div className="max-w-3xl mx-auto pt-10">
        <Link className="" to={"/"}>
          <h2 className="flex items-center gap-3 font-Rancho text-2xl">
            <ArrowLeft /> Back To Home
          </h2>
        </Link>
        <Card className="flex items-center mt-5">
          <CardHeader>
            <img className="w-62" src={card1} alt="" />
          </CardHeader>
          <CardContent className="pt-6 space-y-1">
            <h3 className="text-3xl font-Rancho font-semibold mb-4">
              Niceties
            </h3>
            <p>
              <span className="font-semibold ">Name :</span>{" "}
              <span className=" ml-1 text-black/80">Americano Coffee</span>
            </p>
            <p>
              <span className="font-semibold ">Chef : </span>
              <span className=" ml-1 text-black/80">Mr. Matin Paul</span>
            </p>
            <p>
              <span className="font-semibold ">Price :</span>
              <span className=" ml-1 text-black/80"> 890 Taka</span>
            </p>
            <p>
              <span className="font-semibold ">Supplier :</span>
              <span className=" ml-1 text-black/80"> Cappu Authorizer</span>
            </p>
            <p>
              <span className="font-semibold ">Taste :</span>
              <span className=" ml-1 text-black/80"> Sweet and hot</span>
            </p>
            <p>
              <span className="font-semibold ">Category :</span>
              <span className=" ml-1 text-black/80"> Americano</span>
            </p>
            <p>
              <span className="font-semibold ">Details :</span>
              <span className=" ml-1 text-black/80">
                {" "}
                Espresso with hot water
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CoffeeDetails;
