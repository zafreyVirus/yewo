import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/BreadCrumbs";
import { Inter } from 'next/font/google';
import 'boxicons/css/boxicons.min.css';
import HeaderSection from "../../components/Header";

const inter = Inter({
  subsets: ['latin'],

});

export const metadata = {
  title: "YEWO | A non-profit Youth organization",
  description: "YEWO is a non-profit Youth organization dedicated to empowering and inspiring a new generation of visionary entrepreneurs in Malawi equipped with essential green skills for sustainable development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header/>
        {/* <Breadcrumbs/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
