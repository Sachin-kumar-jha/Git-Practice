"use client"

import React from "react"
import Image from "next/image"
import About from "../public/AboutPagephoto.jpg"
export default function AboutSection(){
    return(
<section className=" backdrop-blur-md bg-white/30 ... mt-5">
    <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-light  font-serif text-gray-900 sm:text-4xl">About Us</h2>
                <p className="mt-4 text-gray-600 font-serif text-lg">Autoflora is at the forefront of technological innovation in the sacred art of mala making. Our state-of-the-art machine seamlessly integrates tradition with modernity, offering unparalleled precision and efficiency in crafting exquisite malas.
Designed with a deep understanding of the cultural significance of malas, our machine meticulously handles each flower, ensuring the highest quality and consistency. From delicate flower insertion to intricate threading and knotting, every step is executed with unparalleled precision.
By automating the laborious aspects of mala making, we empower artisans to focus on creativity and design, elevating the overall artistry of this sacred tradition. Our mission is to make malas accessible to a wider audience while preserving the cultural heritage associated with this beautiful art form.
With a commitment to quality, efficiency, and innovation,Autoflora is dedicated to redefining the future of mala making.</p>
                <div className="mt-8">
                    <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span className="ml-2">&#8594;</span></a>
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <Image src={About} alt="About Us Image" className="object-cover rounded-lg shadow-md" width={500} height={500}/>
            </div>
        </div>
    </div>
</section>
    )
}