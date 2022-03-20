import React  , { useState, useCallback, useEffect, useMemo }from "react";
import { Layout, Menu, Breadcrumb ,Card, Avatar } from "antd";
import m1 from '../../assets/images/m1.jpg';
import axios from 'axios';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

//style
import "./MainCont.css";

const MainCont = () => {
  const { Content } = Layout;
  const { Meta } = Card;
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

 
  const renderImages = useMemo(() => {
     return images.map(image => {
      return (
       <div className="card-cont">
        <div>
            <Card
              style={{ width: 600  , height:60}}
              cover={
                <img
                  alt="example"
                  src={m1}
                />
              }
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
            </div>
           
          </div>
           )
            })
          }, [images]);
           useEffect(() => {
        const fetchImage = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const { data } = await axios.get('https://api.unsplash.com/photos/?client_id=2680e3723c6c767b19a7369175e71cef135d6c7c220e416dd470481f9db84f81');
                setImages(data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };
        fetchImage();
    }, []);

    return (
        <div>
            <h1 className='txt'> Gallery {isLoading && "loading..."} </h1>
            {isError && <div>Something went wrong...</div>}
            <div className='image-container' >
                {renderImages}
            </div>
        </div>
    );
}
       

export default MainCont;
