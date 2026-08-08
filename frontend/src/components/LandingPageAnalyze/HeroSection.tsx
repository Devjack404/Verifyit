import SearchBar from "../SearchBar/SearchBar"

export default function HeroSection () {
    return (
        <div className="flex gap-10 ">
            <div>
                <h1 className="font-bold text-4xl">Verify Website trust with VerfyIt</h1>
                <p>
                    Don't let deceptive websites compromise your security. Our AI-
                    driven engine provides instant clarity on site safety, transparency,
                    and reputation.
                </p>
                <SearchBar />
            </div>

            <div className="w-170">
                <img src="https://i.pinimg.com/1200x/81/5e/06/815e06f77247d1c8fc341ba3b8552cfc.jpg"></img>       
            </div> 
        
        </div>
   )
}