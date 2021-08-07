import React, { useState, useEffect } from 'react';
import { Button, Badge, Popconfirm } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const index = (props) => {

  
  const initialViewer3D = () =>{
    const option = {host: BASE_3D_URL, viewport: "viewport"};
    const viewer3D = new BOS3D.Viewer(option);
    window.viewer3D = viewer3D;
    viewer3D.addView("M1597750428500", BOS3D_DATABASE_KEY);
    viewer3D.setSceneBackGroundColor("#00ff00", 0); //设置背景色
    viewer3D.disableViewController(); //隐藏右上角 控制方块
  }

  useEffect(() => {
    initialViewer3D()
  }, []);
  
  return (
    <div id="viewport" style={{height: "100%", width:"100%"}}></div>
  );
};

export default index;
