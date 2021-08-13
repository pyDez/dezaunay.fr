import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import ArrowLeft from '../assets/arrow-long-left.svg';
import ArrowRight from '../assets/arrow-long-right.svg';
import styled from 'styled-components';
import useBoop from '../hooks/UseBoop';
import {animated} from 'react-spring';
import IconButton from '@material-ui/core/IconButton';

interface StepperProps {
    changeStep: (activeStep: number) => void
}

export default function Stepper(props: StepperProps) {

    const {style, trigger} = useBoop({rotation: 15});
    const StyledStepper = styled((props: any) => (
        <div {...props}>
            <MobileStepper
                variant='dots'
                steps={2}
                position='static'
                activeStep={activeStep}
                nextButton={
                    <IconButton size='small'
                                onClick={handleNext} style={activeStep === 1 ? {display: 'none'} : {display: 'block'}}
                                onMouseEnter={trigger} onTouchStart={trigger}
                    >
                        <animated.span style={style}>
                            <img src={ArrowRight} alt='Arrow right'/>
                        </animated.span>
                    </IconButton>
                }
                backButton={
                    <IconButton size='small'
                                onMouseEnter={trigger} onTouchStart={trigger}
                                onClick={handleBack} style={activeStep === 0 ? {display: 'none'} : {display: 'block'}}
                    >
                        <animated.span style={style}>
                            <img src={ArrowLeft} alt='Arrow left'/>
                        </animated.span>
                    </IconButton>
                }
            />
        </div>
    ))`
      & .MuiMobileStepper-root {
        background-color: transparent;
      }

      & .MuiMobileStepper-dot {
        height: 1em;
        width: 1em;
        margin: 0 0.3em;
        border: 1px solid var(--secondaryColor);
        background-color: #fff;
      }

      & .MuiMobileStepper-dotActive {
        background-color: var(--secondaryColor);
      }
    `;

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        props.changeStep(activeStep + 1);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        props.changeStep(activeStep - 1);
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <StyledStepper></StyledStepper>
    )
}
