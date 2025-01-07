import { SignIn } from "@clerk/clerk-react";
import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh - 80px)] z-10">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default Login;
