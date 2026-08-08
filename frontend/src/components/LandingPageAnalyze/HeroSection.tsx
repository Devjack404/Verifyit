import SearchBar from "../SearchBar/SearchBar"

export default function HeroSection () {
    return (
        <section className="bg-gray-50 p-10">
            <div className="flex flex-row items-center justify-between gap-10">

                {/* LEFT CONTENT */}
                <div className="flex-1">
                    <h1 className="font-bold text-4xl">Verify Website trust with VerfyIt</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Don't let deceptive websites compromise your security. Our AI-
                        driven engine provides instant clarity on site safety, transparency,
                        and reputation.
                    </p>

                    <div className="mt-6">
                        <SearchBar />
                    </div>
                </div>


                {/* RIGTH IMAGE  */}
                <div className="flex-1">
                    <img 
                        src="https://i.pinimg.com/1200x/81/5e/06/815e06f77247d1c8fc341ba3b8552cfc.jpg" 
                        alt="Web Analyze Ilustration"
                        className="w-full rounded-2xl"
                    >
                    </img>       
                    
                </div> 
                
            </div>
       </section>
  )
}