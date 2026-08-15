import ShieldIcon from "../icons/ShieldIcon"

export default function DomainCard (){
    return (
        <div className="flex w-full items-start justify-between bg-gray-50 ">
            {/* Left */}
            <div>
                <h2 className="text-3xl font-bold">example-secure-shop.com</h2>

                <p className="mt-2 text-sm text-gray-500">Analysis Date : Oct 24, 2023 | 14 : 32 WIB</p> 
            </div>

            {/* Right */}
            <div className="flex gap-3">
                <button className="rounded-full flex gap-2 border px-7 py-3 text-sm hover:bg-gray-100">
                    <ShieldIcon />
                    Share
                </button>            

                <button className="rounded-full flex gap-2 border px-7 py-3 text-sm hover:bg-gray-100">
                    <ShieldIcon />
                    Copy Link
                </button>
            </div>
            
        </div>
    )
}