type CardType = {
  feature: string;
  description: string;
  link?: string;
  // icon?: React.ReactNode;
};

export default function Card({ feature, description, link }: CardType) {
  return (
    <div>
      <h1>{feature}</h1>
      <h1>{description}</h1>
      <h1>{link}</h1>
      {/* <main>{icon}</main> */}
    </div>
  );
}
