import ShieldIcon from "../icons/ShieldIcon";

export default function PositiveFactorsSubCard() {
    return (
        <div className="flex bg-green-50 rounded-lg px-25 py-3">
            <ShieldIcon />
            <div className="flex flex-col text-left"> 
                <h3 className="font-bold">Valid SSL Certificate</h3>
                <p>Issued by Lets Encrypt, expires in 82 days</p>
            </div>
            
        </div>
    );
}