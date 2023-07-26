import NavBarHero from "./NavBarHero";

const Billboard: React.FC = ({}) => {
  return (
    <div className="h-full w-full overflow-hidden">
      <div
        style={{ backgroundImage: "url('/hero.jpg')" }}
        className=" relative w-full md:aspect-[2.4/1] overflow-hidden bg-cover bg-center"
      >
        <NavBarHero />

        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 pb-20">
          <div className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl sm:max-w-10">
            <h1 className="text-white w-full">
              Experience the future of online shopping now.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
