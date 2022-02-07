import React from "react";
import { movies } from "../../util";
import "../../App.css";
import Card from "../UI/Card";
const MoviesCard = () => {
  return (
    <div>
      <div className="row ">
        {movies.map((movie) => {
          return (
            <div className=" p-0 col-md-3 col-sm-6 col-xs-12">
              <Card key={movie.id}>
                <img src={movie["image_url"]} className="img" alt="lol"></img>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesCard;
