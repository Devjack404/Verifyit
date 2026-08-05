import ShieldIcon from "../icons/ShieldIcon";

export default function AdviceContainer() {
  return (
    <aside className="w-full flex-col flex rounded-2xl h-full bg-blue-700 p-8 text-white shadow-lg">

      <div className="flex items-center gap-3">
        <ShieldIcon />
        <h2 className="text-2xl font-bold">
          Security Recommendation
        </h2>
      </div>

      <p className="mt-6 leading-7 text-blue-100">
        While this site is safe, always ensure your browser is up to date
        and you use unique passwords for every service. Enable
        two-factor authentication (2FA) wherever possible.
      </p>


      <button
        className="
          mt-auto
          w-full
          rounded-full
          bg-white
          py-3
          font-semibold
          text-blue-700
          transition
          hover:bg-gray-100
        "
      >
        Download Report PDF
      </button>
    </aside>
  );
}