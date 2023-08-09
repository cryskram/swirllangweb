import { Fa500Px } from "react-icons/fa";
import Card from "./card";
import { data } from "@/lib/why.data";

const Why = () => {
  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <div>
        <h1 className="font-semibold text-4xl underline underline-offset-4">
          Why Swirl?
        </h1>
      </div>
      <div className="mt-8 w-4/5 grid grid-cols-3 auto-cols-fr justify-center">
        {data.reasons.map((i) => (
          <div key={i.desc}>
            <Card feature={i.title} description={i.desc} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
