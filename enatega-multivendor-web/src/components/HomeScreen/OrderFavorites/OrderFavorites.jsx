import { Box, Typography, Grid, Button } from "@mui/material";
import React from "react";
import useStyle from "./styles.js";
import DoublePhone from "../../../assets/images/DoublePhone.svg";
import { useTranslation } from "react-i18next";
import appStore  from '../../../assets/images/appStore.svg'
import playStore  from '../../../assets/images/playStore.svg'

const OrderFavorites = () => {
  const { t } = useTranslation();
  let classes = useStyle();
  return (
    <Box
      className={classes.mainBox}
      sx={{
        height: {
          lg: "360px",
          xs: "auto",
          md:"400px"
        },
      }}
    >
      <Grid container xs={11} md={10} className={classes.container}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography className={classes.head}>{t("orderText")}</Typography>

            <Typography className={classes.text}>
              {t("orderSubText1")}
            </Typography>
            <Typography className={classes.text}>
              {t("orderSubText2")}
            </Typography>
            <Typography className={classes.text}>
              {t("orderSubText3")}
            </Typography>

            <Box>
              <a href="" className={classes.stores}>
              <img src={appStore} alt="playStore" > 
              </img>
              </a>
              <a href="" className={classes.stores}>
              <img src={playStore} alt="appStore"> 
              </img>
              </a>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} justifyItems={"center"}>
          <Box
            style={{
              zIndex: 2,
            }}
            sx={{
              transform: {
                md: "rotate(6.49deg) translateY(-90px)",
                xs: "rotate(0deg)",
              },
              height: {},
            }}
          >
            <img
              src={DoublePhone}
              alt="doublePhone"
              className={classes.phoneImg}
              style={{
                objectFit: "cover",
                width: "520px",
                height: "500px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderFavorites;