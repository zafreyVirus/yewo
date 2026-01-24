const VideoSection = () => {
    return (
      <div className="video-section text-center">
        <h2>
          <span className="text-blue-800">Our</span> Story
        </h2>
        <div
          className="video-container mx-auto"
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "500px",
            overflow: "hidden",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/j5x4AAMsPwE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: "none" }}
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default VideoSection;
  