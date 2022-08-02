import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Catalog = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://628905bd7af826e39e67d760.mockapi.io/pets')
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(post.id);
  return (
    <div className="catalog">
      <div className="container">
        <div className="grid-items">
          {items.map((post) => (
            <div className="grid-item" key={post.id}>
              <Link to={post.category + '/' + post.id}>
                <img alt={post.name} className="grid-image" src={post.imageUrl} />
              </Link>
              <p>{post.description}</p>
              <span>{post.contact}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
