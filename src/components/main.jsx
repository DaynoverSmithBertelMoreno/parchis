import React from "react";

const Main = () => {


// let full = "300px"; 
// let half = "150px"; 
// let green_blue = "-75px";
// let yellow_red = "37";

//ancho y alto de los triangulo debe ser 100% del contenedor padre
// border de los triangulos debe ser 50% del contenedor padre



  return (
    <div id="main" className="w-[313px] h-[313px] border-2 relative">
        
        
        <div id="arriba" className="w-full h-[54px]  ">
        <div className="grid justify-center items-center w-full h-full relative grid-cols-3">
            <div className="flex "><p className="ml-20 transform rotate-180">42</p></div>
            <div className="border-2 h-full w-[102px] bg-red-500" ></div>
            <div><p className='mr-20 transform rotate-180 '>26</p></div>
          </div>
        </div>


        <div id="izquierda" className="w-[54px] h-full  absolute top-0">
          <div className="grid items-center w-full h-full relative grid-rows-3">
            <div className="flex "><p className=" mt-18 ml-5 transform rotate-90 ">43</p></div>        
            <div className="border-2 h-[102px] w-full bg-green-500" ></div>
            <div className="flex"><p className="mb-18 ml-5 transform rotate-90   " >59</p></div>
          </div>
        </div>


        
        <div id="derecha" className="w-[54px] h-full  absolute top-0 right-0">
        <div className="grid items-center w-full h-full relative grid-rows-3">
            <div className="flex "><p className=" mt-18 ml-5 transform rotate-270 ">25</p></div>        
            <div className="border-2 h-[102px] w-full bg-blue-500" ></div>
            <div className="flex"><p className="mb-18 ml-5 transform rotate-270  " >9</p></div>
          </div>

        </div>


        <div id="abajo" className="w-full h-[54px]  absolute bottom-0">
          <div className="grid justify-center items-center w-full h-full relative grid-cols-3">
            <div className="flex "><p className="ml-20">60</p></div>
            <div className="border-2 h-full w-[102px] bg-yellow-500" ></div>
            <div><p className='ml-1'>8</p></div>
          </div>
        </div>



      {/* diagonales de las esquinas*/}
        <div class="absolute bottom-0 w-[50px] h-[50px]  border-black ">
        <div class="absolute w-[80px] h-[2px] bg-black -rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div class="absolute top-0 right-0 w-[50px] h-[50px] border-black ">
        <div class="absolute w-[80px] h-[2px] bg-black -rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div class="absolute top-0 w-[50px] h-[50px]  border-black ">
        <div class="absolute w-[80px] h-[2px] bg-black rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div class="absolute bottom-0 right-0 w-[50px] h-[50px]  border-black ">
        <div class="absolute w-[80px] h-[2px] bg-black rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        


        <div id="triangulos" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] ">
            <div className="absolute w-[200px] h-[200px] mx-auto">

                <div className="absolute top-25 left-1/2 transform 
                -translate-x-1/2 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] 
                border-r-transparent border-b-[100px] border-b-yellow-500 "></div>

                <div className="absolute bottom-25 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[100px]
                 border-l-transparent border-r-[100px] border-r-transparent border-b-[100px] border-b-red-500
                 rotate-180"></div>


                <div className="absolute top-1/2 left-[-50px] transform -translate-y-1/2 w-0 h-0 border-l-[100px]
                 border-l-transparent border-r-[100px] border-r-transparent border-b-[100px] border-b-green-500
                 rotate-90"></div>

                <div className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 w-0 h-0 border-l-[100px] 
                border-l-transparent border-r-[100px] border-r-transparent border-b-[100px] border-b-blue-500 
                -rotate-90"></div>
            </div>
        </div>

    </div>
  );
};

export default Main;
