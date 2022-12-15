import axios from 'axios';
import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
    
    export default function Edit() {
        const param = useParams();
        const [deskripsi, setDeskripsi] = useState("");
        const [name, setName] = useState("");
        const [image, setImage] = useState("");
        const [harga, setHarga] =useState("");

        const history = useHistory();

        useEffect(() => {
            axios.get("http://localhost:8000/daftarMakanan/" + param.id)
            .then((response) =>{
                const newFood = response.data;
                setName(newFood.name);
                setDeskripsi(newFood.deskripsi);
                setImage(newFood.image);
                setHarga(newFood.harga);
            })
            .catch((error) => {
                alert("terjadi kesalahan sir " + error)
            })
        }, []);

        const submitActionHandler = async (e) => {
            e.preventDefault();

            await Swal.fire({
                title: 'Do you want to save the changes?',
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
              }).then((result) => {
          
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  // Async-await bisa dikatakan sebagai cara mudah menggunakan JavaScript Promise yang agak sulit dipahami.
                  axios.put("http://localhost:8000/daftarMakanan/" + param.id, {
                    name: name,
                    deskripsi: deskripsi,
                    image: image,
                    harga: harga
                  })
                  Swal.fire('Saved!', '', 'success')
                } else if (result.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info')
                }
              })
                .then(() => {
                  // berfungsi ngepush secara otomatis 
                  history.push("/administrator");
                })
                .catch((error) => {
                  alert("Terjadi kesalahan " + error)
                })
        }

      return (
        <div className="edit mx-5">
        <div className="container my-5">
          <form onSubmit={submitActionHandler}>
            <div className="name mb-3">
              <Form.Label>
                <strong>Nama makanan</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control
                  placeholder="Nama makanan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            </div>
  
            <div className="place-of-birth mb-3">
              <Form.Label>
                <strong>Deskripsi</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control
                  placeholder="Deskripsi"
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)} />
              </InputGroup>
            </div>
  
            <div className="place-of-birth mb-3">
              <Form.Label>
                <strong>Image</strong>
              </Form.Label>
              <div className="d-flex gap-3">
                <InputGroup className="d-flex gap-3">
                  <Form.Control
                    placeholder="Url image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)} />
                </InputGroup>
              </div>
            </div>
            <div className="place-of-birth mb-3">
              <Form.Label>
                <strong>Harga</strong>
              </Form.Label>
              <div className="d-flex gap-3">
                <InputGroup className="d-flex gap-3">
                  <Form.Control
                    placeholder="Harga"
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)} />
                </InputGroup>
              </div>
            </div>
            <div className="d-flex justify-conten-end align-items-center mt-2">
              <button className="buton btn" >
                Save
              </button>
            </div>
          </form>
        </div>
  
      </div>
      )
    }
    