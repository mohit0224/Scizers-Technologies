"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// import images
import image1 from "../../public/images/image-1.png";
import image2 from "../../public/images/image-2.jpg";
import image3 from "../../public/images/image-3.jpg";
import image4 from "../../public/images/image-4.jpg";
import image5 from "../../public/images/image-5.jpg";
import Image from "next/image";

const Slider = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
		<>
			<div>
				<Swiper
					style={{
						"--swiper-navigation-color": "#fff",
						"--swiper-pagination-color": "#fff",
					}}
					spaceBetween={10}
					navigation={true}
					loop={true}
					thumbs={{ swiper: thumbsSwiper }}
					modules={[FreeMode, Navigation, Thumbs]}
					className="mySwiper2 w-full h-52 sm:h-64 md:h-[400px] lg:h-[500px]"
				>
					<SwiperSlide className="rounded-xl overflow-hidden">
						<Image
							src={image1}
							alt="image1"
							className="w-full h-full object-cover"
						/>
					</SwiperSlide>
					<SwiperSlide className="rounded-xl overflow-hidden">
						<Image
							src={image2}
							alt="image1"
							className="w-full h-full object-cover"
						/>
					</SwiperSlide>
					<SwiperSlide className="rounded-xl overflow-hidden">
						<Image
							src={image3}
							alt="image1"
							className="w-full h-full object-cover"
						/>
					</SwiperSlide>
					<SwiperSlide className="rounded-xl overflow-hidden">
						<Image
							src={image4}
							alt="image1"
							className="w-full h-full object-cover"
						/>
					</SwiperSlide>
					<SwiperSlide className="rounded-xl overflow-hidden">
						<Image
							src={image5}
							alt="image1"
							className="w-full h-full object-cover"
						/>
					</SwiperSlide>
				</Swiper>

				<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={12}
					slidesPerView={4}
					freeMode={true}
					loop={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					className="mySwiper mt-3 h-16 sm:h-28 md:h-40"
				>
					<SwiperSlide className="rounded-xl overflow-hidden opacity-40">
						<Image
							src={image1}
							alt="image1"
							className="w-full h-full object-cover"
						/>
					</SwiperSlide>
					<SwiperSlide className="rounded-xl overflow-hidden opacity-40">
						<Image
							src={image2}
							alt="image1"
							className="w-full h-full object-cover"
						/>
					</SwiperSlide>
					<SwiperSlide className="rounded-xl overflow-hidden opacity-40">
						<Image
							src={image3}
							alt="image1"
							className="w-full h-full object-cover"
						/>
					</SwiperSlide>
					<SwiperSlide className="rounded-xl overflow-hidden opacity-40">
						<Image
							src={image4}
							alt="image1"
							className="w-full h-full object-cover"
						/>
					</SwiperSlide>
					<SwiperSlide className="rounded-xl overflow-hidden opacity-40">
						<Image
							src={image5}
							alt="image1"
							className="w-full h-full object-cover"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};

export default Slider;
