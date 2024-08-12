"use effect"
import React from "react";

export default function ImageSection() {
    return (
        <div className="image w-full backdrop-blur-md bg-white/30 ... rounded-lg font-serif">
           <div className="heading  text-center">
           <h2 className=" text-4xl text-zinc-900  font-abold  underline font-serif">Benefits of Our Mala Making Machine
           </h2>
            </div>
                
                <div className="benefits w-full flex flex-wrap justify-between">
                <div className=" px-6 py-4 bg-transparent rounded-lg">
                    <ul>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-zinc-800"> Enhance Efficiency</h3>
                        <li className="mb-3 text-xl text-green-900" >Dramatically reduces production time compared to manual methods, increasing output and profitability.
                        </li>
                        <li className="mb-3  text-xl text-green-900"> Reduced Labor Costs: Minimizes the need for manual labor in flower production</li>
                   </ul>
                </div>

                <div className=" px-6 py-4 bg-transparent rounded-lg">
                    <ul>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-zinc-800">Educational Opportunities</h3>
                        <li className="mb-3 text-xl text-green-900" >Provides hands-on learning opportunities for plant biology and related fields.</li>
                        <li className="mb-3  text-xl text-green-900">Exposure to advanced agricultural technology can inspire students to pursue careers in fields like agricultural engineering, biotechnology, environmental science, or horticulture.</li>
                    </ul>
                </div>

                <div className=" px-6 py-4 bg-transparent rounded-lg">
                    <ul>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-zinc-800">Cost Savings</h3>
                        <li className="mb-3 text-xl text-green-900" >Lower Production Costs: Reduces expenses associated with manual cultivation, such as labor and land.</li>
                        <li className="mb-3  text-xl text-green-900">Economies of Scale: Enables bulk production which can lower per-unit costs.</li>
                    </ul>
                </div>
                <div className=" px-6 py-4 bg-transparent rounded-lg">
                    <ul>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-zinc-800">Enhanced Customization</h3>
                        <li className="mb-3 text-xl text-green-900" >Variety Options: Allows for the production of various flower types and colors according to demand.</li>
                        <li className="mb-3  text-xl text-green-900">Custom Designs: Can produce flowers in specific patterns or designs for special events.</li>
                    </ul>
                </div>

               <div className=" px-6 py-4 bg-transparent rounded-lg">
                    <ul>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-zinc-800">Innovation and Technology</h3>
                        <li className="mb-3 text-xl text-green-900" >Advanced Techniques: Incorporates cutting-edge technology for better growth and production methods.</li>
                        <li className="mb-3  text-xl text-green-900">Research and Development: Drives innovation in the floral industry, potentially leading to new flower varieties and cultivation methods.</li>
                    </ul>
                </div>
            </div>
            </div>
       

    )
};