import React from "react";
import { Image, Card, Space } from "antd";
import codeland from "../../assets/images/codeland.png";
import micro from "../../assets/images/micro.webp";
import "./RightSide.css";

const RightSide = () => {
  const [random, setRandom] = React.useState();

  return (
    <div>
      <div>
        <Space size={12}>
          <Image
            width={400}
            src={codeland}
            placeholder={<Image preview={false} src={codeland} width={400} />}
          />{" "}
        </Space>
      </div>
      <div className="site-card">
        <Card  className="right" title="Listings" bordered={false} style={{ width: 300 }}>
          <p >
            <div  >
              March 24th: Mastering Global Asset Tracking with a Cellular
              Notecard and DatacakeMarch 24th: Mastering Global Asset Tracking
              with a Cellular Notecard and Datacake
            </div>
          </p>
          <p>
            <div>
              Need a lady speaker for an online session for Womens Day '22
            </div>
          </p>
          <p>
            <div>A JS newsletter that 72k developers love</div>
          </p>
        </Card>
      </div>
      <div>
        <Space size={12}>
          <Image
            width={400}
            src={micro}
            placeholder={<Image preview={false} src={micro} width={400} />}
          />{" "}
        </Space>
      </div>
    </div>
  );
};

export default RightSide;
