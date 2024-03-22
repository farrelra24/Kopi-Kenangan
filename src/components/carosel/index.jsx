export default function Carosel(){
    return(
      <div className="carousel carousel-center w-full h-[400px] gap-5 bg-white">
        <div className="carousel-item">
            <img src="/carosel/banner-1.jpg" className="rounded-box" />
        </div> 
        <div className="carousel-item">
            <img src="/carosel/banner-2.jpg" className="rounded-box" />
        </div> 
        <div className="carousel-item">
            <img src="/carosel/banner-3.jpg" className="rounded-box" />
        </div> 
        <div className="carousel-item">
            <img src="/carosel/banner-4.jpg" className="rounded-box" />
        </div> 
     </div>
    )
}