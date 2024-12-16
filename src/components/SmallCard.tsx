export default function SmallCard({ icon, percentage, title, description }) {
    return (
      <div className="relative w-[215px] bg-gradient-to-r from-[rgba(95,159,255,0.22)] to-[rgba(43,43,43,0.29)] border border-[rgba(255,255,255,0.04)] backdrop-filter backdrop-blur-[16.5px] rounded-[13px] m-2">
        <div className="flex flex-col items-center w-[184px] gap-4 p-4">
          <div className="flex flex-col items-center w-full">
            <div className="w-[114px] h-[124px] m-0 p-0 justify-items-center">
                <img src={icon} alt="Gift Box" className="" />
            </div>
            <div className="text-[30px] font-bold text-white leading-[140%] p-0 m-0">{percentage}</div>
            <div className="text-[14px] font-semibold text-white leading-[140%] p-0 m-0">{title}</div>
          </div>
          <div className="text-[12px] font-normal text-[rgba(255,255,255,0.6)] leading-[140%] text-center w-full p-0 m-0">
            {description}
          </div>
        </div>
      </div>
    );
  }