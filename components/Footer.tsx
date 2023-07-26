const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: "url('/footer.jpg')" }}
      className="h-[15rem] relative w-full md:aspect-[2.4/1] overflow-hidden bg-cover bg-center border-t flex "
    >
      <div className="mx-auto py-[10rem]">
        <p className="text-center text-xs text-white">
          &copy; 2023 QuackMarket, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
