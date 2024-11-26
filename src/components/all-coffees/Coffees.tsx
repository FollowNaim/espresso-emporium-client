import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Coffee from "./Coffee";

function Coffees() {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/coffees")
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
          <Button className="rounded-none bg-accent font-medium mt-4">
            Add Coffee
          </Button>
        </div>
        <div className="grid grid-cols-2 justify-center items-center mx-auto gap-4 mt-8">
          {coffees?.map((coffee) => (
            <Coffee coffee={coffee} key={coffee._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Coffees;
