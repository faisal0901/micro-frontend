import Head from "next/head";
import Link from "next/link";
import axios from "src/config/axios";
import Circle from "public/images/circle-accent-1.svg";
import Header from "src/pages/parts/header";
import Hero from "src/pages/parts/Hero";
import Clients from "src/pages/parts/Clients";
import ListCategories from "src/pages/parts/ListCategories";
import ListCourse from "src/pages/parts/ListCourse";
import Footer from "src/pages/parts/Footer";
import Course from "src/constant/api/course";
function Home({ data }) {
  return (
    <>
      <Head>
        <title>BWA MICRO</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <section className="header-clipping pt-8 ">
          <Circle className="absolute left-0 bottom-0"></Circle>
          <div className="sunshine"></div>
          <div className="container mx-auto">
            <Header></Header>
            <Hero></Hero>
          </div>
        </section>
        <section className="container mx-auto pt-24">
          <Clients />
        </section>
        <section className="container mx-auto pt-24">
          <ListCourse data={data} />
        </section>
        <section className="container mx-auto pt-24">
          <ListCategories data={data} />
        </section>
        <section className="mt-24 py-12 bg-indigo-900">
          <Footer />
        </section>
      </main>
    </>
  );
}
Home.getInitialProps = async () => {
  try {
    const data = await Course.all();
    return { data: data.data };
  } catch (error) {
    console.log(error);
  }
};
export default Home;
