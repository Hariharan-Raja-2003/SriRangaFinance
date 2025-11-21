function Card({ title, img, text }) {
  const handleImageError = (e) => {
    e.target.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrrvS1K5cZnlv1bdNqogdqgMNz8Rlu_GWXJw&s";
  };

  return (
    <div className="card service-card">
      <div className="card-image-wrapper">
        <img
          src={img}
          alt={title}
          className="card-image"
          loading="lazy"
          onError={handleImageError}
        />
      </div>

      <div className="card-content">
        <h3 className="card-title text-center">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;
