import React from 'react'
import { Pie } from '../icons/Pie'
export default function Performance() {
    return (
        <div>
            <div className="flex items-center gap-4 mt-4">
                <div className="flex gap-2">
                    <div className='border border-gray-400 rounded-md w-10 h-10 flex justify-center items-center'><Pie /></div>
                </div>
                <div className='flex-1 border-r pr-5'>
                    <p className='text-base text-opacity-75'>Closed won</p>
                    <div className='flex gap-2'>
                        <span className='text-white font-bold'>15</span>
                        <span className='text-green-500 font-bold'>+</span>
                    </div>
                </div>
                <div className='flex-1 text-center'>
                    <p className='text-base'>$536,689</p>
                    <div className='space-x-2'>
                        <span className='text-green-500 font-bold'>+</span>
                        <span className='text-gray-500 font-bold'>$10,3</span>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div>
                <div className='mt-6 text-sm'>
                    <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Meeting set</span>
                        <div className='flex gap-8'>
                            <div className="text-gray-400">220</div>
                            <div className="text-green-400 w-10">+28</div>
                        </div>
                    </div>
                    <div className="w-full bg-black rounded-full h-1.5">
                        <div className="bg-indigo-600 h-1.5 rounded-full" style={{ "width": "45%" }}></div>
                    </div>
                </div>
                <div className='mt-4 text-sm'>
                    <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Response speed</span>
                        <div className='flex gap-8'>
                            <div className="text-gray-400">46</div>
                            <div className="text-green-400 w-10">+16</div>
                        </div>
                    </div>
                    <div className="w-full bg-black rounded-full h-1.5">
                        <div className="bg-sky-600 h-1.5 rounded-full" style={{ "width": "45%" }}></div>
                    </div>
                </div>
                <div className='mt-4 text-sm'>
                    <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Calls</span>
                        <div className='flex gap-8'>
                            <div className="text-gray-400">4,329</div>
                            <div className="text-green-400 w-10">+702</div>
                        </div>
                    </div>
                    <div className="w-full bg-black rounded-full h-1.5">
                        <div className="bg-amber-400 h-1.5 rounded-full" style={{ "width": "45%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}