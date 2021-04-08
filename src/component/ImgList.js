import React from "react";
import "./Img-list.css";
import ImgCard from "./ImgCard";

const ImgList = (props) => {
  let imgs = props.images.map((img) => {
    return <ImgCard img={img} key={img.id} />;
  });
  return <div className="img-list">{imgs}</div>;
};
export default ImgList;
