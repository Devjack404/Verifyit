export default function AboutSecurityCard(){
    return (
        <div className="flex-col h-full flex space-y-4 shadow-md  bg-white p-10 rounded-2xl mb-20">
            <h4 className="font-bold">What is SSL</h4>
            <p>Understand how Secure Sockets Layer keeps your connection encrypted and data private.</p>

            <button className="font-medium hover:underline text-blue-800 mt-8">Read Article →</button>
        </div>
    )
}