import {
  Facebook,
  Github,
  Locate,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import navLogo from "../../assets/more/nav-footer.png";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
function Footer() {
  return (
    <>
      <div className="bg-footerBg text-black mt-10 pt-20 pb-8 px-8">
        <div className="container mx-auto grid grid-cols-2 items-center">
          <div>
            <div className="flex flex-col gap-4">
              <img className="w-16" src={navLogo} alt="" />
              <h3 className="text-3xl font-Rancho font-semibold">
                Espresso Emporium
              </h3>
              <p>
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
              <div className="flex items-center gap-4">
                <Facebook />
                <Github />
                <Twitter />
                <Youtube />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <h3 className="text-2xl font-semibold font-Rancho">
                Get in Touch
              </h3>
              <p className="flex items-center gap-2">
                <Phone />
                +88 01533 333 333
              </p>
              <p className="flex items-center gap-2">
                <Mail />
                info@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Locate />
                72, Wall street, King Road, Dhaka
              </p>
            </div>
          </div>
          <div className=" ">
            <div className="w-[400px] ml-20 flex items-start flex-col gap-3">
              <h3 className="text-3xl font-semibold font-Rancho">
                Connect with Us
              </h3>
              <Input className="bg-white" placeholder="name" type="text" />
              <Input className="bg-white" placeholder="email" type="email" />
              <Textarea className="bg-white h-32" placeholder="your message" />
              <Button
                className="bg-transparent border-2 rounded-3xl"
                variant={"outline"}
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
      <p
        className="bg-lastFooter bg-cover py-3 text-lg lett text-white font-Rancho text-center"
        style={{ wordSpacing: "2px" }}
      >
        Copyright Espresso Emporium ! All Rights Reserved
      </p>
    </>
  );
}

export default Footer;
