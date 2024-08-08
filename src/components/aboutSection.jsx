"use client"

import React from "react"
import Image from "next/image"
export default function AboutSection(){
    return(
<section className=" backdrop-blur-md bg-white/30 ... mt-5">
    <div className="container mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-light  font-serif text-gray-900 sm:text-4xl">About Us</h2>
                <p className="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                    eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                    Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                    malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                <div className="mt-8">
                    <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span className="ml-2">&#8594;</span></a>
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <Image src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9mZmljZSUyMGltYWdlcyUyMGZvciUyMGZsb3dlciUyMHRoZW1lfGVufDB8fDB8fHww" alt="About Us Image" className="object-cover rounded-lg shadow-md" width={500} height={500}/>
            </div>
        </div>
    </div>
</section>
    )
}