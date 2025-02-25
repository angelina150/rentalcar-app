import { Suspense } from "react";
import { Navigation } from "../Navigation/Navigation.jsx";

export const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <Navigation />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
