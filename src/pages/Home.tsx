import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="bg-[#DDDDDD] px-10 min-h-screen">
			<div className="mx-auto w-56 md:w-96 h-28 md:h-48 text-center pt-14">
				<p className=" text-[#240D57] font-bold font-helvetica text-4xl md:text-6xl">
					Imagine if{" "}
					<span className="text-transparent font-bold font-helvetica bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
						Snapchat
					</span>{" "}
					had events.
				</p>
			</div>
			<div className="mx-auto text-center pt-20 md:pt-28 md:w-2/3">
				<p className=" font-helvetica text-[#4F4F4F] text-base md:text-2xl font-light">
					Easily host and share events with your friends across any social
					media.
				</p>
			</div>
			<div className=" mx-auto w-40 h-72 md:w-80 md:h-96 lg:w-[440px] lg:h-[775px] pt-6">
				<img src={"./landing.png"} alt="event" />
			</div>
			<div
				onClick={() => navigate("/create")}
				className="bg-gradient-to-r from-[#8456EC] to-[#E87BF8] grid justify-center  w-44 md:w-80 h-12 md:h-14  mt-12 md:mt-48 mx-auto rounded-lg content-center"
			>
				<span className=" cursor-pointer text-white font-helvetica font-bold text-base md:text-xl h-full text-center">
					🎉 Create my event
				</span>
			</div>
		</div>
	);
}
