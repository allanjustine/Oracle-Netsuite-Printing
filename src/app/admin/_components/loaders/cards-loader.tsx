export default function CardsLoader() {
  return Array.from({ length: 5 }).map((_, index) => (
    <div
      className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-200 relative"
      key={index}
    >
      <h3 className="text-sm uppercase text-primarylight font-semibold">
        <p className="w-28 h-5 bg-slate-200 rounded animate-pulse"></p>
      </h3>
      <p className="text-3xl font-bold text-primarydark mt-2 w-7 h-10 bg-slate-200 rounded animate-pulse"></p>
      <div className={"flex items-center mt-2"}>
        <p className="w-2 h-2 bg-slate-200 rounded animate-pulse mr-1" />
        <p className="w-36 h-5 bg-slate-200 rounded animate-pulse"></p>
      </div>
      <div className="absolute top-8 right-3">
        <p className="w-24 h-24 bg-slate-200 rounded animate-pulse"></p>
      </div>
    </div>
  ));
}
