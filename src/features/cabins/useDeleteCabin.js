import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabiApi } from "../../services/apiCabin";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabiApi,
    onSuccess: () => {
      toast.success("Cabin sucessfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
