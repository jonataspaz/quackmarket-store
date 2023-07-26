import getProducts from "@/actions/GetProducts";
import Billboard from "@/components/Hero";
import ProductListShowcase from "@/components/ProductListShowcase";
import Container from "@/components/ui/Container";
import Link from "next/link";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({});

  return (
    <Container>
      <Billboard />
      <div className="h-[20rem] bg-white flex justify-end p-4">
        <div className="w-[25rem] m-10">
          <h1 className="text-3xl font-bold mb-4">Revolutionary</h1>
          <p className="text-lg font-semibold">
            QuackMarket brings you the ultimate 3D online shopping experience,
            with stunning visuals and interactive product displays that ensure a
            seamless and immersive browsing journey.
          </p>
        </div>
      </div>

      <div className="h-full w-full overflow-hidden">
        <div
          style={{ backgroundImage: "url('/hero2.jpg')" }}
          className="h-[80rem] relative w-full md:aspect-[2.4/1] overflow-hidden bg-cover bg-center flex justify-end p-4 items-center"
        >
          <div className="flex justify-center items-center flex-col">
            <p className="text-white text-3xl font-bold mb-4">
              Ready to start selling on QuackMarket? Don`t miss the opportunity
              to reach millions of potential customers worldwide.
            </p>
            <Link
              href={"/"}
              className="bg-white text-black px-4 py-2 rounded-md"
            >
              Start Selling
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 bg-black">
          <ProductListShowcase title="Bestsellers Showcase" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
