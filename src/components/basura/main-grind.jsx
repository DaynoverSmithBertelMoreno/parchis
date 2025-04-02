import React from 'react'
import Main from './main'
import Triangle from './triangles'


const Main_grind = () => {
  return (
    <div className='relative '>
        <div className='grid grid-cols-3 grid-rows-1 w-full h-full '>

            <div className='border h-[50px] '>a1</div>
            <div className='border h-[50px]'>a2</div>
            <div className='border h-[50px]'>a3</div>
            {/* </div> */}
            <div className='border w-[50px]'>a4</div>
            {/* <div className='border w-[200px]'>a5</div> */}
            <Triangle />
            {/* <Main /> */}

            <div className='border w-[50px] h-[200px] justify-self-end'>a6</div>
            <div className='border h-[50px] self-end'>a7</div>
            <div className='border h-[50px] self-end'>a8</div>
            <div className='border h-[50px] self-end '>a9</div>

          </div>
    </div>
  )
}

export default Main_grind