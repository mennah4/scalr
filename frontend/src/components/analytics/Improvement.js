import React, { useEffect } from 'react';
import * as echarts from 'echarts/core';
import { TitleComponent, LegendComponent } from 'echarts/components';
import { RadarChart } from 'echarts/charts';
import { SVGRenderer } from 'echarts/renderers';

export default function Improvement() {

    echarts.use([TitleComponent, LegendComponent, RadarChart, SVGRenderer]);

    const option = {
        color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
        backgroundColor: 'transparent',
        radar: [
            {
                indicator: [
                    { text: 'Indicator1', max: 150 },
                    { text: 'Indicator2', max: 150 },
                    { text: 'Indicator3', max: 150 },
                    { text: 'Indicator4', max: 120 },
                    { text: 'Indicator5', max: 108 },
                    { text: 'Indicator6', max: 72 }
                ],
            }
        ],
        series: [
            {
                type: 'radar',
                data: [
                    {
                        value: [120, 118, 130, 100, 99, 70],
                        name: 'Data C',
                        symbol: 'rect',
                        label: {
                            show: true,
                            formatter: function (params) {
                                return params.value;
                            }
                        }
                    },
                    {
                        value: [100, 93, 50, 90, 70, 60],
                        name: 'Data D',
                        areaStyle: {
                            color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                                {
                                    color: 'rgba(255, 145, 124, 0.1)',
                                    offset: 0
                                },
                                {
                                    color: 'rgba(255, 145, 124, 0.9)',
                                    offset: 1
                                }
                            ])
                        }
                    }
                ]
            }
        ]
    };

    useEffect(() => {
        var myChart = echarts.init(document.getElementById('radar-chart'), 'dark', {
            height: 200,
            width: 'auto'
        });
        myChart.setOption(option);
    }, []);

    return (
        <div>
            <div className='flex justify-center my-4'>
            <div className='flex-1 flex justify-center items-center gap-2'>
                            <div className='w-2 h-2 rounded-full bg-orange-500'></div>
                            <div className='text-xs'>Kate</div>
            </div>
            <div className='flex-1 flex justify-center items-center gap-2'>
                            <div className='w-2 h-2 rounded-full bg-blue-500'></div>
                            <div className='text-xs'>Team Average</div>
            </div>
            </div>
            <div id="radar-chart" className='h-full flex justify-center items-center'>
            </div>
        </div>
    );
};

