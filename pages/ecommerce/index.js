import Head from "next/head";
import Image from "next/image";
import Layout from "../../layouts/Layout";
import Sidebar from "../../layouts/Sidebar";
import Header from "../../layouts/EcommerceHeader";
import { useRouter } from "next/router";
import Ecommerce from "../../e-commerce/Index";

const EcommercePage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Kanakku</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Ecommerce />
    </div>
  );
};

EcommercePage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default EcommercePage;
