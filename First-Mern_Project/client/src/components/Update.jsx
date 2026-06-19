import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";


const Update = () => {

const {id} = useParams();
    const [rows, setRows] = useState([]); // খালি অ্যারে দিয়ে শুরু

    const Readpage = async () => {
        try {
            let res = await axios.get(`http://localhost:3030/api/readdatabyId/${id}`);
            setRows(res.data['rows'][0]);

        } catch (err) {
            console.error("Error details:", err.response || err.message);
        }
    }
    useEffect(() => {
        (async ()=>{
            await Readpage()
        })()
    },[])

   const navigate = useNavigate();

    const UpdateData=async(e)=>{
        e.preventDefault();
        let formdata=new FormData(e.target);
        let title=formdata.get('title');
        let price=formdata.get('price');
        let discount=formdata.get('discount');
        let discountPrice=formdata.get('discountPrice');
        await axios.put(`http://localhost:3030/api/updateData/${id}`, {title: title,price:parseFloat(price),discount:discount,discountPrice:parseFloat(discountPrice)})
        navigate("/")
    }


    return (
        <div className="container mt-5">

            <form onSubmit={UpdateData}>
                <input
                    defaultValue={rows !==null ?(rows["title"]):("")}
                    type="text"
                    className="form-control mb-3"
                    placeholder="Title"
                    name="title"
                />

                <input
                    defaultValue={rows !==null ?(rows["price"]):("")}
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
                    defaultValue={rows !==null ?(rows["discountPrice"]):("")}
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

export default Update;