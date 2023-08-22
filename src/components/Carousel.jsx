import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import axios from "axios"; // Import axios
import "../../scss/Carousel.scss";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [carouselThumbnails, setCarouselThumbnails] = useState([]); // State for carousel thumbnails
  const maxSteps = carouselThumbnails.length;

  useEffect(() => {
    const fetchCarouselThumbnails = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/books");
        setCarouselThumbnails(response.data.data.map((item) => item.thumbnail)); // Set fetched carousel thumbnails to the state
      } catch (error) {
        console.error("Error fetching carousel thumbnails:", error);
      }
    };

    fetchCarouselThumbnails();
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        flexGrow: 1,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: "0.1rem",
          pl: 2,
          bgcolor: "background.default",
        }}
      />
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {carouselThumbnails.map((thumbnail, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: "cover",
                  maxWidth: "auto",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={thumbnail}
                alt={`Slide ${index + 1}`}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Carousel;
