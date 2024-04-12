import Card from '../components/Card'
import AnalyticsBarChart from '../components/analytics/BarChart';
import Metrics from '../components/analytics/Metrics';
import Signals from '../components/analytics/Signals';
import Deals from '../components/analytics/Deals';
import Improvement from '../components/analytics/Improvement';

export default function Analytics() {
    return (
        <div className='space-y-6 my-6 mx-32'>
            <div className='flex gap-6 h-80'>
                <Card title="Propability of reaching end of period goal"
                    className="w-3/5 pb-10 overflow-hidden"
                >
                    <AnalyticsBarChart />
                </Card>
                <Card title="Casual Metrics"
                    className="w-80 pb-10 shrink-0 overflow-scroll"
                >
                    <Metrics />
                </Card>
                <Card title="Signals"
                    className="w-80 shrink-0 pb-10 overflow-hidden"
                >
                    <Signals />
                </Card>
            </div>
            <div className='flex gap-6'>
                <Card title="Top 5 deals"
                    className="flex-1 pb-10 overflow-hidden"
                >
                    <Deals />
                </Card>
                <Card title="Areas for improvement" subtitle="Updated monthly"
                    className="w-80 overflow-hidden"
                >
                    <Improvement />
                </Card>
            </div>
        </div>
    )
}