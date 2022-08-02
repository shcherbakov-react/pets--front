import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';

function Card() {
  const [item, setItem] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://628905bd7af826e39e67d760.mockapi.io/api/v1/pets/${id}`)
      .then((res) => {
        setItem(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <p></p>
      <div className="grid-item" key={item.id}>
        <img alt={item.name} className="grid-image" src={item.imageUrl} />
        <p>{item.description}</p>
        <span>{item.contact}</span>
      </div>
    </div>
  );
}

export default Card;
