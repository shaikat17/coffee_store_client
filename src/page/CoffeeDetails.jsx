import { NavLink, useParams } from "react-router-dom";
import recImg from "../../public/images/more/11.png";
import recImg2 from "../../public/images/more/Rectangle 4.png";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useEffect, useState } from "react";

const CoffeeDetails = () => {
  const [coffee, setCoffee] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://coffee-store-server-shaikatpal56-gmailcom.vercel.app/coffee/${id}`
    )
      .then((res) => res.json())
      .then((data) => setCoffee(data));
  }, []);
  return (
    <div
      className="flex flex-col md:p-12 p-5 "
      style={{ backgroundImage: `url('${recImg}')` }}
    >
      <NavLink className="flex items-center gap-2" to="/">
        <BiLeftArrowAlt size={"1.5rem"} />
        Back to Home
      </NavLink>
      <div
        className="p-10 space-y-5 grid grid-cols-1 sm:grid-cols-2 place-items-center mt-3 "
        style={{ backgroundImage: `url('${recImg2}')` }}
      >
        <img src={coffee.coffeePhotoUrl} alt="" />
        <div className="space-y-2">
          <p className="font-medium">
            Name: <span className="font-light">{coffee.coffeeName}</span>
          </p>
          <p className="font-medium">
            Chef: <span className="font-light">{coffee.chefName}</span>
          </p>
          <p className="font-medium">
            Supplier: <span className="font-light">{coffee.coffeeSupplier}</span>
          </p>
          <p className="font-medium">
            Taste: <span className="font-light">{coffee.taste}</span>
          </p>
          <p className="font-medium">
            Category: <span className="font-light">{coffee.coffeeCategory}</span>
          </p>
          <p className="font-medium">
            Details: <span className="font-light">{coffee.coffeeDetails}</span>
          </p>
          <p className="font-medium">
            Price: <span className="font-light">{coffee.coffeePrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
