"use effect"
import React from "react";

export default function ImageSection() {
    return (
        <div className="image w-full bg-[#e6e75e] rounded-lg">
            <div className="text-center">
                <h2 className=" text-4xl text-zinc-900 font-extrabold tracking-tight py-2 underline font-serif">BENEFITS</h2>
            </div>

            <div className="flex flex-wrap  gap-3 ">

                <div className="p-2 bg-transparent rounded-lg dark:bg-gray-800">
                    <ul>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-zinc-700 dark:tex-zinc-700"> Increased Efficiency</h3>
                        <li className="mb-3 text-xl text-green-900 dark:tex-zinc-700" >Consistent Output: Produces a high volume of flowers quickly and consistently.</li>
                        <li className="mb-3  text-xl text-green-900 dark:tex-zinc-700"> Reduced Labor Costs: Minimizes the need for manual labor in flower production</li>
                   </ul>
                </div>

                <div className="p-2 bg-transparent rounded-lg dark:bg-gray-800">
                    <ul>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-zinc-700 dark:tex-zinc-700"> Increased Efficiency</h3>
                        <li className="mb-3 text-xl text-green-900 dark:tex-zinc-700" >Consistent Output: Produces a high volume of flowers quickly and consistently.</li>
                        <li className="mb-3  text-xl text-green-900 dark:tex-zinc-700"> Reduced Labor Costs: Minimizes the need for manual labor in flower production</li>
                    </ul>
                </div>

                <div className="p-2 bg-transparent rounded-lg dark:bg-gray-800">
                    <ul>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-zinc-700 dark:tex-zinc-700">Cost Savings</h3>
                        <li className="mb-3 text-xl text-green-900 dark:tex-zinc-700" >Lower Production Costs: Reduces expenses associated with manual cultivation, such as labor and land.</li>
                        <li className="mb-3  text-xl text-green-900 dark:tex-zinc-700">Economies of Scale: Enables bulk production which can lower per-unit costs.</li>
                    </ul>
                </div>
                <div className="p-2 bg-transparent rounded-lg dark:bg-gray-800">
                    <ul>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-zinc-700 dark:tex-zinc-700">Enhanced Customization</h3>
                        <li className="mb-3 text-xl text-green-900 dark:tex-zinc-700" >Variety Options: Allows for the production of various flower types and colors according to demand.</li>
                        <li className="mb-3  text-xl text-green-900 dark:tex-zinc-700">Custom Designs: Can produce flowers in specific patterns or designs for special events.</li>
                    </ul>
                </div>

               <div className="p-2 bg-transparent rounded-lg dark:bg-gray-800">
                    <ul>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-zinc-700 dark:tex-zinc-700">Innovation and Technology</h3>
                        <li className="mb-3 text-xl text-green-900 dark:tex-zinc-700" >Advanced Techniques: Incorporates cutting-edge technology for better growth and production methods.</li>
                        <li className="mb-3  text-xl text-green-900 dark:tex-zinc-700">Research and Development: Drives innovation in the floral industry, potentially leading to new flower varieties and cultivation methods.</li>
                    </ul>
                </div>
            </div>
        </div>

    )
};