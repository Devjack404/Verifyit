import HeroSectionContainer from "../components/LandingPageAnalyze/HeroSectionContainer"
import FeaturesSectionContainer from "../components/LandingPageAnalyze/FeaturesSectionContainer"
import StepsSectionContainer from "../components/LandingPageAnalyze/StepsSectionContainer";
import WhyContainer from "../components/LandingPageAnalyze/WhyContainer";

export default function LandingPageAnalyze (){
    return (
        <>   
            <HeroSectionContainer />           
            <FeaturesSectionContainer />
            <StepsSectionContainer />
            <WhyContainer />
        </>
    );
}