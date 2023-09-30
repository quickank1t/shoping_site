import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
export default function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="w-full flex justify-center py-5">
      {!isAuthenticated && (
        <button
          className="text-3xl bg-green-500 px-2 py-1 rounded-lg"
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>
      )}
    </div>
  );
}
