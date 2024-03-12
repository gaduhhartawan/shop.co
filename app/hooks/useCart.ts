import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { SafeUser } from "../types";
import { useCallback, useMemo } from "react";

interface IUseCart {
  productId: string;
  currentUser?: SafeUser | null;
}

const useCart = ({ productId, currentUser }: IUseCart) => {
  const router = useRouter();

  const onCart = useMemo(() => {
    const list = currentUser?.carts || [];

    return list.includes(productId);
  }, [currentUser, productId]);

  const toggleCart = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        toast.error("Need login first!");
        return setTimeout(() => {
          router.push("/login");
        }, 1000);
      }

      try {
        let request;

        if (onCart) {
          request = () => axios.delete(`/api/cart/${productId}`);
        } else {
          request = () => axios.post(`/api/cart/${productId}`);
        }

        await request();

        router.refresh();
        toast.success("Success");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, onCart, productId, router]
  );

  return {
    onCart,
    toggleCart,
  };
};

export default useCart;
