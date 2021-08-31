import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "components/Loader/Loader";
import withData from "hocs/withData";

function MovieList(props) {
  return (
    <div>
      {props.data.map((movie) => {
        return (
          <div className="card" key={movie.maPhim}>
            <div className="card-body">
              <h4 className="card-title">{movie.tenPhim}</h4>
              <p className="card-text">{movie.moTa}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// const EnhanceMovieList = withData(
//   MovieList,
//   "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
// );

// export default EnhanceMovieList;

export default withData(MovieList);
