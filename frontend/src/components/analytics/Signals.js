import { Increase } from "../icons/Increase";
import { Response } from "../icons/Response";
import { Users } from "../icons/Users";

export default function Metrics() {
    const signals = [
        {
            icon: <Increase />,
            content: "Increase calls by 5 per day to increase probability 6%."
        },
        {
            icon: <Response />,
            content: "Increase emails by 9 per day to increase probability 3%."
        },
        {
            icon: <Users />,
            content: "Reduce responce time to prospect by 25 minutes to increase probability 2%."
        }
    ]
    return (
        <div className="gap-2">
            {signals.map((s, i) => (
                <div key={i} className="flex justify-center text-sm rounded-3xl bg-blue-200 items-center py-2 my-2 min-h-20">
                    <div className="flex-1">{s.icon}</div>
                    <p className="flex-3 text-xs text-slate-900 font-semibold">{s.content}</p>
                </div>
            ))}
        </div>
    )
}