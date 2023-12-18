import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import FlexBetween from "./FlexBetween";




const StatBox = ({ title, value, searchtab, icon, vodCategoryDetails }) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const theme = useTheme();
  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
      height={"60px"}
      mt={"10px"}
    >
      <FlexBetween> 
        <Typography variant="h6">
          {title}
        </Typography>
        {/* {datagrid} */}
        {searchtab}
        {vodCategoryDetails}
      </FlexBetween>

      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ color: theme.palette.secondary[200] }}
      >
        {value}
      </Typography>
      {/* <FlexBetween gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {increase}
        </Typography>
        <Typography>{description}</Typography>
      </FlexBetween> */}
    </Box>
  );
};

export default StatBox;
