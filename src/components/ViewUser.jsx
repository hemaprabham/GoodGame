import React, { useEffect, useState } from 'react'
import AddHeader from './AddHeader'
import axios from 'axios'

const ViewUser = () => {
    const [data,ChangeData]=useState([])
    const fetchData=()=>{
        axios.get("https://api.punkapi.com/v2/beers").then(
            (response)=>{
                ChangeData(response.data)
            }
            )
        }
        useEffect(()=>{fetchData()},[])
  return (
    <div>
        <AddHeader/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
        
        {data.map(
            (value,index)=>{
                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"> 
                <div class="card">
                <div class="card-body">
                <img src={value.image_url} class="card-img-top" alt="..."/>
                  <h5 class="card-title">{value.name}</h5>
                  <p class="card-text">{value.tagline}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{value.first_brewed}</li>
                  <p class="card-text">{value.descriptionl}</p>
                  
                  
                </ul>
                
              </div>
              </div>
            }
        )}

            </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default ViewUser