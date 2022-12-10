import React from 'react'
import "../style/Dashboard.css"

export default function Dashboard() {
    return (
        <div>
            <div>

            </div>
       <div id="carouselExampleIndicators" className="carousel " data-bs-ride="true"  style={{width:"900px"}}  >
        <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner slide" >
                <div className="carousel-item active">
                    <img src="https://lelogama.go-jek.com/post_featured_image/promo-ramadhan-go-food-extension.jpg" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item">
                    <img src="https://lelogama.go-jek.com/post_featured_image/promo-linkaja-gofood.jpg" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item">
                    <img src="https://lelogama.go-jek.com/post_featured_image/promo-kesebelasan-Anniv_GoFood_Blog-Banner_1456x818_200rb.jpg" className="d-block w-100" alt="" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
</div>
    )
}
