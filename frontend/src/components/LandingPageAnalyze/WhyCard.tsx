import { type ReactNode } from "react"
import ShieldIcon from "../icons/ShieldIcon"

export interface WhyCardProps {
    icon : ReactNode,
    title : string,
    description : string,
}

export const WhyCardData : WhyCardProps[] = [
    {
        icon : <ShieldIcon />,
        title : "Easy to Understand",
        description : "No complex jargon. We provide clear, plain-language insights."
    },
    {
        icon : <ShieldIcon />,
        title : "Transparent",
        description : "We show our work. See exactly why a score was assigned."
    },
    {
        icon : <ShieldIcon />,
        title : "Privacy Friendly",
        description : "Your searches are private. We never track your browsing history."
    },
    {
        icon : <ShieldIcon />,
        title : "Educational",
        description : "Improve your security IQ with every single verification."
    },
]





export default function WhyCard () {
    return (
        <section className="py-10 px-10 gap-10 flex">
            <div className="flex-col">
                <h2 className="text-left text-3xl font-medium text-gray-900">Built for the modern web, designed for humans</h2>
                
                <div className="mt-8 space-y-6">
                    {WhyCardData.map((card) => (
                        <div key={card.title} className="flex gap-4">
                            <div>
                                {card.icon}
                            </div>

                            <div>
                                <div className="font-medium text-lg">
                                    {card.title}
                                </div>

                                <p className="text-gray-600">
                                    {card.description }
                                </p>
                            </div>

                        </div>
                    ))} 
 

                </div>
               
            </div>

            <div>
                <img 
                    src="https://i.pinimg.com/1200x/81/5e/06/815e06f77247d1c8fc341ba3b8552cfc.jpg" 
                    alt="Web Analyze Ilustration"
                    className="w-full rounded-2xl"
                >
                </img>  
            </div>


        
        </section>
    )
    
}