import recImg from "../../public/images/more/Rectangle 5.png";
import { AiOutlineEye } from 'react-icons/ai'
import { HiPencil } from 'react-icons/hi'
import { FaTrash } from 'react-icons/fa'

const SingleCoffee = ({ coffee }) => {
  return (
    <div className="flex items-center justify-center" style={{ backgroundImage: `url('${recImg}')` }}>
      <figure>
        <img
          src={coffee.coffeePhotoUrl}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <p>Name: {coffee.coffeeName}</p>
        <p>Chef: {coffee.chefName}</p>
        <p>Price: {coffee.coffeePrice} Taka</p>
        </div>
        <div className="card-actions">
          <div className="btn-group btn-group-vertical">
            <button className="btn bg-[#D2B48C] border-none"><AiOutlineEye /></button>
            <button className="btn bg-[#3C393B] border-none"><HiPencil /></button>
            <button className="btn bg-[#EA4744] border-none"><FaTrash /></button>
          </div>
        </div>
      </div>
  );
};

export default SingleCoffee;
