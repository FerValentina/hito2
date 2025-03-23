const CardPizza = ({ name, price, ingredients, img }) => {
    return (
      <div className="card h-100 shadow-sm">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Pizza {name}</h5>
          <p><strong>Ingredientes:</strong></p>
          <ul className="text-warning">
            {ingredients.map((ing, i) => (
              <li key={i}>🍕 {ing}</li>
            ))}
          </ul>
          <p><strong>Precio:</strong> ${price.toLocaleString("es-CL")}</p>
          <div className="mt-auto d-flex justify-content-between">
            <button className="btn btn-outline-secondary">Ver Más 👀</button>
            <button className="btn btn-outline-success">Añadir 🛒</button>
          </div>
        </div>
      </div>
    )
  }
export default CardPizza  