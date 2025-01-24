import type { Metadata } from "next";
import InfoRow from "../common/components/InfoRow/InfoRow";
import Discover from "./components/Discover";
import Hero from "./components/Hero";
import Interaction from "./components/Interaction";
import QualitiesRow from "./components/QualitiesRow";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

const HomePage = () => {
  return (
    <main className="flex flex-col gap-y-16">
      <Hero />
      <Discover />
      <QualitiesRow />
      <InfoRow
        title="Everything about lab-grown diamonds"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eaque hic, culpa dolores, tenetur ut sint velit et harum facilis consequuntur voluptas rem blanditiis quas dolorum quo provident aperiam. Ducimus, sapiente similique laboriosam exercitationem perferendis eligendi cumque unde. Eligendi, rerum?"
        buttonText="Learn More"
      />
      <InfoRow
        title="Everything about lab-grown diamonds"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eaque hic, culpa dolores, tenetur ut sint velit et harum facilis consequuntur voluptas rem blanditiis quas dolorum quo provident aperiam. Ducimus, sapiente similique laboriosam exercitationem perferendis eligendi cumque unde. Eligendi, rerum?"
        buttonText="Learn More"
        reverse
      />
      <Interaction />
    </main>
  );
};

export default HomePage;
