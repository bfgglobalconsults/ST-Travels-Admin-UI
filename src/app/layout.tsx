import { Providers } from "@/redux-toolkit/provider";
import "../../public/assets/scss/app.scss";

import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import ReactQueryProvider from "./(MainLayout)/lib/ReactQueryProvider";
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles

export const metadata: Metadata = {
  title: "ST Travels and Consulting Admin",
  description: "ST Travels and Consulting Admin Panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
