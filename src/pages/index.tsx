import Layout from "@/components/Layout";
// import Head from "next/head";
import { FC } from "react";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

const Home: FC = () => {
  return (
    <Layout
      title="Home"
      description='My Site Snipes'
    >
      <h1>Snipes</h1>
    </Layout>
  );
}

export default Home;