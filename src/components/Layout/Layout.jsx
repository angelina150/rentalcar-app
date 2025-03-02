import { Suspense } from "react";
import { Navigation } from "../Navigation/Navigation.jsx";

export const Layout = ({ children }) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Navigation />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
