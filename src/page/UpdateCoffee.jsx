import Swal from "sweetalert2";
import recImg from "../../public/images/more/11.png";
import { NavLink, useParams } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import recImg2 from "../../public/images/more/Rectangle 4.png";
import { useEffect, useState } from "react";

const UpdateCoffee = () => {
  const [coffee, setcoffee] = useState({});
  const { id } = useParams();
//   console.log(id);

  const getCoffee = () => {
    fetch(`http://localhost:3000/coffee/${id}`)
    .then((res) => res.json())
    .then((data) => setcoffee(data));
  }
  useEffect(() => {
    getCoffee()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const coffeeName = form.coffeeName.value;
    const chefName = form.chefName.value;
    const coffeeSupplier = form.coffeeSupplier.value;
    const taste = form.taste.value;
    const coffeeCategory = form.coffeeCategory.value;
    const coffeeDetails = form.coffeeDetails.value;
    const coffeePrice = form.coffeePrice.value;
    const coffeePhotoUrl = form.coffeePhotoUrl.value;

    // console.log(coffeeName, chefName, coffeeSupplier, taste, coffeeCategory, coffeeDetails, coffeePhotoUrl)

    const newCoffee = {
      coffeeName,
      chefName,
      coffeeSupplier,
      taste,
      coffeeCategory,
      coffeeDetails,
      coffeePrice,
      coffeePhotoUrl,
    };
    console.log(newCoffee)

    fetch(`http://localhost:3000/coffee/${coffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.acknowledged) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          getCoffee()
        }
      });

    form.reset();
  };

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
        className="p-10 grid grid-cols-1 mt-3 "
        style={{ backgroundImage: `url('${recImg2}')` }}
      >
        <h1 className="text-center text-3xl font-bold mb-3">
          Update Coffee Information
        </h1>
        <p className="text-center font-extralight">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="coffee_name"
              >
                Coffee Name
              </label>

              <input
                className="border border-gray-400 p-2 w-full rounded-md placeholder:font-extralight"
                type="text"
                name="coffeeName"
                id="coffee_name"
                defaultValue={coffee.coffeeName}
                placeholder="Enter Coffee Name"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="chef_name"
              >
                Chef Name
              </label>

              <input
                className="border border-gray-400 p-2 w-full rounded-md placeholder:font-extralight"
                type="text"
                name="chefName"
                id="chef_name"
                defaultValue={coffee.chefName}
                placeholder="Enter Chef Name"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="coffee_supplier"
              >
                Coffee Supplier
              </label>

              <input
                className="border border-gray-400 p-2 w-full rounded-md placeholder:font-extralight"
                type="text"
                name="coffeeSupplier"
                id="coffee_supplier"
                defaultValue={coffee.coffeeSupplier}
                placeholder="Enter coffee suplier"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="taste"
              >
                Coffee Taste
              </label>

              <input
                className="border border-gray-400 p-2 w-full rounded-md placeholder:font-extralight"
                type="text"
                name="taste"
                id="taste"
                defaultValue={coffee.taste}
                placeholder="Enter Coffee Taste"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="coffee_category"
              >
                Coffee Category
              </label>

              <input
                className="border border-gray-400 p-2 w-full rounded-md placeholder:font-extralight"
                type="text"
                name="coffeeCategory"
                id="coffee_category"
                defaultValue={coffee.coffeeCategory}
                placeholder="Enter Coffee category"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="coffee_details"
              >
                Coffee Details
              </label>

              <input
                className="border border-gray-400 p-2 w-full rounded-md placeholder:font-extralight"
                type="text"
                name="coffeeDetails"
                id="coffee_details"
                defaultValue={coffee.coffeeDetails}
                placeholder="Enter Coffee details"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>

              <input
                className="border border-gray-400 p-2 w-full rounded-md placeholder:font-extralight "
                type="text"
                name="coffeePrice"
                id="price"
                defaultValue={coffee.coffeePrice}
                placeholder="Enter Coffee Price"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="coffee_photo_url"
              >
                Coffee Photo URL
              </label>

              <input
                className="border border-gray-400 p-2 w-full rounded-md placeholder:font-extralight "
                type="text"
                name="coffeePhotoUrl"
                id="coffee_photo_url"
                defaultValue={coffee.coffeePhotoUrl}
                placeholder="Enter Coffee photo url"
              />
            </div>
          </div>
          <button className="w-36 p-3 hover:bg-[#331A15] border border-[#331A15] text-[#331A15] hover:text-white hover:ease-in duration-300 rounded mt-5">
            Update Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
