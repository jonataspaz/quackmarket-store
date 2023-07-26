"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import usePreviewModal from "@/hooks/UsePreviewModal";
import { Product } from "@/types";
import IconButton from "./IconButton";
import Currency from "./Currency";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5"></div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg capitalize">{data.name}</p>
      </div>
      {/* Price & View */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
