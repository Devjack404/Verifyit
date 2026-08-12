import { type ReactNode } from "react"
import ShieldIcon from "../icons/ShieldIcon"

export interface WhyCardProps {
    icon : ReactNode,
    title : string,
    description : string,
}



export default function WhyCard () {
    return (
        <section className="py-10 px-10 gap-10 flex">
            <div className="flex-col">
                <h2 className="text-left text-3xl font-medium text-gray-900">Built for the modern web, designed for humans</h2>
                
                
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