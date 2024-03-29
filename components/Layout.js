import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Banner from "./Banner";
export default function Layout({ children }) {
  return (
    <div className="page-layout">
      <div>
        <Nav /> 
        {children}
      </div>
    </div>
  );
}
