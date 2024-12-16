import BigCard from "./BigCard";
import SmallCard from "./SmallCard";

export default function HeadBanner() {
  return (
    <div className="flex flex-row">
        <BigCard />
        <SmallCard
        icon="./src/assets/gift-box.png"
        percentage="15%"
        title="From Pure Profit"
        description="15% from platform's house edge will be paid your Referrals winning bet."
      />
      <SmallCard
        icon="./src/assets/trophy.png"
        percentage="2.5%"
        title="From all Winnings"
        description="2.5% from all winnings will be paid to your Referrals winning bet."
      />
      <SmallCard
        icon="./src/assets/medal.png"
        percentage="1.5%"
        title="From deposit"
        description="1.5% from depositing on our platform will be paid back in your account."
      />
    </div>
  )
}