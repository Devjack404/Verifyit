import { type ReactNode } from "react"
import ShieldIcon from "../icons/ShieldIcon"

export interface WhyCardProps {
    icon : ReactNode,
    title : string,
    description : string,
}

export const WhyCardData : WhyCardProps[] = [
    {
        icon : <i className="fi fi-rr-smile-beam text-blue-800"></i>,
        title : "Easy to Understand",
        description : "No complex jargon. We provide clear, plain-language insights."
    },
    {
        icon : <i className="fi fi-rr-transparency text-blue-800"></i>,
        title : "Transparent",
        description : "We show our work. See exactly why a score was assigned."
    },
    {
        icon : <i className="fi fi-rr-lock text-blue-800"></i>,
        title : "Privacy Friendly",
        description : "Your searches are private. We never track your browsing history."
    },
    {
        icon : <i className="fi fi-rr-head-side-thinking"></i>,
        title : "Educational",
        description : "Improve your security IQ with every single verification."
    },
]





export default function WhyCard () {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 px-10 ">
            <div className="flex-col mt-10">
                <h2 className="text-left text-3xl font-medium text-gray-900">Built for the modern web, designed for humans</h2>
                
                <div className="mt-8 grid grid-cols-2 gap-5 ">
                    {WhyCardData.map((card) => (
                        <div key={card.title} className="bg-gray-100 p-6 rounded-2xl">
                            <div className="mb-4 text-blue-600">
                                {card.icon}
                            </div>

                            <div>
                                <div className="font-semibold text-lg text-gray-900">
                                    {card.title}
                                </div>

                                <p className="mt-2 text-gray-600 leading-relaxed">
                                    {card.description }
                                </p>
                            </div>
                        </div>
                    ))} 
 

                </div>
               
            </div>

            <div className="flex items-center">
                <div className="rounded-[2rem] bg-blue-50 p-4">
                   <img 
                       src="https://i.pinimg.com/1200x/81/5e/06/815e06f77247d1c8fc341ba3b8552cfc.jpg" 
                       alt="Web Analyze Ilustration"
                       className="w-full rounded-2xl"
                    />  
                </div>
           </div>
        </section>
    )
    
}