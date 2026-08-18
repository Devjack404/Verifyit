export default function CTACard() {
    return (
        <section className="px-50 pb-20">
            <div className=" mx-auto w-full max-w-5xl rounded-3xl bg-blue-800 p-10 text-center">
                
                <h2 className="text-4xl font-bold text-white">
                    Safe Browsing Starts Here
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-gray-300">
                    Join thousands of users who verify before they click.
                    Secure your digital life with VerifyIt's expert analysis tools.
                </p>

                <div className="mt-6 flex items-center justify-center gap-4">
                    <button className="rounded-2xl bg-white px-4 py-2 font-semibold text-blue-800">
                        Get Started Free
                    </button>

                    <button className="rounded-2xl border border-white bg-transparent px-4 py-2 text-white">
                        View Documentation
                    </button>
                </div>

            </div>
        </section>
    )
}