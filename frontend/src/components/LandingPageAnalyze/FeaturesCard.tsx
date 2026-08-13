import type { FeatureProps } from "./features.data";

interface FeatureCardProps {
    feature : FeatureProps;
}

export default function FeaturesCard({
    feature,
}: FeatureCardProps) {
    return (
        <article 
            className={`rounded-2xl border border-gray-200 bg-wehite p-6 ${feature.gridClassName}`}>

            <div 
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${feature.iconClassName}`}
            >
                {feature.icon}
            </div>

            <h3 className={`mb-3 text-xl font-semibold`}>
                {feature.title}
            </h3>

            <p className={`text-sm leading-6 text-gray-600`}>
                {feature.description}
            </p>
        </article>
    );
}