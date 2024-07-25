import useCart from "../../hooks/useCart";
import {FaTrash} from "react-icons/fa";
import Swal from 'sweetalert2'

function CartPage() {
  const [cart, refetch] = useCart();
  console.log(typeof cart);
  // console.log("this is cart data",cart)

    // handleDelete item from cart
    const handleDelete = (item) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/carts/${item._id}`, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success"
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "There was an error deleting your item.",
                icon: "error"
              });
            }
          })
          .catch(error => {
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting your item.",
              icon: "error"
            });
          });
        }
      });
    };
    
  return (
    <div className="section-container">
      {/* banner */}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="py-36 flex flex-col items-center justify-center gap-8">
          {/* texts */}
          <div className="px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Items Added to the <span className="text-green">Cart</span>
            </h2>
          </div>
        </div>
      </div>

      {/* cart table */}
      <dir>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-green text-white rounded-sm">
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={item.image} alt="Food image" />
                          </div>
                        </div>
                        <div>
                          <div className="text-sm opacity-50">
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-semibold">
                      {item.name}
                    </td>
                    <td>
                      {item.quantity}
                    </td>
                    <td>
                      {item.price}
                    </td>
                    <th>
                      <button className="btn btn-ghost text-red btn-xs" onClick={()=> handleDelete(item)}>
                        <FaTrash/>
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </dir>
    </div>
  );
}

export default CartPage;
