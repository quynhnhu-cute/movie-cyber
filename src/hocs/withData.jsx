import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Loader from 'components/Loader/Loader';
const withData = (WrappedComponent) =>{
    return props =>{
        const [data, setData] = useState([]);

        useEffect(() => {
          axios({
            url: props.dataSource,
            method: "GET",
          })
            .then((res) => {   
                setData(res.data.slice(0, 10));
            })
            .catch((error) => {
              console.log(error);
            });
        }, []);
      
        data.length < 1 && <Loader/>
        return <WrappedComponent data={data} {...props}/>;
    }
}

export default withData;