import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import NoResults from "@/components/ui/NoResults";

import getProducts from "@/actions/GetProducts";
import getCategory from "@/actions/GetCategory";
import Navbar from "@/components/NavBar";
import { Separator } from "@/components/ui/separator";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
  });
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Navbar />
      <div
        style={{ backgroundImage: "url('/heroProducts2.jpg')" }}
        className=" relative w-full md:aspect-[2.4/1] overflow-hidden bg-cover bg-center"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 pb-20">
          <div className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl sm:max-w-10"></div>
        </div>
      </div>
      <Separator />
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 pb-24 mt-10 mb-20">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
