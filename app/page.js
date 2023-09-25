import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Product from "@/components/Product/Product";
import Advert from "@/components/Advert/Advert";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Quotes from "@/components/Quotes/Quotes";
import Reviews from "@/components/Reviews/Reviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <Product />
      <Advert
        image={"/assets/interior.png"}
        title="We Provide the Best Quality Products"
        text="Lorem ipsum dolor sit amet consectetur. Aliquam est ut arcu sit
            senectus sem gravida at. Tellus gravida convallis lacus in. In vitae
            risus massa viverra malesuada mauris enim volutpat faucibus.
            Consequat turpis quam pulvinar eu nunc dictum vitae nec."
        styles="advert"
      />
      <ChooseUs />
      <Advert
        image={"/assets/outdoor.png"}
        title="High Quality Materials"
        text="Lorem ipsum dolor sit amet consectetur. Aliquam est ut arcu sit
            senectus sem gravida at. Tellus gravida convallis lacus in. In vitae
            risus massa viverra malesuada mauris enim volutpat faucibus.
            Consequat turpis quam pulvinar eu nunc dictum vitae nec."
        styles="advert__reverse"
      />
      {/* <Reviews /> */}
      <Quotes />
    </main>
  );
}
