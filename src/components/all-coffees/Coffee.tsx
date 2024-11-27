import { Eye, Pencil, Trash } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../ui/card";

function Coffee({ coffee, coffees, setCoffees }: { coffee: object }) {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleDelete = (id) => {
    toast
      .promise(
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        }),
        {
          loading: "Deleting...",
          success: <b>Deleted Successfully!</b>,
          error: <b>Could not delete.</b>,
        }
      )
      .then((res) => res.json())
      .then(() => {
        setCoffees(coffees.filter((c: { _id: string }) => c._id !== id));
      })
      .catch((err) => console.log(err));
  };
  return (
    <Card className="flex justify-between bg-card/50 shadow-none border-none items-center text-black">
      <CardHeader>
        <img className="w-24 h-32 rounded-lg object-cover" src={photo} alt="" />
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
          <Eye
            size={30}
            className="bg-accent hover:bg-orange-700 hover:scale-95 duration-150 transition-all text-white p-2 rounded-md"
          />
        </Link>
        <Link to={`/update-coffee/${_id}`}>
          <Pencil
            size={30}
            className="bg-gray-800 hover:bg-black hover:scale-95 duration-150 transition-all text-white p-2 rounded-md"
          />
        </Link>

        <Trash
          size={30}
          className="bg-red-600 hover:bg-red-900 hover:scale-95 duration-150 transition-all cursor-pointer text-white p-2 rounded-md"
          onClick={() => handleDelete(_id)}
        />
      </CardContent>
    </Card>
  );
}

export default Coffee;
