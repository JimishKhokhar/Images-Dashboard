import React, { useEffect } from 'react';
import './App.css';
import { useState, useRef } from 'react';
import logo1 from './images/001.png'
import logo2 from './images/002.png'
import logo3 from './images/003.png'
import logo4 from './images/004.png'
import logo5 from './images/005.png'
import logo6 from './images/006.png'
import logo7 from './images/007.png'
import logo8 from './images/008.png'
import Sidebar from './Components/Sidebar';
import Draggable from 'react-draggable';

function App() {

  const imageRef = useRef(null);

  const [theme, setTheme] = useState("#FF00FF");



  const [hash, setHash] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const referenceArray=[logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8];

  const [activeImages, setActiveImages] = useState(new Set());
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    let tempHash=[0,0,0,0,0,0,0,0];
    for (let i = 0; i < 8; i++) {
      if (activeImages.has(referenceArray[i]))
        tempHash[i] = 1;
      else tempHash[i] = 0;
    }
    console.log("temp Hash",tempHash)
    setHash(tempHash)

  }, [activeImages])

  const [positions, setPositions] = useState(
    [{ id: 0, positions: { x: 0, y: 0 } },
    { id: 1, positions: { x: 0, y: 0 } },
    { id: 2, positions: { x: 0, y: 0 } },
    { id: 3, positions: { x: 0, y: 0 } },
    { id: 4, positions: { x: 0, y: 0 } },
    { id: 5, positions: { x: 0, y: 0 } },
    { id: 6, positions: { x: 0, y: 0 } },
    { id: 7, positions: { x: 0, y: 0 } }]);


  const handleDrag = (e, ui, index) => {
    // Update the position of the image with the specified index
    const newPositions = [...positions];
    newPositions[index] = { id: index, positions: { x: ui.x, y: ui.y } };
    setPositions(newPositions);

    localStorage.setItem('positions', JSON.stringify(newPositions));

    console.log(index, "x:", ui.x, "y:", ui.y)
  };

  useEffect(() => {
    // Retrieve positions from local storage
    const storedPositions = localStorage.getItem('positions');
    if (storedPositions) {
      setPositions(JSON.parse(storedPositions));
    }

    // Retrieve activeImages from local storage
    const storedActiveImages = localStorage.getItem('activeImages');
    if (storedActiveImages) {
      setActiveImages(new Set(JSON.parse(storedActiveImages)));
    }
  }, [])




  return (
    <div className={` custom-fonts min-w-[100vw] min-h-[100vh]  flex   `} style={{ backgroundColor: theme }} >
      <div className={`w-[400px] h-[100vh] overflow-auto absolute left-0 top-14 z-10  bg-black flex flex-co transition-transform duration-300 ${isHidden ? '-translate-x-full' : 'translate-x-0'}`}>
        <Sidebar activeImages={activeImages} setActiveImages={setActiveImages} isHidden={isHidden} setIsHidden={setIsHidden} positions={positions} setPositions={setPositions} />
      </div>
      {/* Main Div */}
      <div className='flex-1  flex flex-col' >
        <div className='w-full h-fit   flex relative p-3 justify-center item-center bg-black text-white'>
          <span className='font-bold text-2xl '>Images DashBoard</span>
          <span onClick={(e) => {
            setIsHidden(false)
          }} className='hidden md:mt-1 md:block absolute left-2 md:left-6 text-white px-3 rounded-md font-bold active:bg-purple-700 hover:cursor-pointer select-none bg-purple-600'>Images</span>
          <div className='top-4 gap-2 absolute right-2 md:right-8 flex justify-center align-middle items-center'>
            <input placeholder=" Enter Theme Color " value={theme} onChange={(e) => setTheme(e.target.value)} className='text-black hidden md:block'></input>

          </div>


        </div>
        {
          <div className='w-full relative  flex justify-between md:hidden bg-red-400'>
            <span onClick={() => {
              setIsHidden(false)
            }} className=' top-2 absolute left-2 text-white px-3 rounded-md font-bold active:bg-purple-700 hover:cursor-pointer select-none bg-purple-600'>Images</span>
            <div className='top-2 gap-2 absolute right-2 flex justify-center align-middle items-center'>
              <input placeholder=" Enter Theme Color " value={theme} onChange={(e) => setTheme(e.target.value)} className='text-black '></input>

            </div>
          </div>
        }
        <div className='p-3  pt-10 min-h-[100vh]'  >
          {
            hash.map((value, index) => (
              value == 1 ?
                <Draggable key={index}
                  defaultPosition={{ x: positions[index].positions.x, y: positions[index].positions.y }}
                  onStop={(e, ui) => handleDrag(e, ui, index)} >
                  <img
                    onLoad={() => {
                      const image = document.querySelector('img'); // Select the image element
                      const rect = image.getBoundingClientRect(); // Get its position relative to the viewport
                      console.log('X coordinate:', rect.left);
                      console.log('Y coordinate:', rect.top);

                    }}
                    src={referenceArray[index]}
                    alt={`Image ${index}`}
                    draggable="true"
                    className={`${referenceArray[index] === "/static/media/001.ae092b936567b8e9ab11.png" || referenceArray[index] === "/static/media/008.feca616431f2c670f43b.png" ? 'max-w-[100%]' : 'max-w-[50%]'}  `}
                  />
                </Draggable> :<></>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
