import { Eye, Pencil, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../ui/card";

function Coffee({ coffee }: { coffee: object }) {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <Card className="flex justify-between bg-card/50 shadow-none border-none items-center text-black">
      <CardHeader>
        <img className="w-24 object-cover" src={photo} alt="" />
      </CardHeader>
      <CardContent className="pt-6 space-y-1 flex-1">
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
      </CardContent>
      <CardContent className="flex flex-col gap-2 pt-6 w-24">
        <Link to={`/coffees/${_id}`}>
          <Eye size={30} className="bg-accent text-white p-2 rounded-md" />
        </Link>
        <Pencil size={30} className="bg-gray-800 text-white p-2 rounded-md" />
        <Trash size={30} className="bg-red-600 text-white p-2 rounded-md" />
      </CardContent>
    </Card>
  );
}

export default Coffee;
