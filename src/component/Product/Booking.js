import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Data";

const Booking = () => {
  const { id } = useParams();
  const productData = data;

  // const [giftItem, setGiftItem] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  const product = productData.find((item) => item.id === parseInt(id));
  console.log(product);

  return (
    <div className="min-h-screen container mx-auto px-10">
      <div className="flex">
        <div className="w-36 h-36 rounded-full overflow-hidden border">
          <img
            className="w-full h-full object-contain"
            src={product.image}
            alt=""
          />
        </div>
        <div>
          <h3>{product.title}</h3>
          <h4>{product.category}</h4>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
