import React from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style/Menu.css";
import {useEffect ,useState } from 'react'

export default function Menu() {
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

  return (
   <div className="menu  grid grid-cols-4 gap-3">
    {makanan.map((food) => {
      return (
      <Card key={food.id} style={{ width: '450px' }}>
      <Card.Img variant="top" src={food.image} />
      <Card.Body>
        <Card.Title>{food.name}</Card.Title>
        <br />
        <Card.Text>{food.deskripsi}</Card.Text>
        <br />
        <Card.Text>Rp.{food.harga}</Card.Text>
        <br />
        <Button variant="primary">Beli</Button>
      </Card.Body>
    </Card>
    )
    })}
   </div>
  )
}
