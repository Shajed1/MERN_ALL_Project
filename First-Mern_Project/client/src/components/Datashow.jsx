import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader.jsx";
import {Link, useNavigate} from "react-router-dom";

const Datashow = () => {

   let navigate=useNavigate();
    const [rows, setRows] = useState([]); // খালি অ্যারে দিয়ে শুরু

    const Readpage = async () => {
        try {
            let res = await axios.get("http://localhost:3030/api/readdata");
            console.log("Full res.data:", res.data);
            setRows(res.data.rows);

        } catch (err) {
            console.error("Error details:", err.response || err.message);
        }
    }
    useEffect(() => {
        (async ()=>{
            await Readpage()
        })()
    },[])

    const Deletebtn=async (id)=>{

        await axios.delete(`http://localhost:3030/api/delete/${id}`);
        await Readpage()
    }
    const btnandgo = (id) => {

        navigate(`/update/${id}`);
    }
    return (
        <div className="container mt-4">
            <Link to='/create' className="btn btn-primary btn-sm">Click</Link>
            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Discount Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {rows.length === 0 ? (
                    <Loader/>
                ) : (
                    rows.map((row, index) => (
                        <tr key={index}>
                            <td>{row.title}</td>
                            <td>{row.price}TK</td>
                            <td>{row.discount}%</td>
                            <td>{row.discountPrice}TK</td>
                            <td>
                                <Button  onClick={()=>btnandgo(row["_id"])} variant="warning" size="sm" className="me-2">
                                    Edit
                                </Button>
                                <Button onClick={()=>Deletebtn(row["_id"])} variant="danger" size="sm">
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))
                )}

                </tbody>
            </Table>
        </div>
    );
};

export default Datashow;