import { Card, CardContent, CardHeader } from "../ui/card";
import coffe1 from "../../assets/6.png";
import { Eye, Pencil, Trash } from "lucide-react";

function Coffee() {
  return (
    <Card className="flex justify-between bg-card/50 shadow-none border-none items-center text-black">
      <CardHeader>
        <img className="w-16" src={coffe1} alt="" />
      </CardHeader>
      <CardContent className="pt-6 space-y-1">
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
      </CardContent>
      <CardContent className="flex flex-col gap-2 pt-6">
        <Eye size={30} className="bg-accent text-white p-2 rounded-md" />
        <Pencil size={30} className="bg-gray-800 text-white p-2 rounded-md" />
        <Trash size={30} className="bg-red-600 text-white p-2 rounded-md" />
      </CardContent>
    </Card>
  );
}

export default Coffee;
