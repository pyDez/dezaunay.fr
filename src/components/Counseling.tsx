import {Grid, useMediaQuery, useTheme} from "@material-ui/core";
import React, {TouchEvent} from "react";
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
        padding: '0em 1.2em 0.4em',
        textTransform: 'uppercase'
    }

    const taskTitleStyle: React.CSSProperties = {
        color: 'var(--secondaryColor)',
        fontSize: '1.3em',
        fontWeight: 'bold',
    }


    const [activeStep, setActiveStep] = React.useState(0);
    const theme = useTheme();
    const displayStepper = useMediaQuery(theme.breakpoints.down('sm'));
    const desktopDisplay = useMediaQuery(theme.breakpoints.up('md'));
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
            delay: 300,
        })
    }
    const flashingStyle = useSpring({
        from: {
            opacity: 0,
            display: 'none',
        },
        to: {
            opacity: 1,
            display: 'block',
        },
        delay: 300,
    });

    let swipeStartTime: number | undefined = undefined;
    let swipeStartCursorPlace: { x: number, y: number } | undefined = undefined;

    const startingSwipe = (event: TouchEvent) => {
        swipeStartTime = Date.now();
        swipeStartCursorPlace = {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY,
        }
    }
    const stoppingSwipe = (event: TouchEvent) => {
        if (swipeStartTime && swipeStartCursorPlace) {
            if (Date.now() - swipeStartTime < 2000 && Math.abs(event.changedTouches[0].clientY - swipeStartCursorPlace.y) < 300) {
                if (activeStep > 0 && event.changedTouches[0].clientX - swipeStartCursorPlace.x > 20) {
                    setActiveStep(activeStep - 1);
                } else if (activeStep < 1 && event.changedTouches[0].clientX - swipeStartCursorPlace.x < -20) {
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
                <animated.div style={{paddingTop: '1.3em', paddingRight: !displayStepper ? '1.2em' : '0', ...styles}}>
                    <h4 style={taskTitleStyle}>En réalisant vos projets</h4>
                    <p>
                        Application web et mobile visant à acquérir, stocker et traiter des données, ex nihilo ou
                        héritant d’une dette technique, implémentons ensemble la meilleure
                        solution pour répondre à votre besoin.
                    </p>
                    <p>
                        Vous avez des besoins spécifiques ? Traitement audio ou vidéo, capteurs connectés,
                        Intelligence Artificielle et deep learning, temps réel et web socket ? Ces sujets me
                        passionnent, je saurai concevoir
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
                <animated.div style={{paddingTop: '1.3em', paddingLeft: !displayStepper ? '1.2em' : '0', ...styles}}>
                    {!desktopDisplay &&
                        <div style={{width: '1.3em'}}></div>
                    }
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

    const devKnowledges: string[] =
        [
            'React', 'TypeScript', 'C#', '.Net', '.Net core', "Python", "Django", "DRF", 'NoSQL', 'MongoDB', "PostgreSQL", 'Vue.js',
        ];

    const craftmanshipKnowledges: string[] =
        [
            'DevOps', 'CI/CD', 'Clean Architecture', 'DDD', 'TDD', 'API REST', 'Méthodes Agiles', "Shape Up"
        ];

    const tagStyle: React.CSSProperties = {
        background: 'var(--primaryColor)',
        borderRadius: '1em',
        padding: '0 1em',
        color: '#FFF',
        margin: '1em 1em 0 0',
        display: 'inline-block'
    };
    return (
        <div style={{position: 'relative', marginTop: '3em'}} id='Accompagnement'>
            <animated.img style={{position: 'absolute', width: '100%', marginTop: '1em', ...flashingStyle}}
                 src={Lightrays} alt='Lightrays'/>
            <Grid container direction='column' alignItems='center' style={{padding: '0 5em',}}>
                <Grid item className={utilities.goToFront}>
                    <img src={Lighthouse} alt='Lighthouse'/>
                </Grid>
                <Grid item style={titleStyle} className={utilities.goToFront}>
                    Comment puis-je vous aider ?
                </Grid>
                {!desktopDisplay &&
                    <Grid item className={utilities.goToFront}>
                        <Stepper currentStep={activeStep}
                                 changeStep={(newStep: number) => setActiveStep(newStep)}></Stepper>
                    </Grid>
                }
                <Grid item container className={utilities.goToFront} onTouchStart={startingSwipe}
                      onTouchEnd={stoppingSwipe}>
                    <Implementation StepNumber={0}></Implementation>
                    <Design StepNumber={1}></Design>
                </Grid>
                <animated.div style={flashingStyle} className={utilities.goToFront}>
                    <Grid item container
                          style={{borderTop: '1px solid var(--secondaryColor)', marginBottom: '2em'}}>
                        <Grid item xs={12} md={6}>
                            <h3 style={{
                                fontFamily: 'var(--secondaryFont)',
                                textTransform: 'uppercase',
                                fontWeight: 'normal'
                            }}>Développement</h3>
                            {devKnowledges.map((knowledge) => <span style={tagStyle}>{knowledge}</span>)}
                        </Grid>
                        <Grid item xs={12} md={6} style={{
                            paddingLeft: !displayStepper ? '1.2em' : '0',
                            marginTop: !displayStepper ? '0' : '2em'
                        }}>
                            <h3 style={{
                                fontFamily: 'var(--secondaryFont)',
                                textTransform: 'uppercase',
                                fontWeight: 'normal'
                            }}>Craftmanship</h3>
                            {craftmanshipKnowledges
                                .map((knowledge) => <span style={tagStyle}>{knowledge}</span>)}
                        </Grid>
                    </Grid>
                </animated.div>
            </Grid>
        </div>
    )
};

export default Counselling;