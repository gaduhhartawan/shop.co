import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { SafeUser } from "../types";
import { useCallback, useMemo } from "react";

interface IUseWishlist {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useWishlist = ({ listingId, currentUser }: IUseWishlist) => {
  const router = useRouter();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
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

        if (hasFavorited) {
          request = () => axios.delete(`/api/wishlist/${listingId}`);
        } else {
          request = () => axios.post(`/api/wishlist/${listingId}`);
        }

        await request();

        router.refresh();
        toast.success("Success");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorited, listingId, router]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useWishlist;
