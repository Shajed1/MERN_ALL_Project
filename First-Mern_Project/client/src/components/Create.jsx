import axios from "axios";
import {useNavigate} from "react-router-dom";


const CreatePage = () => {

const navigate = useNavigate();

const Forsubmit=async(e)=>{
       e.preventDefault();
       let formdata=new FormData(e.target);
       let title=formdata.get('title');
       let price=formdata.get('price');
       let discount=formdata.get('discount');
       let discountPrice=formdata.get('discountPrice');
       await axios.post("http://localhost:3030/api/productCeate", {title: title,price:parseFloat(price),discount:discount,discountPrice:parseFloat(discountPrice)})
    navigate("/")
}


    return (
        <div className="container mt-5">

          <form onSubmit={Forsubmit}>
              <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Title"
                  name="title"
              />

              <input
                  type="number"
                  className="form-control mb-3"
                  placeholder="Price"
                  name="price"
              />

              <select name="discount">
                  <option>Select One</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
              </select>

              <input
                  type="number"
                  className="form-control mb-3"
                  placeholder="Discount Price"
                  name="discountPrice"
              />

              <button type="submit" className="btn btn-primary">
                  Submit
              </button>
          </form>

        </div>
    );
};

export default CreatePage;