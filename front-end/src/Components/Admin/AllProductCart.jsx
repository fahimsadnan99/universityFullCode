import React from 'react'
import Swal from "sweetalert2";



const AllProductCart = () => {
    const img =
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c291cmNlJTIwY29kZXxlbnwwfHwwfHw%3D&w=1000&q=80";
   
   
    const handleDelete = () => {
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
            Swal.fire("Deleted!", "Your Product has been deleted.", "success");
          }
        });
    }
    
    return (
      <div className=" my-2">
        <div className="cart_Card">
                <img src={img} alt="img" className="img-fluid" width={"70px"}></img>
                <h5>Name</h5>
          <h5>Price</h5>
          <button className="btn btn-danger" onClick={handleDelete}>
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    );
}

export default AllProductCart
