import {Grid, Hidden, useMediaQuery, useTheme} from "@material-ui/core";
import React, { TouchEvent } from "react";
import Lighthouse from '../assets/phare.svg'
import Lightrays from '../assets/lightrays.svg'
import utilities from '../style/utilities.module.css';
import Stepper from "./Stepper";
import {animated, useSpring} from "react-spring";

const Counselling = () => {
    const titleStyle: React.CSSProperties = {
        fontFamily: 'var(--secondaryFont)',
        fontSize: '1.3em',
        borderBottom: '1px solid var(--secondaryColor)',
        paddingBottom: '0.4em',
    }

    const taskTitleStyle: React.CSSProperties = {
        color: 'var(--secondaryColor)',
        fontSize: '1.3em',
        fontWeight: 'bold',
    }


    const [activeStep, setActiveStep] = React.useState(0);
    const theme = useTheme();
    const displayStepper = useMediaQuery(theme.breakpoints.down('sm'));

    const useStepStyles = (stepNumber: number) => {
        return useSpring({
            from: {
                opacity: activeStep === stepNumber || !displayStepper ? 0 : 1,
                display: activeStep === stepNumber || !displayStepper ? 'none' : 'block'
            },
            to: {
                opacity: activeStep === stepNumber || !displayStepper ? 1 : 0,
                display: activeStep === stepNumber || !displayStepper ? 'block' : 'none',
            },
            delay: 200,
        })
    }

    let swipeStartTime : number|undefined = undefined;
    let swipeStartCursorPlace : {x: number, y: number}|undefined = undefined;

    const startingSwipe = (event : TouchEvent) => {
        swipeStartTime = Date.now();
        swipeStartCursorPlace = {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY,
        }
    }
    const stoppingSwipe = (event : TouchEvent) => {
        if(swipeStartTime && swipeStartCursorPlace)
        {
            if(Date.now() - swipeStartTime < 2000 &&  Math.abs(event.changedTouches[0].clientY - swipeStartCursorPlace.y) < 300)
            {
                if(activeStep > 0 && event.changedTouches[0].clientX - swipeStartCursorPlace.x > 20)
                {
                    setActiveStep(activeStep - 1);
                }
                else if( activeStep < 1 && event.changedTouches[0].clientX - swipeStartCursorPlace.x < -20)
                {
                    setActiveStep(activeStep + 1);
                }
            }
        }

        swipeStartCursorPlace = undefined;
        swipeStartTime = undefined;
    }

    interface StepProps {
        StepNumber: number,
    }

    const Implementation = ({StepNumber}: StepProps) => {
        const styles = useStepStyles(StepNumber);
        return (
            <Grid item xs={12} md={6}>
                <animated.div style={{paddingTop: '1.3em', paddingRight: !displayStepper ? '1.2em' : '5em', paddingLeft: '5em', ...styles}}>
                    <h4 style={taskTitleStyle}>En réalisant vos projets</h4>
                    <p>
                        Application web et mobile visant à acquérir, stocker et traiter des données, ex nihilo ou héritant d’une dette technique, implémentons ensemble la meilleure
                        solution pour répondre à votre besoin.
                    </p>
                    <p>
                        Vous avez des besoins spécifiques ? Traitement audio ou vidéo, capteurs connectés,
                        Intelligence Artificielle et deep learning, temps réel et web socket ? C'est sujets me passionnent, je saurais concevoir
                        les solutions techniques adaptées à votre projet.
                    </p>
                </animated.div>
            </Grid>
        )
    }

    const Design = ({StepNumber}: StepProps) => {
        const styles = useStepStyles(StepNumber);
        return (
            <Grid item xs={12} md={6}>
                <animated.div style={{paddingTop: '1.3em', paddingLeft: !displayStepper ? '1.2em' : '5em', paddingRight: '5em', ...styles}}>
                    <Hidden mdUp>
                        <div style={{width: '1.3em'}}></div>
                    </Hidden>
                    <h4 style={taskTitleStyle}>En vous accompagnant dans vos réflexions</h4>
                    <p>
                        <b>Vous êtes porteur de projets ou décisionnaire ? Vous cherchez une expertise sur un sujet
                            technique ?</b><br/>
                        Je vous accompagne dans la définition de votre feuille de route, en vous
                        aidant à définir vos objectifs techniques et les jalons pour les atteindre.
                    </p>
                    <p>
                        Architecture logicielle, DevOps, infrastructure, base de données : identifions ensemble les
                        choix cohérents pour vos projets.
                    </p>
                </animated.div>
            </Grid>
        )
    }

    return (
        <div style={{position: 'relative', marginTop: '3em'}} id='Accompagnement'>
            <img style={{position: 'absolute', width: '100%', marginTop: '1em'}}
                 src={Lightrays} alt='Lightrays'/>
            <Grid container direction='column' alignItems='center'>
                <Grid item className={utilities.goToFront}>
                    <img src={Lighthouse} alt='Lighthouse'/>
                </Grid>
                <Grid item style={titleStyle} className={utilities.goToFront}>
                    Comment puis-je vous aider ?
                </Grid>
                <Hidden mdUp>
                    <Grid item className={utilities.goToFront}>
                        <Stepper currentStep={activeStep} changeStep={(newStep: number) => setActiveStep(newStep)}></Stepper>
                    </Grid>
                </Hidden>
                <Grid item container className={utilities.goToFront} onTouchStart={startingSwipe} onTouchEnd={stoppingSwipe}>
                    <Implementation StepNumber={0}></Implementation>
                    <Design StepNumber={1}></Design>
                </Grid>

            </Grid>
        </div>
    )
};

export default Counselling;