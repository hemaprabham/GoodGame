import React, { useEffect, useState } from 'react'
import AddHeader from './AddHeader'
import axios from 'axios'



const Search = () => {
    const [data, ChangeData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

  const fetchData = () => {
    axios.get('https://api.punkapi.com/v2/beers').then((response) => {
      ChangeData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((beer) =>
    beer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <AddHeader />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {filteredData.map((value, index) => (
                <div
                  className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"
                  key={index}>
                  <div className="card">
                    <div className="card-body">
                    <img src={value.image_url} class="card-img-top" alt="..."/>
                      <h5 className="card-title">{value.name}</h5>
                      <p className="card-text">{value.tagline}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{value.first_brewed}</li>
                      <p class="card-text">{value.description}</p>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Search