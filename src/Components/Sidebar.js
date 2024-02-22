import React from 'react'
import { useState } from 'react';
import logo1 from '../images/001.png'
import logo2 from '../images/002.png'
import logo3 from '../images/003.png'
import logo4 from '../images/004.png'
import logo5 from '../images/005.png'
import logo6 from '../images/006.png'
import logo7 from '../images/007.png'
import logo8 from '../images/008.png'


const Sidebar = ({ activeImages, setActiveImages, isHidden, setIsHidden, positions, setPositions }) => {



    const addItemToSet = (item) => {
        let tempSet = new Set(activeImages);
        tempSet.add(item)
        setActiveImages(tempSet);
        localStorage.setItem("activeImages", JSON.stringify(Array.from(tempSet)))
    };
    function updateLocalStorage(index) {
        // Retrieve the existing positions from local storage
        let localStoragePositions = JSON.parse(localStorage.getItem("positions")) || [];

        // Update the position at the specified index to {x: 0, y: 0}
        localStoragePositions[index] = { id: index, positions: { x: 0, y: 0 } };

        // Store the updated positions array back to local storage
        localStorage.setItem("positions", JSON.stringify(localStoragePositions));

        setPositions(localStoragePositions)
    }
    const removeItemFromSet = (item,index) => {
        const newSet = new Set(activeImages);
        newSet.delete(item);
        localStorage.setItem("activeImages", JSON.stringify(Array.from(newSet)))
        setActiveImages(newSet);


        updateLocalStorage(index);

    };



    return (
        <div className='relative'>
            <div className="p-2 relative text-center flex justify-center    bg-black ">
                <span className="text-3xl  text-white">Images</span>
                <span onClick={() => setIsHidden(true)} className='absolute bottom-2 right-2 text-white px-3 rounded-md font-bold active:bg-red-700 hover:cursor-pointer select-none bg-red-600'>Hide</span>

            </div>
            <div className="flex-1 p-5  flex flex-col gap-2">

                <div className='relative'>

                    <img src={logo1} className={`w-full h-fit hover:cursor-pointer  ${activeImages.has(logo1) ? 'border-4 border-blue-500' : ''}`} onClick={() => { addItemToSet(logo1) }} />

                    {
                        activeImages.has(logo1) ?
                            <span
                                onClick={() => { removeItemFromSet(logo1,0) }}
                                className='absolute bottom-2 right-2 text-white px-3 rounded-md font-bold active:bg-red-700 hover:cursor-pointer select-none bg-red-600'>Remove</span>
                            : <></>
                    }

                </div>



                <div className='relative'>

                    <img src={logo2} className={`w-full h-fit hover:cursor-pointer  ${activeImages.has(logo2) ? 'border-4 border-blue-500' : ''}`} onClick={() => { addItemToSet(logo2) }} />

                    {
                        activeImages.has(logo2) ?
                            <span
                                onClick={() => { removeItemFromSet(logo2,1) }}
                                className='absolute bottom-2 right-2 text-white px-3 rounded-md font-bold active:bg-red-700 hover:cursor-pointer select-none bg-red-600'>Remove</span>
                            : <></>
                    }

                </div>
                <div className='relative'>

                    <img src={logo3} className={`w-full h-fit hover:cursor-pointer  ${activeImages.has(logo3) ? 'border-4 border-blue-500' : ''}`} onClick={() => { addItemToSet(logo3) }} />

                    {
                        activeImages.has(logo3) ?
                            <span
                                onClick={() => { removeItemFromSet(logo3,2) }}
                                className='absolute bottom-2 right-2 text-white px-3 rounded-md font-bold active:bg-red-700 hover:cursor-pointer select-none bg-red-600'>Remove</span>
                            : <></>
                    }

                </div>
                {/* Repeat similar blocks for logo4 to logo8 */}

                <div className='relative'>

                    <img src={logo4} className={`w-full h-fit hover:cursor-pointer  ${activeImages.has(logo4) ? 'border-4 border-blue-500' : ''}`} onClick={() => { addItemToSet(logo4) }} />

                    {
                        activeImages.has(logo4) ?
                            <span
                                onClick={() => { removeItemFromSet(logo4,3) }}
                                className='absolute bottom-2 right-2 text-white px-3 rounded-md font-bold active:bg-red-700 hover:cursor-pointer select-none bg-red-600'>Remove</span>
                            : <></>
                    }

                </div>
                <div className='relative'>

                    <img src={logo5} className={`w-full h-fit hover:cursor-pointer  ${activeImages.has(logo5) ? 'border-4 border-blue-500' : ''}`} onClick={() => { addItemToSet(logo5) }} />

                    {
                        activeImages.has(logo5) ?
                            <span
                                onClick={() => { removeItemFromSet(logo5,4) }}
                                className='absolute bottom-2 right-2 text-white px-3 rounded-md font-bold active:bg-red-700 hover:cursor-pointer select-none bg-red-600'>Remove</span>
                            : <></>
                    }

                </div>
                <div className='relative'>

                    <img src={logo6} className={`w-full h-fit hover:cursor-pointer  ${activeImages.has(logo6) ? 'border-4 border-blue-500' : ''}`} onClick={() => { addItemToSet(logo6) }} />

                    {
                        activeImages.has(logo6) ?
                            <span
                                onClick={() => { removeItemFromSet(logo6,5) }}
                                className='absolute bottom-2 right-2 text-white px-3 rounded-md font-bold active:bg-red-700 hover:cursor-pointer select-none bg-red-600'>Remove</span>
                            : <></>
                    }

                </div>

                <div className='relative'>

                    <img src={logo7} className={`w-full h-fit hover:cursor-pointer  ${activeImages.has(logo7) ? 'border-4 border-blue-500' : ''}`} onClick={() => { addItemToSet(logo7) }} />

                    {
                        activeImages.has(logo7) ?
                            <span
                                onClick={() => { removeItemFromSet(logo7,6) }}
                                className='absolute bottom-2 right-2 text-white px-3 rounded-md font-bold active:bg-red-700 hover:cursor-pointer select-none bg-red-600'>Remove</span>
                            : <></>
                    }

                </div>
                <div className='relative'>

                    <img src={logo8} className={`w-full h-fit hover:cursor-pointer  ${activeImages.has(logo8) ? 'border-4 border-blue-500' : ''}`} onClick={() => { addItemToSet(logo8) }} />

                    {
                        activeImages.has(logo8) ?
                            <span
                                onClick={() => { removeItemFromSet(logo8,7) }}
                                className='absolute bottom-2 right-2 text-white px-3 rounded-md font-bold active:bg-red-700 hover:cursor-pointer select-none bg-red-600'>Remove</span>
                            : <></>
                    }

                </div>

            </div>
        </div>

    )
}

export default Sidebar