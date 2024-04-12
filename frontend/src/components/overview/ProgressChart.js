import React from 'react';
import { Diamond } from '../icons/Diamond';
export default function ProgressChart({ percentage, size = 180, strokeWidth = 6, trackColor = "#000", progressColor = "blue" }) {
    // Calculate circle circumference
    const circumference = 2 * Math.PI * size / 2;
    const smallCircleCircumference = 2 * Math.PI * size / 3;

    // Calculate dash array for progress circle
    const dashArray = circumference;
    const dashOffset = (100 - percentage) / 100 * circumference;
    const smallCircleDashOffset = (100 - percentage) / 100 * smallCircleCircumference;

    return (
        <div>
            <div class="flex justify-center relative">
                <div className="bg-black rounded-full w-16 h-16 grid place-content-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="border-2 w-8 h-8 rounded-full grid place-content-center leading-none opacity-35">
                        <Diamond />
                    </div>
                </div>
                <svg width={size} height={size}>
                    <defs>
                        <linearGradient id="purpleGradient" x1="40" y1="210" x2="460" y2="290" gradientUnits="userSpaceOnUse">
                            <stop stop-color="rgba(223, 159, 247, 0.8)" offset="0" />
                            <stop stop-color="rgb(121, 45, 129)" offset="1" />
                        </linearGradient>
                    </defs>
                    <defs>
                        <linearGradient id="blueGradient" x1="40" y1="210" x2="460" y2="290" gradientUnits="userSpaceOnUse">
                            <stop stop-color="rgb(85, 88, 218)" offset="0" />
                            <stop stop-color="rgb(95, 209, 249)" offset="1" />
                        </linearGradient>
                    </defs>
                    <g>
                        {/* Track Circle */}
                        <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={size / 2 - strokeWidth}
                            fill="none"
                            stroke={trackColor}
                            strokeWidth={strokeWidth}
                        />
                        {/* Progress Circle */}
                        <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={size / 2 - strokeWidth}
                            fill="none"
                            stroke="url(#blueGradient)"
                            strokeWidth={strokeWidth * 2}
                            strokeDasharray={dashArray}
                            strokeDashoffset={dashOffset}
                            stroke-linecap="round"
                        />
                    </g>
                    <g>
                        {/* Track Circle */}
                        <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={size / 3 - strokeWidth}
                            fill="none"
                            stroke={trackColor}
                            strokeWidth={strokeWidth}
                        />
                        {/* Progress Circle */}
                        <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={size / 3 - strokeWidth}
                            fill="none"
                            stroke="url(#purpleGradient)"
                            strokeWidth={strokeWidth * 2}
                            strokeDasharray={smallCircleCircumference}
                            strokeDashoffset={smallCircleDashOffset}
                            stroke-linecap="round"
                        />
                    </g>
                </svg>
            </div>
            <div className='flex flex-col text-sm items-center justify-center mt-2 mb-4'>
                <div>
                    Propability scrore
                </div>
                <div>
                    <span className='text-lg'>71%</span> <span>17% +</span>
                </div>
                <div className='text-gray-500'>
                    Compared to 54% last month
                </div>
            </div>
            <div className='flex flex-col text-sm justify-center items-center my-2'>
                <div className='w-full flex gap-2 justify-evenly'>
                    <span>Meeting set</span> <span className='text-gray-500'>72%</span>
                </div>
                <div className='w-full flex gap-2 justify-evenly'>
                    <span>Response speed</span> <span className='text-gray-500'>82%</span>
                </div>
                <div className='w-full flex gap-2 justify-evenly'>
                    <span>Calls</span> <span className='text-gray-500'>63%</span>
                </div>
            </div>
        </div>
    )
}