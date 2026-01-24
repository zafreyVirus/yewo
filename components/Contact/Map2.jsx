const MapSection = () => {
    return (
      <div className="map-section py-5">
        <div className="text-center mb-4">
          <h2>
            Our <span  style={{ color: 'steelblue' }}>Location</span>
          </h2>
          <p>
          Synergy Co-Works, Plot 526, Songwe Street, New Area 12, Lilongwe, Malawi.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <iframe
            style={{ border: 0, width: "100%", height: "350px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247811.45398884712!2d33.60650615528462!3d-13.955392274642291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19202d8c77b7aa03%3A0xf0367f89e4f1c3da!2sSynergy%20CoWorks!5e0!3m2!1sen!2smw!4v1732103912015!5m2!1sen!2smw"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default MapSection;
  