"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/Currency";
import Button from "@/components/ui/ButtonCustom";
import { Product } from "@/types";
import ModelViewer from "./ui/ModelViewer";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 capitalize">
        {data.name}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Description:</h3>
          <p className="text-gray-600 capitalize">{data.description}</p>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <ModelViewer
          modelUrl={data.model3d.url}
          modelIframe={data.model3d.iframeUrl}
        />

        <Button className="flex items-center gap-x-2">
          Contact Seller
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
