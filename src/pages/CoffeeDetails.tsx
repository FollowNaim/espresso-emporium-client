import { ArrowLeft } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../components/ui/card";

function CoffeeDetails() {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <div className=" bg-newCoffeeBg bg-cover bg-no-repeat">
      <div className="max-w-3xl px-4 mx-auto pt-10">
        <Link className="" to={"/"}>
          <h2 className="flex items-center gap-3 font-Rancho text-2xl">
            <ArrowLeft /> Back To Home
          </h2>
        </Link>
        <Card className="flex items-center mt-5 h-full w-full">
          <CardHeader className="h-full">
            <img
              className="w-44 rounded-md h-full object-cover"
              src={photo}
              alt=""
            />
          </CardHeader>
          <CardContent className="pt-6 space-y-1">
            <h3 className="text-3xl font-Rancho font-semibold mb-4">
              Niceties
            </h3>
            <p>
              <span className="font-semibold ">Name :</span>{" "}
              <span className=" ml-1 text-black/80">{name}</span>
            </p>
            <p>
              <span className="font-semibold ">Chef : </span>
              <span className=" ml-1 text-black/80">{chef}</span>
            </p>
            <p>
              <span className="font-semibold ">Price :</span>
              <span className=" ml-1 text-black/80"> 890 Taka</span>
            </p>
            <p>
              <span className="font-semibold ">Supplier :</span>
              <span className=" ml-1 text-black/80"> {supplier}</span>
            </p>
            <p>
              <span className="font-semibold ">Taste :</span>
              <span className=" ml-1 text-black/80"> {taste}</span>
            </p>
            <p>
              <span className="font-semibold ">Category :</span>
              <span className=" ml-1 text-black/80"> {category}</span>
            </p>
            <p>
              <span className="font-semibold ">Details :</span>
              <span className=" ml-1 text-black/80"> {details}</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CoffeeDetails;
