"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Slider from "@/components/Slider";
import { featureAmenities, howWeWork } from "@/utils/data";

import { RxHamburgerMenu } from "react-icons/rx";

const Page = () => {
	return (
		<>
			<section className="w-screen min-h-screen bg-[url('/images/heroImg.jpg')] bg-cover bg-no-repeat bg-center md:bg-[center_-135px] relative">
				<div className="relative top-0 left-0 w-full min-h-screen  bg-gradient-to-r from-[#062349] to-[rgba(23,23,23,0.4)] opacity-80 pb-5">
					<div className="relative max-w-6xl  mx-auto px-4 ">
						<nav className="py-5 md:py-12 flex items-center justify-between">
							<Image src={logo} alt="logo" />
							<button
								className="hidden md:block uppercase py-3 px-10 border-2 border-primaryColor rounded-md text-sm font-semibold text-primaryTextColor
								hover:scale-105 transition-all duration-300 ease
							"
							>
								enquire now
							</button>

							<button className="md:hidden text-xl text-primaryTextColor hover:scale-105 transition-all duration-300 ease">
								<RxHamburgerMenu />
							</button>
						</nav>
						<div className="md:flex">
							<div className="flex-1 mt-5 md:mt-20">
								<h1 className="text-4xl lg:text-5xl text-primaryTextColor">
									HARBOUR LIGHTS
									<br />
									DE <span className="text-primaryColor">GRESOGONO</span>
								</h1>

								<p className="my-4 text-[16px] sm:text-xl md:text-2xl font-medium text-primaryTextColor ">
									1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
								</p>

								<ul className="mt-5 md:mt-12">
									<li className="w-[305px] text-sm p-3 my-2 bg-black/40 text-primaryTextColor border-l-4 border-primaryColor ">
										Rental Returns of <strong>UPTO 11%**</strong>
									</li>
									<li className="w-[305px] text-sm p-3 my-2 bg-black/40 text-primaryTextColor border-l-4 border-primaryColor ">
										Capital Appreciation of <strong>UPTO 32%**</strong>
									</li>
								</ul>
							</div>

							<div className=" flex-1 ">
								<div className="w-full h-full flex items-end justify-center md:justify-end  md:m-0">
									<div className="w-[306px] rounded-xl pt-10 bg-black/70">
										<div className="text-primaryTextColor px-6">
											<p className="tracking-wide font-light">
												PRICING STARTS FROM
											</p>
											<p className="text-5xl font-medium my-1">$ 425,000</p>
											<p className="text-2xl my-2">AED 1.3 Million</p>
											<button className="w-full px-10 py-3 mt-4 mb-8 text-primaryTextColor bg-primaryColor rounded-md uppercase hover:scale-105 transition-all duration-300 ease">
												get a presentation
											</button>
										</div>
										<div className="px-6 py-4 border-t-2 border-primaryTextColor/40 bg-primaryColor/10">
											<p className="text-[13px] text-primaryTextColor">
												Get an Experts Presentation of Real Estate in Dubai for
												Life and investment
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="bg-bgPrimary ">
					<div className="max-w-6xl px-4 mx-auto grid grid-cols-2 md:grid-cols-4">
						{howWeWork.map((items, i) => (
							<div
								className="my-8 flex justify-center items-center flex-col text-secondaryTextColor"
								key={i}
							>
								<Image
									src={items.image}
									alt="book-image"
									className="w-[48px] h-auto"
								/>
								<p className="mt-4">{items.title}</p>
								<p className="text-2xl sm:text-3xl font-medium">{items.dec}</p>
							</div>
						))}
					</div>
				</div>

				<div>
					<div className="max-w-6xl px-4 mx-auto mt-14 text-secondaryTextColor flex flex-col items-center">
						<h1 className="text-3xl sm:text-4xl font-light whitespace-pre-wrap text-center">
							HARBOUR
							<br />
							LIGHTS
						</h1>
						<p className="mt-2 text-[10px]">de GRISOGONO</p>
						<p className="leading-[0.2] text-[6px]">GENEVE</p>
						<div className="mt-10 max-w-3xl mx-auto text-center">
							<p className="text-3xl sm:text-4xl font-medium">
								FEATURES & AMENITIES
							</p>
							<p className="my-4 text-black">
								Harbour Lights beautifully honours maritime voyages while
								embracing an opulent seafront lifestyle. Its maritime-inspired
								amenities provide an unmatched seaside experience, offering a
								life of tranquility and bliss.
							</p>
						</div>
					</div>
				</div>

				<div className="my-12 max-w-6xl mx-auto px-4 ">
					<div className="text-secondaryTextColor flex flex-wrap justify-evenly md:justify-between gap-y-4 mb-4">
						{featureAmenities.map((data, i) => (
							<div
								className="relative flex flex-wrap flex-col items-center"
								key={i}
							>
								<div className="w-36 h-36 sm:w-40 sm:h-40 sm md:w-52 md:h-52 ">
									<Image
										src={data.image}
										alt="pool"
										className="w-full h-auto object-cover"
									/>
								</div>

								<div className="w-[160px] sm:w-[190px] md:w-[227px] h-[120px] sm:h-[140px] md:h-[157px] rounded-2xl mt-[-65px] sm:mt-[-73px] md:mt-[-95px] flex flex-col justify-end shadow-2xl ">
									<h5 className="text-center whitespace-pre-wrap text-sm font-semibold mb-4 px-2">
										{data.title}
									</h5>
								</div>
							</div>
						))}
					</div>

					<div className="w-full flex justify-end mt-8">
						<p className="text-[10px]">
							*T&Cs apply | ** Based on similar branded projects in the last 2
							years. Source 1 | Source 2
						</p>
					</div>
				</div>
			</section>

			<section className="p-4">
				<div className="max-w-6xl mx-auto">
					<div className="buttons w-full flex justify-center md:justify-end gap-2 ">
						<button className="py-4 px-12 text-sm font-semibold text-primaryTextColor bg-secondaryTextColor uppercase rounded-md hover:scale-105 transition-all duration-300 ease">
							exteriors
						</button>
						<button className="py-4 px-12 text-sm font-semibold text-secondaryTextColor border border-secondaryTextColor uppercase rounded-md hover:scale-105 transition-all duration-300 ease">
							exteriors
						</button>
					</div>

					<div className="mt-8 mb-4 w-full">
						<Slider />
					</div>
				</div>
			</section>

			<footer className="text-center text-sm text-primaryTextColor py-8 bg-footer">
				<p>© DAMAC Copyright 2024, All rights reserved.</p>
			</footer>
		</>
	);
};

export default Page;
