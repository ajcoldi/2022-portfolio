import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="page-layout">
      <Nav />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
