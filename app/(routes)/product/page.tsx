import getProducts from "@/actions/GetProducts";
import Navbar from "@/components/NavBar";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({});

  return (
    <Container>
      <div className="h-full w-full overflow-hidden">
        <Navbar />

        <div
          style={{ backgroundImage: "url('/heroProducts2.jpg')" }}
          className=" relative w-full md:aspect-[2.4/1] overflow-hidden bg-cover bg-center"
        >
          <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 pb-20">
            <div className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl sm:max-w-10"></div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="space-y-10 pb-10 mt-10 mb-20">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
