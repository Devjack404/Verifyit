import { features } from "./features.data";
import FeaturesCard from "./FeaturesCard";

export default function FeaturesSectionContainer () {
    return (
        <section className="bg-[#f8f8ff] py-20">
            <div className="mx-auto max-w-6xl px-6">

                <div className="mb-14 text-center">
                    <span className="text-xs font-bold tracking-widest text-blue-600">
                        CAPABILITIES
                    </span>

                    <h2 className="mt-3 text-3xl font-bold">
                        Powerful analysis at your fingertips
                    </h2>
                </div>

                <div className="grid grid-cols-6 gap-5">
                    {features.map((feature) => (
                        <FeaturesCard 
                            key={feature.title}
                            feature={feature}
                        />
                    ))}
                </div>

            </div>
        </section>
   )
}