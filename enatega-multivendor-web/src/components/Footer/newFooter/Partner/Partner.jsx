import {
  Box,
  Typography, 
  Button,
} from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import { useTranslation } from 'react-i18next';

const Partner = () => {
  const {t} =useTranslation()
  return (
    <Box>
      <Typography
        variant="h5"
        style={{ color: "white", display: "flex" }}
        sx={{
          justifyContent: {
            xs: "center",
            md: "left",
          },
        }}
      >
        Partner with us
      </Typography>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        sx={{
          justifyContent: {
            xs: "center",
            md: "left",
          },
        }}
      >
        <Button
          variant="contained"
          style={{ backgroundColor: "#5AC12F", width: "200px", color: "black" }}
          sx={{
            margin: {
              xs: "10px auto",
              md: "10px 0 5px 0",
            },
          }}
        >
          {t("becomeVendor")}
          <ArrowForwardIosIcon
            style={{ width: "24px", height: "24px", color: "black" }}
          />
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#5AC12F",
            marginBottom: 10,
            width: "200px",
            color: "black",
          }}
          sx={{
            margin: {
              xs: "10px auto",
              md: "5px 0 5px 0",
            },
          }}
        >
         {t("becomeRestaurant")}
          <ArrowForwardIosIcon
            style={{ width: "24px", height: "24px", color: "black" }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default Partner;
