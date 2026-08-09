import type { ReactNode } from "react";
import ShieldIcon from "../icons/ShieldIcon";

export interface Feature {
    title : string;
    description : string;
    icon : ReactNode;
    iconClassName : string;
    gridClassName : string;
}

export const features : Feature[] =  [
    {
        title : "Website Verification",
        description : 
            "Advanced SSL check, domain age verification, and ownership transparency audits to ensure you're visiting the real thing.",
        icon : <ShieldIcon />,
        iconClassName : "bg-blue-100 text-blue-600",
        gridClassName : "md-col-span-3"
    },
    
];