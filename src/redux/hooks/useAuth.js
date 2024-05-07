import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from "../auth/authSelector";

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const isRefreshing = useSelector(selectIsRefreshing);
    return {
        isLoggedIn,
        user,
        isRefreshing,
    };
};