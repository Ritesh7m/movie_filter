import React, { useState } from "react";
import { movies } from "./data.jsx";
import "./home.css";

const Home = () => {
  const [movieList, setMovieList] = useState(movies);

  const  filterByCatogory = (cat)=>{
    setMovieList(movies.filter((data)=>data.category==cat))
  }
  return (
    <>
    <div className="my-3 mx-auto btnContainer" >
      <div className="text-center ">
      <button onClick={()=>setMovieList(movies)} type="button" class="btn btn-outline-primary mx-3">
        All
      </button>
      <button onClick={()=>filterByCatogory("Action")} type="button" class="btn btn-outline-secondary mx-3">
        Action
      </button>
      <button onClick={()=>filterByCatogory("Thriller")} type="button" class="btn btn-outline-success mx-3">
        Thriller
      </button>
      <button onClick={()=>filterByCatogory("Animation")} type="button" class="btn btn-outline-danger mx-3">
        Animation
      </button>
      <button onClick={()=>filterByCatogory("Horror")} type="button" class="btn btn-outline-warning mx-3">
        Horror
      </button>
      <button onClick={()=>filterByCatogory("Drama")} type="button" class="btn btn-outline-info mx-3">
        Drama
      </button>
      <button onClick={()=>filterByCatogory("Sci-Fi")} type="button" class="btn btn-outline-light mx-3">
        Sci-Fi
      </button>
      


      </div>
    
    </div>
     

      <div className="main">
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: "250px" }}>
            <div className="content">
              <img src={data.poster_path} />
              <h5>{data.title}</h5>
              <p>{data.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
