interface SmallCardProps {
    icon: string;
    percentage: string;
    title: string;
    description: string;
}

export default function SmallCard({ icon, percentage, title, description }: SmallCardProps) {
    return (
        <div className="relative sm:maxw-[345px] w-full bg-gradient-to-r from-[rgba(95,159,255,0.22)] to-[rgba(43,43,43,0.29)] border border-[rgba(255,255,255,0.04)] backdrop-filter backdrop-blur-[16.5px] rounded-[13px] m-2">
            <div className="flex flex-col gap-4 p-4">
                <div className="flex sm:flex-col flex-row-reverse items-center gap-4 w-full">
                    <div className="w-[114px] h-[124px] m-0 p-0 justify-items-center">
                        <img src={icon} alt="Gift Box" className="" />
                    </div>

                    <div className="w-full sm:text-center text-left">
                        <div className="text-[30px] font-bold text-white leading-[140%] p-0 m-0">{percentage}</div>

                        <div className="text-[14px] font-semibold text-white leading-[140%] p-0 m-0">{title}</div>

                        <div className="text-[12px] font-normal text-[rgba(255,255,255,0.6)] leading-[140%] w-full p-0 m-0">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}