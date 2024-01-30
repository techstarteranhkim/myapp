function Gallery() {
  const imageUrls = [
    "https://t4.ftcdn.net/jpg/00/97/58/97/240_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
    "https://t3.ftcdn.net/jpg/03/31/21/08/240_F_331210846_9yjYz8hRqqvezWIIIcr1sL8UB4zyhyQg.jpg",
    "https://t4.ftcdn.net/jpg/01/02/62/81/240_F_102628155_ZPiAaNEDRSZU2S0LAkbcgvwLyMmr9c2Y.jpg",
    // ...
  ];

  return (
    <div>
      <h2 className="centered-text">Catmazing Galerie</h2>
      <div className="grid-container">
        {imageUrls.map((url, index) => (
          <div key={index} className="image-container">
            <img
              src={url}
              alt={`Gallery image ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
