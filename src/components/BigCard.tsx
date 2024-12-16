export default function BigCard() {
  return (
    <div className="flex flex-row bg-gradient-to-bl from-[#2B2B2B4B] to-[#5F9FFF39] rounded-xl m-2 w-full">
  <div className="flex flex-col pl-6 pt-3">
    <h1 className="text-2xl font-bold font-sans text-left mb-2">
      Refer Friends
    </h1>
    <p className="text-left mb-4 text-sm">
      Let the whole world know about people here and earn more! Receive passive income for each player who follows your link. Create your own campaign for unique referral link.
    </p>
    <div className="flex flex-row items-center gap-4 mb-6">
      <button className="bg-white hover:bg-slate-100 text-black font-bold py-2 px-4 rounded-lg">
        2
      </button>
      <p className="font-medium">
        Friends referred
      </p>
    </div>
    <div className="border-2 border-gray-400 rounded-lg px-4 py-2 flex flex-row items-center gap-4">
        <img src="images/link.svg" alt="Link" />
      <a href="#" className="text-white hover:text-slate-100 font-bold">
        platform.com/link/415rebfiaeubf
      </a>
    </div>
  </div>
  <div className="flex flex-col items-end justify-center p-8 w-1/2">
    <img src="images/coin-box.png" alt="Boxes" className="w-full min-w-[148px]" />
  </div>
</div>
  )
}