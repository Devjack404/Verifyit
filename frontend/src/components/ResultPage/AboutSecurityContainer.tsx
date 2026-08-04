import AboutSecurityCard from "./AboutSecurityCard"

export default function AboutSecurityContainer() {
    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 w-full gap-10 mb-20">
            <div className="flex-1">
                <AboutSecurityCard />   
            </div>     

            <div className="flex-1">
                <AboutSecurityCard />        
            </div>

            <div className="flex-1">
                <AboutSecurityCard />        
            </div>         
        </div>
    )
}