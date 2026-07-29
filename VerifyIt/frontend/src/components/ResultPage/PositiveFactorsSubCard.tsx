import ShieldIcon from "../icons/ShieldIcon";

export default function PositiveFactorsSubCard() {
    return (
        <div className="flex bg-green-100 rounded-lg p-3">
            <ShieldIcon />
            <div className="flex flex-col"> 
                <h3>Valid SSL Certificate</h3>
                <p>Issued by Lets Encrypt, expires in 82 days</p>
            </div>
            
        </div>
    );
}