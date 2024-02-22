import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/common/component/navbar/Navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="w-full flex justify-center items-center">
          <Navbar />
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
