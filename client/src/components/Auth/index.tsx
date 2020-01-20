import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
const Auth = () => {
  const auth = useAuth0();
  let loading, user, isAuthenticated;
  let loginWithRedirect: Function;
  let logout: Function;
  if (auth) {
    loading = auth.loading;
    user = auth.user;
    isAuthenticated = auth.isAuthenticated;
    loginWithRedirect = auth.loginWithRedirect;
    logout = auth.logout;
  }
  return (
    <header className="flex items-center justify-between flex-wrap bg-indigo-900 shadow-md p-6">
      {/* <h4 className=" text-3xl text-white">Admin</h4> */}

      <button
        className="login"
        onClick={() =>
          window.open("http://localhost:3000/admin" || "https://whispering-shore-84512.herokuapp.com/admin")
        }
      ></button>
      {(!isAuthenticated || loading) && (
        <button
          className="text-white text-xl"
          onClick={() => loginWithRedirect({})}
        >
          Log in
        </button>
      )}

      {isAuthenticated && (
        <div className="flex">
          <h2 className="text-l text-white mr-4 my-auto">
            Welcome, {user.given_name}!
          </h2>
          <button className="text-white text-xl" onClick={() => logout()}>
            Log out
          </button>
        </div>
      )}
    </header>
  );
};

export default Auth;