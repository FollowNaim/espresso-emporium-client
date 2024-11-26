import { Button } from "../ui/button";
import Coffee from "./Coffee";

function Coffees() {
  return (
    <div className="my-20">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-xs">--- Sip & Savor ---</p>

          <h3 className="font-Rancho text-3xl font-semibold mt-2">
            Our Popular Products
          </h3>
          <Button className="rounded-none bg-accent font-medium mt-4">
            Add Coffee
          </Button>
        </div>
        <div className="grid grid-cols-2 justify-center items-center w-9/12 mx-auto gap-4 mt-8">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <Coffee />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Coffees;
