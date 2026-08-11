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
        <div>
            <div>{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p> 
        </div>
    );
}

export default function StepsSection() {
  return (
    <section>
      {stepsCardData.map((step) => (
        <StepCard
            key = {step.title}
            icon = {step.icon}
            title = {step.title}
            description ={step.description}
        />
      ))}
    </section>
  );
}