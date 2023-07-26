import Link from "next/link";

import Container from "@/components/ui/Container";
import Image from "next/image";

const Navbar = async () => {
  return (
    <div className="">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <Link href="/">
            <div className="flex">
              <Image src={"/Logo.png"} alt="Logo" width="100" height="100" />
            </div>
          </Link>
          <Link href="/product">
            <div className="text-xl">Explorer</div>
          </Link>
          <Link href="/product">
            <div className="text-xl">Register</div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
