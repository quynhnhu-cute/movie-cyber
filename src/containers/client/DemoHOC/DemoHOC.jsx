import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import axios from "axios";
import Loader from "components/Loader/Loader";
import MovieList from "./MovieList";

export default function DemoHOC() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {" "}
          <UserList dataSource="https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"/>
        </div>
        <div className="col-6">
          <MovieList dataSource="https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"/>
        </div>
      </div>
    </div>
  );
}
