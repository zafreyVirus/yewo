// const MapSection = () => {
//     return (
//       <div className="map-section py-5">
//         <div className="text-center mb-4">
//           <h2>
//             Our <span  style={{ color: 'steelblue' }}>Location</span>
//           </h2>
//           <p>
//             Muwawane Village, Chiwamba EPA, TA Chimutu, Lilongwe, Malawi.
//           </p>
//         </div>
//         <div className="d-flex justify-content-center">
//           <iframe
//             style={{ border: 0, width: "100%", height: "350px" }}
//             src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10000!2d33.81568729867308!3d-13.955098130901163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1699545153407"
//             frameBorder="0"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     );
//   };
  
//   export default MapSection;
  
  // const MapSection = () => {
  //   return (
  //     <div className="map-section py-5">
  //       <div className="text-center mb-4">
  //         <h2>
  //           Our <span style={{ color: 'steelblue' }}>Location</span>
  //         </h2>
  //         <p>
  //           Muwawane Village, Chiwamba EPA, TA Chimutu, Lilongwe, Malawi.
  //         </p>
  //       </div>
  
  //       <div className="d-flex justify-content-center">
  //         <iframe
  //           style={{ border: 0, width: "100%", height: "350px" }}
  //           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12347.046894920196!2d33.88259!3d-13.92770!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921db1234567890%3A0x1234567890abcdef!2sYour%20Location!5e0!3m2!1sen!2sus!4v1699545153407"
  //           frameBorder="0"
  //           allowFullScreen
  //           aria-hidden="false"
  //           tabIndex="0"
  //         ></iframe>
  //       </div>
  //     </div>
  //   );
  // };
  
  // export default MapSection;


  // const MapSection = () => {
  //   const coordinates = { lat: -13.92770, lng: 33.88259 };
  
  //   // URL for the Google Maps iframe with the marker on the specified coordinates
  //   const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${coordinates.lat},${coordinates.lng}`;
  
  //   // URL for the direction link to get directions to the location
  //   const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
  
  //   return (
  //     <div className="map-section py-5">
  //       <div className="text-center mb-4">
  //         <h2>
  //           Our <span style={{ color: 'steelblue' }}>Location</span>
  //         </h2>
  //         <p>
  //           Muwawane Village, Chiwamba EPA, TA Chimutu, Lilongwe, Malawi.
  //         </p>
  //       </div>
  //       <div className="d-flex justify-content-center">
  //         <iframe
  //           style={{ border: 0, width: "100%", height: "350px" }}
  //           src={mapUrl}
  //           frameBorder="0"
  //           allowFullScreen
  //         ></iframe>
  //       </div>
  
  //       {/* Direction link */}
  //       <div className="text-center mt-4">
  //         <a
  //           href={directionsUrl}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="btn btn-primary"
  //         >
  //           Get Directions
  //         </a>
  //       </div>
  //     </div>
  //   );
  // };
  
  // export default MapSection;

  const MapSection = () => {
    return (
      <div className="map-section py-5">
        <div className="text-center mb-4">
          <h2>
            Our <span  style={{ color: 'steelblue' }}>Location</span>
          </h2>
          <p>
          Muwawane Village, Chiwamba EPA, TA Chimutu, Lilongwe, Malawi.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <iframe
            style={{ border: 0, width: "100%", height: "350px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991364.600578689!2d32.66304016113282!3d-13.927735916521462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d27bc3d94815%3A0xbe090763acc4acda!2sLilongwe!5e0!3m2!1sen!2smw!4v1732104564784!5m2!1sen!2smw"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default MapSection;
  
  
