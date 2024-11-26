import { Button } from "../ui/button";

function Hero() {
  return (
    <div>
      <div className="container mx-auto bg-heroBg bg-cover bg-no-repeat py-40 bg-bottom relative before:absolute before:inset-0 before:w-full before:h-full before:bg-black/30 text-white grid grid-cols-2 ">
        <div></div>
        <div className="z-50 flex flex-col gap-4 justify-start items-start">
          <h1 className="font-Rancho text-4xl ">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-muted/80">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <Button className="bg-accent border-none text-black rounded-none font-medium">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
