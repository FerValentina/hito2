import Header from '../components/Header'
import CardPizza from '../components/CardPizza'

const Home = () => {
  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-margarita-1080x671.jpg"
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-y-verduras-1080x671.jpg"
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
