const Gallery = () => {
    const images = [
      { src: "/assets/img/11.jpg", alt: "Fresh Local Produce" },
      { src: "/assets/img/2.JPG", alt: "Factory Worker Inspecting Products" },
      { src: "/assets/img/3.jpg", alt: "Fresh Local Produce" },
      { src: "/assets/img/4.jpg", alt: "Farmers Harvesting Crops" },
      { src: "/assets/img/5.JPG", alt: "Farmers Harvesting Crops" },
      { src: "/assets/img/6.JPG", alt: "Farmers Harvesting Crops" },
      { src: "/assets/img/7.jpg", alt: "Farmers Harvesting Crops" },
      { src: "/assets/img/8.JPG", alt: "Farmers Harvesting Crops" },
    ];
  
    return (
      <div className="gallery-section py-5">
        <div className="container text-center">
          <h2>
            <span style={{ color: 'steelblue' }}>Our</span> Gallery
          </h2>
          <div className="row g-4 mt-4">
            {images.map((image, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-6">
                <div className="card p-0 border-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="card-img-top img-fluid"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Gallery;
  