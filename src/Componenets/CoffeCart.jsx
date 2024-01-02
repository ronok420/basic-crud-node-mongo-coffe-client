import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeCart = ({ coffe, setDeleteCoffe, deleteCoffe }) => {
  const { _id, name, quantity, supplier, taste, category, details, photoUrl } =
    coffe;
  // console.log(deleteCoffe);
  // console.log(_id);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:7000/coffe/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(deleteCoffe);
            console.log(data.deletedCOunt);
            const remaining = deleteCoffe.filter(
              (coffee) => coffee._id !== _id
            );
            setDeleteCoffe(remaining);
            console.log(remaining);
            if (data.deletedCOunt > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              console.log(deleteCoffe);
            }
          });
      }
    });
  };

  return (
    <div className="">
      <div className="card card-side bg-base-100 shadow-xl bg-red-50 ">
        {/* <figure><img src={photoUrl} alt="Movie" /></figure> */}
        <figure>
          <img
            src={photoUrl}
            alt="Movie"
            className="md:h-20 md:w-15 h-20 w-15 object-cover"
          />
        </figure>
        <div className=" flex justify-between w-full pr-3">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{details}</p>
            <p>taste:{taste}</p>
          </div>

          <div className="card-actions justify-end">
            <div className="btn-group flex flex-col space-y-5">
              <button
                style={{ backgroundColor: "#808B96  " }}
                className="btn btn-active btn-sm"
              >
                view
              </button>
              <Link to={`updatecoffe/${_id}`}>
                {" "}
                <button className="btn btn-sm bg-green-200">edit</button>
              </Link>

              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-sm bg-red-400"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeCart;
