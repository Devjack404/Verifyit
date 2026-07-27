export default function DomainCard (){
    return (
        <div className="bg-gray-50 gap-14 flex">
            {/* Left */}
            <div>
                <h2 className="text-3xl font-bold">example-secure-shop.com</h2>

                <p className="mt-2 text-sm text-gray-500">Analysis Date :</p> 
            </div>

            {/* Rigth */}
            <div className="flex gap-3">
                <button className="rounded-full leading-0 border px-9 py-0 text-sm hover:bg-gray-100">
                    Share
                </button>            

                <button className="rounded-full leading-0 border px-5 py-0 text-sm hover:bg-gray-100">
                    Copy Link
                </button>
            </div>
            
        </div>
    )
}