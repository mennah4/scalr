export default function AnalyticsBarChart() {
  return (
    <div className="flex justify-between gap-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center py-2 h-60 gap-2">
          <div className="text-xs text-green-500">91%</div>
          <div className="w-8 flex-1">
            <div className="bg-blue-950 h-full w-2/3 mx-auto rounded-full"></div>
            <div className={`bg-gradient-to-t from-blue-600 to-cyan-300 w-full mx-auto rounded-full -translate-y-full ${i > 6 ? 'border-4 border-dashed border-black' : ''}`}
              style={{ height: `${Math.floor(Math.random() * 100)}%` }}
            ></div>
          </div>
          <div className="w-8 text-center text-xs">Jan</div>
        </div>
      ))}
    </div>
  )
}



