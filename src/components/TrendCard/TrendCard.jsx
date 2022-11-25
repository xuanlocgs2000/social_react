import "./TrendCard.scss";

import React from "react";
import { TrendData } from "../../Data/TrendData";
const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends</h3>
      {TrendData.map((trend) => {
        return (
          <div className="trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
