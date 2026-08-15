import ShieldIcon from "../icons/ShieldIcon";

export default function AreaAwernessSubCard() {
    return (
        <div className="flex w-full bg-yellow-50 rounded-lg px-25 py-3">
            <ShieldIcon />
            <div className="flex flex-col text-left"> 
                <h3 className="font-bold">Ad Trackers Found</h3>
                <p>Contains 4 distinct cross-site tracking scripts</p>
            </div>
            
        </div>
    );
}