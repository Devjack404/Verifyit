export default function AnalysisSummarryCard (){
    return (
        <div className="flex-1">
            <div>
                <p className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    LOW RISK (SAFE)
                </p>
            </div>

            <div className="p-4 mt-5 rounded-2xl bg-gray-100">
                <h3 className="text-lg font-semibold">
                    Analysis Summary
                </h3>

                <p className="mt-3 leading-7 w-80 text-gray-600">
                    This domain shows strong security
                    signals. It uses high-grade encryption,
                    has a long-standing registration history,
                    and no known associations with phishing
                    or malware campaigns. You can browse
                    and transact with confidence.
                </p>
            </div>


        </div>
    );
}
