import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders mainHeader={"ABOUT US"} />
        <div class="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>Welcome to my website! Allow me to introduce myself:</p>
          <p>
            I'm Abdulaziz Faham, a passionate Software Engineering graduate from
            Üsküdar University.
          </p>
          <p>
            My mission is simple yet exciting: to revolutionize your pizza
            experience. Whether you're craving a slice delivered to your
            doorstep with just a few clicks, or you're a pizzeria owner seeking
            a seamless system to manage your orders and expand your customer
            base, I've got you covered.
          </p>
          <p>
            With this innovative website, ordering pizza has never been easier
            or faster. And for pizzeria owners, it offers a comprehensive
            management system designed for effortless operation and increased
            profitability.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders mainHeader={"CONTACT US"} />
        <div className="mt-8">
          <a
            className="text-base underline text-gray-500"
            href="tel:+5399293777"
          >
            +49 155 10425715
            <br />
            Abdulazizfahham@outlook.com
          </a>
        </div>
      </section>
    </>
  );
}
