function Card({ title, img, text }) {
  const handleImageError = (e) => {
    e.target.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrrvS1K5cZnlv1bdNqogdqgMNz8Rlu_GWXJw&s";
    e.target.style.objectFit = "cover";
  };

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img
          alt={title}
          src={img}
          className="card-image"
          loading="lazy"
          onError={handleImageError}
        />
      </div>

      <div className="card-content p-3">
        <h3 className="card-title text-center">{title}</h3>

        <p className="card-text mt-2">{text}</p>
      </div>
    </div>
  );
}

export default Card;
