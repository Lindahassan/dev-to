import React ,{ useState }from "react";
import { List, Avatar, Image } from "antd";
import home from '../../assets/images/home.png';
import lis from '../../assets/images/lis.png';
import pod from '../../assets/images/pod.png';
import vid from '../../assets/images/vid.png';
import tag from '../../assets/images/tag.png';
import Faq  from '../../assets/images/Faq.png';
import shop from '../../assets/images/shop.png';
import spon from '../../assets/images/spon.png';
import about from '../../assets/images/about.png';
import cont  from '../../assets/images/cont.png';
import {  Button } from "antd";
//style
import "./LeftSide.css";

const LeftSide = () => {
  const data = [
    {
      title: "Home",
      img: home,
    },
    {
      title: "Lisiting",
      img: lis,
    },
    {
      title: "Podcasts",
      img:pod ,
    },
    {
      title: "Videos",
      img:vid ,
    },
    {
      title: "Tags",
      img:tag ,
    },
    {
      title: "FAQ",
      img:Faq ,
    },
    {
      title: "DEV Shop",
      img:shop ,
    },
    {
      title: "Sponser",
      img:spon,
    },
    {
      title: "About",
      img:about ,
    },
    {
      title: "Contact",
      img:cont,
    },
  ];
  const [visible, setVisible] = useState(false);
  
  return (
  
      <div className="leftcont">
        <h2>DEV Community is a community of 808,259 amazing developers</h2>
        <p>
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>
        <div className="c-cont1">
        <Button  className="antbtn1">Create account</Button>
      <Button   className="antbtn"> Login</Button>
      
       
      </div>
        <div className="list">
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Image preview={{ visible: false }} src={item.img} />}
                  title={<a href="">{item.title}</a>}
                />
              </List.Item>
            )}
          />
          ,
        </div>
      </div>
    
  );
};

export default LeftSide;
