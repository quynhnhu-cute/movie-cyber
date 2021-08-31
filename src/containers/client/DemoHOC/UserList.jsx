
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "components/Loader/Loader";
import withData from "hocs/withData";

 function UserList({data}) {
    return (
      <div>
        {data.map((user) => {
          return (
            <div className="card" key={user.email}>
              <div className="card-body">
                <h4 className="card-title">{user.hoTen}</h4>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
   
}

export default withData(UserList);
