import React from 'react'
import Circle from './circle'


const Stair = ({rotacion,bg,lista=[]}) => {
  return (
    <div className={`grid grid-cols-3 grid-rows-7 ${rotacion} `}>

        <div className={`border flex items-center `}><p className='ml-20'>{lista[0]}</p></div>
        <div className={`border ${bg}`}></div>
        <div className={`border flex items-center`}><p className='ml-1'>{lista[14]}</p></div>
        <div className={`border flex items-center `}><p className='ml-20'>{lista[1]}</p></div>
        <div className={`border ${bg}`}></div>
        <div className={`border flex items-center`}><p className='ml-1'>{lista[13]}</p></div>
        <div className={`border flex items-center`}><p className="ml-10"></p><Circle bg=" bg-slate-200" className=""  /><p className='ml-1'>{lista[2]}</p> </div>
        <div className={`border ${bg}`}></div>
        <div className={`border ${bg} flex items-center`}> <p className='ml-1 mr-5'>{lista[12]} </p> <Circle /></div>
        <div className={`border flex items-center`}><p className='ml-20'>{lista[3]}</p></div>
        <div className={`border ${bg}`}></div>
        <div className={`border flex items-center`}><p className='ml-1'>{lista[11]}</p></div>
        <div className={`border flex items-center`}><p className='ml-20'>{lista[4]}</p></div>
        <div className={`border ${bg}`}></div>
        <div className={`border flex items-center`}><p className='ml-1'>{lista[10]}</p></div>
        <div className={`border flex items-center `}><p className='ml-20'>{lista[5]}</p></div>
        <div className={`border ${bg}`}></div>
        <div className={`border flex items-center `}><p className='ml-1'>{lista[9]}</p></div>
        <div className={`border flex items-center `}><p className='ml-20'>{lista[6]}</p></div>
        <div className={`border flex justify-center items-center `}><Circle bg=" bg-slate-200" n={lista[7]}/></div>
        <div className={`border flex items-center`}><p className='ml-1'>{lista[8]}</p></div>
    </div>
  )
}

export default Stair