export default function RecentActivityLoader() {
  return Array.from({ length: 10 }).map((_, index) => (
    <div className="flex" key={index}>
      <div className="flex-shrink-0 mr-3">
        <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse flex items-center justify-center text-white"></div>
      </div>
      <div>
        <p className="text-sm font-medium text-primarydark mb-1 w-28 h-5 animate-pulse rounded bg-slate-200"></p>
        <p className="text-xs text-primarylight w-36 h-5 bg-slate-200 animate-pulse rounded"></p>
        <p className="text-xs text-primarylight w-32 h-5 bg-slate-200 animate-pulse rounded"></p>
        <p className="text-xs text-gray-400 mt-1 w-16 h-3 bg-slate-200 animate-pulse rounded"></p>
      </div>
    </div>
  ));
}
