
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Search from './Search';

import Carosel1 from '../images/carosel 1.jpg';
import Carosel2 from '../images/carosel 2.jpg';

const images = [
    {
        label: 'image 1',
        imgPath: Carosel1,
    },
    {
        label: 'image 2',
        imgPath: Carosel2,
    }, {
        label: 'image 1',
        imgPath: Carosel1,
    },
    {
        label: 'image 2',
        imgPath: Carosel2,
    },
];

function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => {
            const stepNew = prevActiveStep + 1;
            return stepNew >= maxSteps ? 0 : stepNew
        });
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => {
            const stepNew = prevActiveStep - 1;
            return stepNew < 0 ? maxSteps - 1 : stepNew;
        });
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    const autoPlayTimerRef = React.useRef<number | null>(null);
    const autoPlayInterval = 3000
    const startAutoPlay = () => {
        autoPlayTimerRef.current = setInterval(() => {
            handleNext();
        }, autoPlayInterval);
    };

    const stopAutoPlay = () => {
        if (autoPlayTimerRef.current !== null) {
            clearInterval(autoPlayTimerRef.current);
        }
    };

    React.useEffect(() => {
        startAutoPlay();

        // Clear the auto-play interval when the component is unmounted
        return () => stopAutoPlay();
    }, []); // Run the effect only once on mount

    // Add event listeners to pause auto-play when the user interacts with the carousel
    //   const handleCarouselInteraction = () => {
    //     stopAutoPlay();
    //   };

    //   const handleCarouselInteractionEnd = () => {
    //     startAutoPlay();
    //   };


    return (
        <Box sx={{ flexGrow: 1, mt: "65px" }}>


            <div
                //   onMouseEnter={handleCarouselInteraction}
                //   onMouseLeave={handleCarouselInteractionEnd}
                style={{ position: 'relative' }}
            >


                <Box
                    component="img"
                    sx={{
                        maxHeight: '100vh',
                        display: 'block',
                        // maxWidth: 400,
                        overflow: 'hidden',
                        maxWidth: '100%',
                        width: '100%'
                    }}
                    src={images[activeStep].imgPath}
                    alt={images[activeStep].label}
                />

                <Search />
            </div>


            {/* <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                    //disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack}
                    //  disabled={activeStep === 0}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            /> */}
        </Box>
    );
}

export default Carousel;
