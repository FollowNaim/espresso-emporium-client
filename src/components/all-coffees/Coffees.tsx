import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Coffee from "./Coffee";
interface Coffee {
  _id: string;
  name: string;
  chef: string;
  supplier: string;
  taste: string;
  category: string;
  details: string;
  photo: string;
}
function Coffees() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  useEffect(() => {
    fetch("https://server-coffees.vercel.app/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);
  return (
    <div className="mt-20 pb-20 bg-homeBG bg-cover bg-no-repeat">
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="">--- Sip & Savor ---</p>

          <h3 className="font-Rancho text-4xl font-semibold mt-2">
            Our Popular Products
          </h3>
          <Link to={"/add-coffee"}>
            <Button className="rounded-none bg-accent font-medium mt-4">
              Add Coffee
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-auto gap-4 mt-8">
          {coffees?.map((coffee) => (
            <Coffee
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
              key={coffee._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Coffees;
