import React from 'react'

const Triangle = () => {
  return (
    <div >

    <div  className="absolute inset-0 flex items-center justify-center z-10 ">
              <div className="w-24 h-24 relative">
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 rotate-180 w-0 h-0 
                    border-l-[48px] border-l-transparent border-r-[48px] border-r-transparent border-b-[48px] border-b-red-500"
                ></div>
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 
                   border-l-[48px] border-l-transparent border-r-[48px] border-r-transparent border-b-[48px] border-b-yellow-500"
                ></div>
                <div
                  className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 w-0 h-0 
                    border-l-[48px] border-l-transparent border-r-[48px] border-r-transparent border-b-[48px] border-b-green-500"
                ></div>
                <div
                  className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 w-0 h-0 
                   border-l-[48px] border-l-transparent border-r-[48px] border-r-transparent border-b-[48px] border-b-blue-500"
                ></div>
              </div>
            </div>

    </div>
  )
}




export default Triangle