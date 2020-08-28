import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loading from "./Loading";

const Giphy = (props) => {
    console.log(props.text)
    const [data,setData] = useState([])
    const [isLoading, setIsLoading]=useState(false)
    useEffect(() => {
        const fetchData = async () => {
               setIsLoading(true)
             const results= await axios("https://api.giphy.com/v1/gifs/search",{
                params: {
                    api_key:"sGe5NnN1lE6wzIt6ujB3d2ICOcICl0QR",
                    q:props.text

                }
            },[]);

            //console.log(results);
            setData(results.data.data);

            setIsLoading(false)

        };

        fetchData()

    },[props.text]);
    
    const renderGifs = () => {
          if(isLoading){
              return <Loading/>;
          }
        return data.map(el => {
            
            return (
                <div key ={el.id} className="gif">
                    <img src={el.images.fixed_height.url}/>
                    
                </div>
            );
        });
    };
    return <div className="container gifs">{renderGifs()}</div>;
};

export default Giphy;