import React from "react";
import "./Description.css";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

const Description = ({ weather, units }) => {
  const tempunit = units === "metric" ? "C" : "F";
  const airunit = units === "metric" ? "m/s" : "m/h";
  const deg = `\u00b0`;

  const list = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: weather.temp_min,
      unit: deg + tempunit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: weather.temp_max,
      unit: deg + tempunit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "Feels Like",
      data: weather.feels_like,
      unit: deg + tempunit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.pressure,
      unit: "hpa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "Humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "Wind speed",
      data: weather.speed,
      unit: airunit,
    },
  ];

  return (
    <div className="section sectiondescription">
      {list.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="cardicon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default Description;
