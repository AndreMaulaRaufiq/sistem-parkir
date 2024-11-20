import React from "react";
import { Layer, Rect, Stage, Text } from "react-konva";
import "../styles/MapView.css";

const MapView = ({ parkingData, onSpotClick }) => (
  <div className="map-container">
    <Stage className="stage-container" width={600} height={400}>
      <Layer>
        {parkingData.map((spot) => (
          <Rect key={spot.id} x={spot.x} y={spot.y} width={50} height={50} fill={spot.available ? "green" : "red"} stroke="black" strokeWidth={2} onClick={() => onSpotClick(spot)} />
        ))}
        {parkingData.map((spot) => (
          <Text key={`text-${spot.id}`} text={`ID: ${spot.id}`} x={spot.x + 5} y={spot.y + 55} fontSize={12} />
        ))}
      </Layer>
    </Stage>
  </div>
);

export default MapView;
