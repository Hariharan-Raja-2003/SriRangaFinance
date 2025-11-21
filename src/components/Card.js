function Card(props) {
  const handleImageError = (e) => {
    // Fallback to a placeholder if image fails to load
    e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrrvS1K5cZnlv1bdNqogdqgMNz8Rlu_GWXJw&s";
  };

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img 
          alt={props.title} 
          src={props.img} 
          className="card-image" 
          loading="lazy"
          onError={handleImageError}
        />
      </div>
      <div className="card-content">
        <div className="text-center">
          <h3 className="card-title">{props.title}</h3>
        </div>
        <div className="p-3">
          <p className="card-text">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
