import axios from 'axios';
import "../style/Home.css";
import Swal from 'sweetalert2';
import React, {useEffect ,useState } from 'react'

export default function Home() {
    const [makanan, setMakanan] = useState([]);

    const getAll = () => {
        axios.get("http://localhost:8000/daftarMakanan")
        .then((res) => {
            setMakanan(res.data);
        }).catch((error) => {
            alert("Terjadi kesalahan " + error)
        })
    }

    useEffect(() => {
        getAll();
    }, [])

    const deleteFood = async (id) => {
        // Async-await bisa dikatakan sebagai cara mudah menggunakan JavaScript Promise yang agak sulit dipahami.


        await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete("http://localhost:8000/daftarMakanan/" + id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

            }
        }) .then(() => {
                window.location.reload();
            });
    }

  return (
    <div className="container my-5 bs">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama makanan</th>
                    <th>Deskripsi</th>
                    <th>Harga</th>
                    <th>Image</th>
                    {localStorage.getItem("id") !== null ? <th>Action</th> : <></>}
                </tr>
            </thead>
            <tbody>
                {makanan.map((food, index) =>(
                    <tr key={food.id}>
                        <td>{index + 1}</td>
                        <td>{food.name}</td>
                        <td>{food.deskripsi}</td>
                        <td>Rp.{food.harga}</td>
                        <td>
                            <span>
                                <img style={{height: "100px"}} src={food.image} alt="" />
                            </span>
                        </td>
                        {localStorage.getItem("id") !== null ? <td>
                                <a href={"/edit/" + food.id}>
                                    <button
                                        variant="warning"
                                        className="mx-1"
                                        style={{ backgroundColor: "green" }} >
                                        Edit
                                    </button>
                                </a>
                                | |
                                <button
                                    variant="danger"
                                    className="mx-1"
                                    style={{ backgroundColor: "red" }}
                                    onClick={() => deleteFood(food.id)}
                                >
                                    Delete
                                </button>
                            </td> : <></>}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
