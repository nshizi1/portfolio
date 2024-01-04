import React from 'react'
import { GalleryData } from './galleryData';
import { useEffect, useState} from "react";

function Portfolio() {

    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        setData(GalleryData);
        setCollection([...new Set(GalleryData.map((item) => item.title))])
    },[])

    const galleryFilter = (itemData) => {
        const filterData = GalleryData.filter((item)=> item.title === itemData);
        setData(filterData);
    }
  return (
    <section id="portfolio">
        <div className="page">
          <h3>05</h3>
          <div className="line"></div>
        </div>
        <div className="contents">
            <div className="title">
                <p>Some of my work</p>
                <h2>Portfolio</h2>
                <div className="line"></div>
            </div>
            <div className="galleryWrapper">
                <div className="filterItem">
                    <ul>
                        <li><button onClick={()=> setData(GalleryData)}>All</button></li>
                        {
                            collection.map((item)=><li><button onClick={()=>{galleryFilter(item)}}>{item}</button></li>)
                        }
                    </ul>
                </div>
                <div className="galleryContainer">
                    {data.map((item) => 
                        <div className='galleryItem'  key={item.id} > 
                            <img src={require(`../../images/portfolio/${item.image}`)} alt={item.title} />
                        </div> 
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio
