import Divider from "@/components/divider";
import Intro from "@/components/intro";
import Why from "@/components/why";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Intro />
      {/* <Divider /> */}
      <Why />
    </div>
  );
}
