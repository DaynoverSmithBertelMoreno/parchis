import React,{useState} from "react";
import Square from "./components/square";
import Stair from "./components/stair";
import  Main from "./components/main";


const lista1 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const lista2 = [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41];
const lista3 = [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58];
const lista4 = [61, 62, 63, 64, 65, 66, 67, 68, 1, 2, 3, 4, 5, 6, 7];


const App = () => {
  const [dado1, setDado1] = useState(1);
  const [dado2, setDado2] = useState(1);

  const [animando, setAnimando] = useState(false);

  // imagenes
  const  imagenes = [
    "./src/assets/dado1.png",
    "./src/assets/dado2.png",
    "./src/assets/dado3.png",
    "./src/assets/dado4.png",
    "./src/assets/dado5.png",
    "./src/assets/dado6.png"
  ]

  const lanzarDados= ()=> {
    
    setAnimando(true);

    const nuevoDado1 = Math.floor(Math.random() * 6) + 1;
    const nuevoDado2 = Math.floor(Math.random() * 6) + 1;

    

    setTimeout(() => {
      
          setDado1(nuevoDado1);
          setDado2(nuevoDado2);
          setAnimando(false);
    },1000);


    

  }
  return (
    <div className="flex gap-4 justify-evenly items-center h-screen bg-slate-200">
      <div id="parchis" className="flex justify-start">
        <div className="grid grid-cols-3 grid-rows-3 w-[950px] h-[950px] border-5">
          <Square color="border-red-500" className="w-[316px] h-[316px]" />
          <Stair rotacion="transform rotate-180" bg="bg-red-500" lista={lista2} className="w-[316px] h-[316px]" />
          <Square color="border-blue-500" className="w-[316px] h-[316px]" />
          <Stair rotacion="transform rotate-90" bg="bg-green-500" lista={lista3} className="w-[316px] h-[316px]" />
          
          {/* <Triangle/> */}
          <Main className="w-[316px] h-[316px]" />
          {/* <Main_grind/> */}

          <Stair rotacion="transform rotate-270" bg="bg-blue-500" lista={lista1} className="w-[316px] h-[316px]" />
          <Square color="border-green-500" className="w-[316px] h-[316px]" />
          <Stair rotacion="transform rotate-0" bg="bg-yellow-500" lista={lista4} className="w-[316px] h-[316px]" />
          <Square color="border-yellow-500" className="w-[316px] h-[316px]" />
        </div>
      </div>
    

{/* dados */}

      <div id="dados" className="flex flex-col justify-center  items-center w-[500px] h-[500px] bg-slate-300 rounded">
        <div className="flex flex-cols gap-4 mb-10 ">
          <div id="dado1" className="w-[70px] h-[70px] ">
            <img id="dado1img" src={imagenes[dado1-1]} className={animando ? "animate-spin" : ""}></img>
            {dado1}
           </div>

           <div id="dado2" className="w-[70px] h-[70px] ">
           <img src={imagenes[dado2-1]} className={animando ? "animate-spin" : ""}></img>
            {dado2}
          </div>

        </div>
        <div className="flex  justify-center mb-10">
          <button className="flex flex-row border-1   bg-yellow-300 hover:bg-yellow-500 text-white
           font-bold py-2 px-4 rounded  w-[150px]  " onClick={lanzarDados}> 
            <img src="./src/assets/throw-dices.png" alt="icono dado" className="w-10 h-10 flex" />
            <p className="">lanzar</p> </button>
        </div>
      </div>
    </div>
  );
};

// transform scale-x-[-1]
// transform rotate-180
// transform rotate-180

export default App;

