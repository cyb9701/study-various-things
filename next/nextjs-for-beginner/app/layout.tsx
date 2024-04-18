import React from "react";
import Navigation from "@/components/navigation";

export const metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loadding...",
  },
  description: "The best movies ont the best framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
