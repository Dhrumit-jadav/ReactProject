import "./Home.css"
function Home() {
    return (
          <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <img src="https://c4.wallpaperflare.com/wallpaper/796/90/570/car-vehicle-super-car-supercars-lamborghini-hd-wallpaper-thumb.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="500">
              <img src="https://wallpaperaccess.com/full/48831.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://c4.wallpaperflare.com/wallpaper/525/771/625/car-vehicle-super-car-supercars-lamborghini-hd-wallpaper-thumb.jpg" className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    )
  }
  
  export default Home;