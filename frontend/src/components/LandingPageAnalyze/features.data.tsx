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
        gridClassName : "md:col-span-3",
    },
    {
        title : "TrustScore",
        description : 
            "A clear 0-100 score based on 15+ security signals, giving you an instant verdict on any digital entity.",
        icon : <ShieldIcon />,
        iconClassName : "bg-green-100 text-green-600",
        gridClassName : "md:col-span-3",
    },
    {
        title : "Transparent Analysis",
        description :
            "We don't just say 'unsafe'. We show you exactly why, from expired certificates to flagged scripts.",
        icon : <ShieldIcon />,
        iconClassName : "bg-orange-100 text-orange-600",
        gridClassName : "md:col-span-2",
    },
    {
        title : "Actionable Advice",
        description :
            "Get clear next steps: whether to proceed with caution or immediately leave the site for your safety.",
        icon : <ShieldIcon />,
        iconClassName:"bg-blue-100 text-blue-600",
        gridClassName : "md:col-span-2"
    },
    {
        title : "Security Literacy",
        description :
            "Learn as you browse. Our tool explains security jargon in simple English, making you a smarter netizen.",
        icon : <ShieldIcon />,
        iconClassName:"bg-orang-100 text-orange-900",
        gridClassName : "md:col-span-2"
    }
];