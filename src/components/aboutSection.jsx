"use client"

import React from "react"
import Image from "next/image"
export default function AboutSection(){
    return(
<section className=" backdrop-blur-md bg-white/30 ... mt-8  shadow-md rounded-lg[#f9fb71]">
    <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-light   text-gray-900 sm:text-4xl">About Us</h2>
                <p className="mt-4 text-gray-600  text-lg">
         Autoflora is at the forefront of technological innovation in the sacred art of mala making. Our state-of-the-art machine seamlessly integrates tradition with modernity,
         offering unparalleled precision and efficiency in crafting exquisite malas.
         Designed with a deep understanding of the cultural significance of malas,
         our machine meticulously handles each flower, ensuring the highest quality and consistency. 
         From delicate flower insertion to intricate threading and knotting, every step is executed with unparalleled precision.
         By automating the laborious aspects of mala making, we empower artisans to focus on creativity and design, 
         elevating the overall artistry of this sacred tradition.
         Our mission is to make malas accessible to a wider audience while preserving the cultural heritage associated with this beautiful art form.
         With a commitment to quality, efficiency,
         and innovation,Autoflora is dedicated to redefining the future of mala making.
         </p>
            </div>
            <div className="max-w-lg  md:mt-0">
            <h2 className="text-3xl font-light   text-gray-900 sm:text-4xl">Our Story</h2>
                <p className="mt-4 text-gray-600  text-lg">For generations, skilled artisans have meticulously crafted malas, each bead strung with devotion. However, the challenges of manual production, including time-consuming processes, inconsistent quality, and rising labor costs, threatened to diminish this cherished tradition.
Recognizing the need for a  modern solution. Through years of research and development, we created a machine that not only automates the process but also preserves the essence of traditional mala making.
Our mission is to empower artisans, enhance efficiency, and ensure the continuity of this sacred art form. By combining human ingenuity with technological precision, we offer a sustainable and scalable solution for the future of mala production.</p>
            </div>
        </div>
    </div>
</section>
    )
}