"use client";

import { Button } from "@/app/common/components/ShadCN/CNButton";
import { Loader2, ShoppingCartIcon } from "lucide-react";
import { useTransition, type MouseEvent } from "react";

const ProductCardButton = () => {
  const [isPending, startTransition] = useTransition();

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    startTransition(() => {
      console.log("Adding to cart");
    });
  };

  return (
    <Button
      className="cursor-pointer"
      onClick={handleAddToCart}
      disabled={isPending}
    >
      {isPending ? <Loader2 className="animate-spin" /> : <ShoppingCartIcon />}
    </Button>
  );
};

export default ProductCardButton;
