import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    makeStyles,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import React from "react";
import Quote from '../assets/apostrophe.svg'
import useBoop from "../hooks/UseBoop";
import CollapseIcon from './CollapseIcon'
import ListItem from './ListItem'

export interface ExperienceData {
    Name: string,
    Logo: string,
    LogoLight: string,
    Picture: string
    Description: string,
    Introduction: string,
    Body: string | null,
    Results: string[] | null,
    Testimony: {
        Name: string,
        Job: string,
        Body: string,
    } | null,
}

interface ExperienceProps extends ExperienceData {
    activeStep: number | null,
    onChangeStep: (newStep: number|null) => void
    index: number,
}

const Experience = (props: ExperienceProps) => {

    const boop = useBoop({rotation: 15});

    const useStyles = makeStyles({
        accordion: {
            background: 'transparent',
            color: 'var(--bodyColor)',
            boxShadow: 'none',
            "&.MuiAccordion-root:before": {
                display: "none"
            },
        },
        accordionHeader: {
            borderBottom: '1px solid var(--secondaryColor)',
            fontFamily: 'var(--secondaryFont)',
            fontSize: '1.3em',
            textTransform: 'uppercase',
            color: 'var(--bodyColor)',

        },
        resultsList: {
            listStyle: 'none',
            padding: '0',
        },
    });

    const classes = useStyles();

    const handleChange = (index: number) => (event: object, isExpanded: boolean) => {
        if (isExpanded === true) {
            props.onChangeStep(index);
        }

        if (isExpanded === false) {
            props.onChangeStep(null);
        }
    };

    const theme = useTheme();
    const desktopDisplay = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Accordion expanded={props.activeStep === props.index} className={classes.accordion} style={{margin: '3em',}} onChange={handleChange(props.index)}>
            <AccordionSummary
                expandIcon={
                    <CollapseIcon style={boop.style}></CollapseIcon>
                }
                className={classes.accordionHeader}
                onMouseEnter={boop.trigger} onTouchStart={boop.trigger}
            >
                <Grid container justify='space-between' alignItems='baseline'>
                    <Grid item>
                        {props.Name}
                    </Grid>
                    <Grid item>
                        {desktopDisplay &&
                            <img src={props.Logo} alt='Lucine'/>
                        }
                        {!desktopDisplay &&
                            <img src={props.LogoLight} alt='Lucine'/>
                        }
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container direction='column'>
                    <Grid item>
                        <h4 style={{fontSize: '1.5em', fontWeight: 'normal',}}>{props.Description}</h4>
                    </Grid>
                    <Grid item container alignItems='center'>
                        <Grid item md={5}>
                            <img src={props.Picture} alt='Lucine'
                                 style={{maxWidth: '100%', marginRight: '1em'}}/>
                        </Grid>
                        <Grid item md={1}>
                        </Grid>
                        <Grid item md={6} dangerouslySetInnerHTML={{__html: props.Introduction}}>
                        </Grid>
                    </Grid>
                    {props.Body &&
                    <>
                        <Grid item container>
                            <Grid item md={2}
                                  style={{borderBottom: '1px solid var(--secondaryColor)', margin: '2em 0 1em 0'}}>
                            </Grid>
                        </Grid>
                        <Grid item dangerouslySetInnerHTML={{__html: props.Body}}>
                        </Grid>
                    </>
                    }
                    {(props.Results || props.Testimony) &&
                    <>
                        <Grid item container>
                            <Grid item md={2}
                                  style={{borderBottom: '1px solid var(--secondaryColor)', margin: '2em 0 1em 0'}}>
                            </Grid>
                            <Grid item md={4}>
                            </Grid>
                            <Grid item md={2}
                                  style={{borderBottom: '1px solid var(--secondaryColor)', margin: '2em 0 1em 0'}}>
                            </Grid>
                        </Grid>

                        <Grid item container>
                            {props.Results &&
                            <Grid item md={6}>
                                <h5 style={{
                                    fontFamily: 'var(--secondaryFont)',
                                    textTransform: 'uppercase',
                                    fontSize: '1em',
                                    fontWeight: 'normal',
                                }}>Résultats obtenus :</h5>
                                <ul className={classes.resultsList}>
                                    {props.Results.map((result, index) => <ListItem
                                        key={index.toString()}>{result}</ListItem>)}
                                </ul>
                            </Grid>
                            }
                            {props.Testimony &&
                            <Grid item md={6}>
                                <h5 style={{
                                    fontFamily: 'var(--secondaryFont)',
                                    textTransform: 'uppercase',
                                    fontSize: '1em',
                                    fontWeight: 'normal',
                                }}>Témoignage :</h5>
                                <div><b>{props.Testimony.Name}</b></div>
                                <div>{props.Testimony.Job}</div>
                                <p style={{position: 'relative', paddingTop: '1.6em', zIndex: 1,}}>
                                    <img src={Quote} alt='quote'
                                         style={{position: 'absolute', left: '-1em', top: '0', zIndex: -1}}/>
                                    <span>
                                            {props.Testimony.Body}
                                        </span>
                                </p>
                            </Grid>
                            }
                        </Grid>
                    </>
                    }
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
};

export default Experience;