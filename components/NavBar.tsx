import Link from "next/link";

import MainNav from "@/components/MainNav";
import Container from "@/components/ui/Container";
import getCategories from "@/actions/GetCategories";
import Image from "next/image";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-center">
          <Link href="/product">
            <div className="flex">
              <Image src={"/Logo.png"} alt="Logo" width="100" height="100" />
            </div>
          </Link>
          <MainNav data={categories} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
