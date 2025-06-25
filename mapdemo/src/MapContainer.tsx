import React, { useState } from "react";
import { Collapse, Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MapComponent from "./MapComponent";

interface Location {
  latitude: number;
  longitude: number;
  zoom?: number;
}

interface MapContainerProps {
  location: Location;
}

const MapContainer: React.FC<MapContainerProps> = ({ location }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Box>
      <Box
        onClick={handleToggle}
        sx={{
          // Ensure container spans at least full viewport height
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start", // Added for left alignment
          cursor: "pointer",
          userSelect: "none",
          backgroundColor: expanded ? "grey.100" : "transparent",
          "&:hover": {
            backgroundColor: "grey.200",
          },
        }}
      >
        <Typography
          sx={{
            mr: 1,
            width: "400px", // This width will push the icon further right if the text doesn't fill it
          }}
        >
          {expanded ? "Close Map" : "Expand Map"}
        </Typography>
        <ArrowDropDownIcon
          sx={{
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            fontSize: "2rem",
          }}
        />
      </Box>
      <Collapse in={expanded} timeout="auto">
        <MapComponent location={location} />
      </Collapse>
    </Box>
  );
};

export default MapContainer;
