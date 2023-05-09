import recImg from "../../public/images/more/Rectangle 5.png";
import { AiOutlineEye } from 'react-icons/ai'
import { HiPencil } from 'react-icons/hi'
import { FaTrash } from 'react-icons/fa'
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const SingleCoffee = ({ coffee, setCoffees }) => {

  const handleDelete = id => {
    // e.preventDefault()
    console.log(id)

    Swal.fire({
      title: 'Are you want to delete it?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-shaikatpal56-gmailcom.vercel.app/coffee/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          if(data.deletedCount > 0) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            setCoffees(prev => prev.filter(coffee => coffee._id !== id))
          }
        })
      }
    })
  }
  return (
    <div className="flex items-center justify-center p-3" style={{ backgroundImage: `url('${recImg}')` }}>
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
          <div className="btn-group btn-group-vertical space-y-3 mr-2">
            <button className="btn bg-[#D2B48C] border-none"><AiOutlineEye /></button>
            <NavLink to={`/update-coffee/${coffee._id}`} className="btn bg-[#3C393B] border-none"><HiPencil /></NavLink>
            <button className="btn bg-[#EA4744] border-none" onClick={() => handleDelete(coffee._id)}><FaTrash /></button>
          </div>
        </div>
      </div>
  );
};

export default SingleCoffee;
