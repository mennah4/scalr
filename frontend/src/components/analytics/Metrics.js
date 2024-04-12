export default function Metrics() {
    return (
        <div className="gap-2">
            {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex justify-around text-sm items-center py-2 gap-4">
                    <p>PMI</p>
                    <p>+5</p>
                    <p>91%</p>
                    <p>+</p>
                </div>
            ))}
        </div>
    )
}