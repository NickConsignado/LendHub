import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "../../scss/Carousel.scss";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Solo Leveling",
    imgPath: "https://cdn.wallpapersafari.com/27/89/RXGi4n.jpg",
  },
  {
    label: "Harry Potter the Sorcerer's Stone",
    imgPath:
      "https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/2-0-design/harrypotter/hp1/hp1-hero-d.jpg/_jcr_content/renditions/original.JPEG",
  },
  {
    label: "Regression",
    imgPath:
      "https://noblesuggestions.com/wp-content/uploads/2021/04/dcqw98z-9dcf3253-ab1b-47fc-af3e-93e59ac3ba46-min.jpg",
  },
  {
    label: "Harry Potter the Sorcerer's Stone",
    imgPath:
      "https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/2-0-design/harrypotter/hp1/hp1-hero-d.jpg/_jcr_content/renditions/original.JPEG",
  },
  {
    label: "Solo Leveling",
    imgPath: "https://cdn.wallpapersafari.com/27/89/RXGi4n.jpg",
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography id="Typo">{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 400,
                  display: "cover",
                  maxWidth: "auto",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
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

    // <div class="carousel-inner">
    //   <div class="carousel-item active" data-bs-interval="5000" id="carousel-item">
    //     <div class="carousel-cover">
    //       <div class="d-grid carousel-cover-img">
    //         <img id="img-slide-1" src="" class="d-block d-lg-none w-50 c-img" alt="">
    //         <img id="img-slide-1-s" src="" class="d-none d-lg-block w-50 c-md-img" alt="">
    //       </div>
    //     </div>
    //     <div class="carousel-caption d-flex flex-column justify-content-end" id="carousel-text">
    //       <div id="carousel-sub-text">#1 Spotlight</div>
    //       <div id="carousel-title"><span id="title-slide-1"></span></div>
    //       <div class="gap-4 d-none d-xl-flex " id="carousel-detail">
    //         <div><i class="fas fa-play-circle me-1" ></i><span id="type-slide-1"></span></div>
    //         <div><i class="fas fa-clock me-1" ></i><span id="duration-slide-1"></span></div>
    //         <div><i class="fas fa-calendar me-1"></i><span id="aired-date-slide-1"></span></div>
    //       </div>
    //       <div id="carousel-description-section" class="w-50 d-none d-xl-block">
    //         <div id="carousel-description"><span id="synopsis-slide-1"></span></div>
    //       </div>
    //       <div id="carousel-btn">
    //         <a href="#" id="detail-btn">Detail<i class="fas fa-angle-right ms-2"></i></a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Carousel;
