import { Fa500Px } from "react-icons/fa";
import Card from "./card";

const Why = () => {
  return (
    <div className="mt-20 flex flex-col justify-center">
      <div>
        <h1 className="font-semibold text-4xl underline underline-offset-4">
          Why Swirl?
        </h1>
      </div>
      <div>
        <Card
          feature="Performance"
          description="Swirl compiles to C++, never letting you down on performance. Sit back and enjoy the performance."
        />
      </div>
    </div>
  );
};

export default Why;
