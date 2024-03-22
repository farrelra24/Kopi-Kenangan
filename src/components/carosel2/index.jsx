export default function NextCarosel(){
    return(
        <div className="bg-white flex justify-center">
            <div className="carousel carousel-center max-w-[900px] p-4 space-x-4 bg-white gap-28">
            <div className="carousel-item">
                <div>
                    <img src="/carosel/banner-5.png" className="rounded-box" />
                    <h1 className="text-3xl text-teal-900 font-bold"> Janji Jiwa</h1>
                    <h2 className="text-xl text-teal-700"> The Largest Coffee Chain in Indonesia</h2>
                    <h3 className="text-xl text-teal-900 font-bold pt-5"> See Detail -❯</h3>
                </div>
            </div> 
            <div className="carousel-item">
                <div>
                    <img src="/carosel/banner-6.png" className="rounded-box" />
                    <h1 className="text-3xl text-teal-900 font-bold"> Jiwa Tea</h1>
                    <h2 className="text-xl text-teal-700"> Sip Well, Feel Well whit Jiwa Tea</h2>
                    <h3 className="text-xl text-teal-900 font-bold pt-5"> See Detail -❯</h3>
                </div>
            </div> 
            <div className="carousel-item">
                <div>
                    <img src="/carosel/banner-7.png" className="rounded-box h-[165px]" />
                    <h1 className="text-3xl text-teal-900 font-bold"> Burger Geber</h1>
                    <h2 className="text-xl text-teal-700"> #GEBERinaja</h2>
                    <h3 className="text-xl text-teal-900 font-bold pt-5"> See Detail -❯</h3>
                </div>
                
            </div> 
            <div className="carousel-item">
                <div>
                    <img src="/carosel/banner-8.png" className="rounded-box" />
                    <h1 className="text-3xl text-teal-900 font-bold"> Kopi Sejuta Jiwa</h1>
                    <h2 className="text-xl text-teal-700"> New Mobile Coffee Card Concept from Janji Jiwa</h2>
                    <h3 className="text-xl text-teal-900 font-bold pt-5"> See Detail -❯</h3>
                </div>
            </div> 
            </div>
        </div>    
    )
}