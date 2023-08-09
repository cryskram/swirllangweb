type CardType = {
  feature: string;
  description: string;
  link?: string;
  // icon?: React.ReactNode;
};

export default function Card({ feature, description, link }: CardType) {
  return (
    <div className="m-3 bg-slate-400/70 rounded-xl">
      <div className="p-2 flex flex-col items-center border-slate-900">
        <h1 className="text-2xl font-bold ">{feature}</h1>
        <h1 className="">{description}</h1>
        <h1>{link}</h1>
        {/* <main>{icon}</main> */}
      </div>
    </div>
  );
}
