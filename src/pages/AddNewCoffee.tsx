import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
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
  return (
    <div className="pt-10 bg-newCoffeeBg bg-cover bg-no-repeat">
      <div className="mx-auto max-w-2xl pb-4">
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
                placeholder="Enter photo URL"
                type="url"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Add New Coffee
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddNewCoffee;
