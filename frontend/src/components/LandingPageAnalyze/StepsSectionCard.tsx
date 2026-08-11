import { type ReactNode } from "react";
import ShieldIcon from "../icons/ShieldIcon";

export interface StepsCardProps {
   icon : ReactNode,
   title : string,
   description : string, 
}

export const stepsCardData : StepsCardProps [] = [
    {
        icon : <ShieldIcon />,
        title : "1. Paste a URL",
        description : "Copy the website address you're curious about and paste it into our analyzer"
    },   {
        icon : <ShieldIcon />,
        title : "2. Verify",
        description : "Our engine runs deep scans across global security databases and site metadata."
    },   {
        icon : <ShieldIcon />,
        title : "3. Understand Result",
        description : "Receive a comprehensive trust report that tells you exactly what to expect."
    },
]


function StepCard({icon, title, description}: StepsCardProps) {
    return (
        <div className="relative z-10 flex flex-1 flex-col items-center text-center">

            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                {icon}
            </div>

            {/* Title  */}
            <h3 className="mt-5 text-xl font-semibold text-gray-900">
                {title}
            </h3>

            {/* Description */}
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
                {description}
            </p> 
        </div>
    );
}

export default function StepsSection() {
  return (
    <section className="px-6 py-16">

        <h2 className="text-center text-3xl font-bold text-gray-900">
            Three steps to safety
        </h2>

        {/* Cards */}
        <div className="relative mx-auto mt-14 flex max-w-5xl flex-col gap-12 md:flex-row md:gap-8" >
            
            {/* Dashed line */}
            <div className="absolute left-[16.67%] right-[16.67%] top-8 hidden border-t-2 border-dashed border-gray-300 md:block" />

            {stepsCardData.map((step) => (
                <StepCard
                    key = {step.title}
                    icon = {step.icon}
                    title = {step.title}
                    description ={step.description}
                />
            ))}
        </div>
    </section>
  );
}