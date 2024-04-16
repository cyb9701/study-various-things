import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      &copy; about-us layout
    </div>
  );
}
