import Card from '../components/Card'
import OverviewBarChart from '../components/overview/BarChart';
import Metrics from '../components/analytics/Metrics';
import Signals from '../components/analytics/Signals';
import Deals from '../components/analytics/Deals';
import Performance from '../components/overview/Performance';
import ProgressChart from '../components/overview/ProgressChart';

export default function Overview() {
    return (
        <div className='space-y-6 my-6 mx-32'>
            <div className='flex gap-6 h-80'>
                <Card title="Propability of reaching end of period goal"
                    className="w-3/5 pb-10 overflow-hidden"
                >
                    <OverviewBarChart />
                </Card>
                
                <Card title=""
                    className="w-80 pb-10 shrink-0 overflow-scroll"
                >
                    <ProgressChart percentage={75} />
                </Card>
                <Card title="Leaderboard"
                    className="w-80 pb-10 shrink-0 overflow-scroll"
                >
                    <Metrics />
                </Card>
            </div>
            <div className='flex gap-6'>
                <Card title="Top 5 deals"
                    className="flex-1 pb-10 overflow-hidden"
                >
                    <Deals />
                </Card>
                <Card title="Comperative performance"
                    className="w-80 overflow-hidden"
                >
                    <Performance />
                </Card>
            </div>
        </div>
    )
}