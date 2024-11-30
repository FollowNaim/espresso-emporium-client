import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

function AddNewCoffee() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    // Access form elements by their name attributes
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const chef = (form.elements.namedItem("chef") as HTMLInputElement).value;
    const supplier = (form.elements.namedItem("supplier") as HTMLInputElement)
      .value;
    const taste = (form.elements.namedItem("taste") as HTMLInputElement).value;
    const category = (form.elements.namedItem("category") as HTMLInputElement)
      .value;
    const details = (form.elements.namedItem("details") as HTMLInputElement)
      .value;
    const photo = (form.elements.namedItem("photo") as HTMLInputElement).value;
    const coffee = { name, chef, supplier, taste, category, details, photo };
    toast
      .promise(
        fetch("https://server-coffees.vercel.app/coffees", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(coffee),
        }),
        {
          loading: "Adding New Coffee...",
          success: <b>Coffee Added!</b>,
          error: <b>Could not add.</b>,
        }
      )
      .then((res) => res.json())
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="pt-10 px-4 bg-newCoffeeBg bg-cover bg-no-repeat">
      <div className="mx-auto max-w-2xl pb-4 hover:text-red-600">
        <Link to={"/"}>
          <h2 className="flex items-center gap-3 font-Rancho text-2xl">
            <ArrowLeft /> Back To Home
          </h2>
        </Link>
      </div>
      <Card className="mx-auto max-w-2xl bg-[#F4F3F0]">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Add New Coffee</CardTitle>
          <CardDescription>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="flex items-center gap-4 w-full">
                <div className="space-y-2 w-full">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    className="bg-white"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter Coffee Name"
                    required
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="chef">Chef</Label>
                  <Input
                    className="bg-white"
                    name="chef"
                    id="chef"
                    type="text"
                    placeholder="Enter coffee chef"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 w-full">
                <div className="space-y-2 w-full">
                  <Label htmlFor="Supplier">Supplier</Label>
                  <Input
                    className="bg-white"
                    id="Supplier"
                    name="supplier"
                    type="text"
                    placeholder="Enter coffee supplier"
                    required
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="taste">Taste</Label>
                  <Input
                    className="bg-white"
                    name="taste"
                    id="taste"
                    type="text"
                    placeholder="Enter coffee taste"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 w-full">
                <div className="space-y-2 w-full">
                  <Label htmlFor="Category">Category</Label>
                  <Input
                    className="bg-white"
                    id="Category"
                    name="category"
                    type="text"
                    placeholder="Enter coffee category"
                    required
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="details">Details</Label>
                  <Input
                    className="bg-white"
                    name="details"
                    id="details"
                    type="text"
                    placeholder="Enter coffee details"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="photo">Photo</Label>
                <Input
                  className="bg-white"
                  id="photo"
                  name="photo"
                  placeholder="Enter photo URL"
                  type="url"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Add New Coffee
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddNewCoffee;
