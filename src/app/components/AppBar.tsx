import { GoogleLoginButton } from "./GoogleButton";

export const AppBar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <GoogleLoginButton />
    </header>
  );
};
