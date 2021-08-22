import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import ArrowLeft from '../assets/arrow-long-left.svg';
import ArrowRight from '../assets/arrow-long-right.svg';
import styled from 'styled-components';
import useBoop from '../hooks/UseBoop';
import {animated} from 'react-spring';

interface StepperProps {
    changeStep: (activeStep: number) => void
    currentStep: number
}

export default function Stepper(props: StepperProps) {

    const activeStep = props.currentStep;
    const {style, trigger} = useBoop({rotation: 15});
    const StyledStepper = styled((props: any) => (
        <div {...props}>
            <MobileStepper
                variant='dots'
                steps={2}
                position='static'
                activeStep={activeStep}
                nextButton={
                    <div style={{cursor:'pointer'}}>
                        <animated.span style={activeStep === 1 ? {display: 'none', ...style} : {display: 'block', ...style}}
                                      onMouseEnter={trigger} onTouchStart={trigger} onClick={handleNext}>
                            <img src={ArrowRight} alt='Arrow right'/>
                        </animated.span>
                    </div>
                }
                backButton={
                    <div style={{cursor:'pointer'}}>
                        <animated.span style={activeStep === 0 ? {display: 'none', ...style} : {display: 'block', ...style}}
                                      onMouseEnter={trigger} onTouchStart={trigger} onClick={handleBack}>
                            <img src={ArrowLeft} alt='Arrow left'/>
                        </animated.span>
                    </div>
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


    const handleNext = () => {
        props.changeStep(activeStep + 1);
    };

    const handleBack = () => {
        props.changeStep(activeStep - 1);
    };

    return (
        <StyledStepper></StyledStepper>
    )
}
