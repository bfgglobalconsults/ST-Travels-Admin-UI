import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // Import js-cookie to manage tokens

const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return axios.get(
        "https://st-travels-client-api.onrender.com/api/v1/employee-auth/logout"
      );
    },
    onSuccess: () => {
      // Clear tokens from localStorage
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");

      // Clear cookies if using js-cookie
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");

      // Reset user data in React Query
      queryClient.setQueryData(["user"], null);

      // Show success message
      toast.success("Logged out successfully");

      // Redirect to login or home page
      router.push("/login");
    },
    onError: (error) => {
      console.error("Error logging out:", error);
      toast.error("Error logging out. Please try again.");
    },
  });
};

export default useLogout;
