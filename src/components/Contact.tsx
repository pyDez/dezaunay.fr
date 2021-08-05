import {Grid, IconButton} from "@material-ui/core";
import React from "react";
import Ladaux from '../assets/photo-contact.png'
import Email from '../assets/mail.svg'
import Phone from '../assets/phone.svg'
import Pin from '../assets/pin.svg'
import useBoop from "../hooks/UseBoop";
import {animated} from "react-spring";
import {Link} from "react-router-dom";

export default () => {
    const phoneBoop = useBoop({rotation: 15});
    const emailBoop = useBoop({rotation: 15});
    const pinBoop = useBoop({rotation: 15});
    return (
        <Grid container alignItems='center' style={{marginTop:'5em', paddingRight:'2em'}}>
            <Grid container item md={8} style={{padding: '0 3em', flexWrap: 'nowrap',}}
                  direction='column'>
                <Grid item style={{height: '100%',}}>
                    <img src={Ladaux} alt='contact picture'
                         style={{width: '100%',}}/>
                </Grid>
            </Grid>
            <Grid container item md={4} style={{position: 'relative'}}>
                <Grid item>
                    <div style={{
                        borderBottom: '1px solid var(--secondaryColor)',
                        width: '70%',
                        position: 'absolute',
                        left: '-50%',
                    }}></div>
                </Grid>
                <Grid item>
                    <p>Discutons de vos projets !</p>
                    <div style={{marginLeft: '2em'}}>
                        <p>
                            <a href="mailto: py.dezaunay@gmail.com" onMouseEnter={emailBoop.trigger}
                               onTouchStart={emailBoop.trigger}
                               style={{color: 'var(--secondaryColor)', textDecoration: 'none'}}>
                                <Grid container alignItems='center'>
                                    <Grid item style={{marginRight: '1em', fontSize: '1.4em'}}>
                                        <animated.img src={Email} alt='email' style={emailBoop.style}/>
                                    </Grid>
                                    <Grid item>
                                        py.dezaunay@gmail.com
                                    </Grid>
                                </Grid>
                            </a>
                        </p>
                        <p>
                            <a href="tel: +33760458673" onMouseEnter={phoneBoop.trigger}
                               onTouchStart={phoneBoop.trigger}
                               style={{color: 'var(--bodyColor)', textDecoration: 'none'}}>
                                <Grid container alignItems='center'>
                                    <Grid item style={{marginRight: '1em', fontSize: '1.4em'}}>
                                        <animated.img src={Phone} alt='phone' style={phoneBoop.style}/>
                                    </Grid>
                                    <Grid item>
                                        +33 7 60 45 86 73
                                    </Grid>
                                </Grid>
                            </a>
                        </p>
                        <p>
                            <a href="https://www.openstreetmap.org/?mlat=44.70077&mlon=-0.24410#map=18/44.70078/-0.24410"
                               target='_blank' onMouseEnter={pinBoop.trigger} onTouchStart={pinBoop.trigger}
                               style={{color: 'var(--bodyColor)', textDecoration: 'none'}}>
                                <Grid container alignItems='center'>
                                    <Grid item style={{marginRight: '1em', fontSize: '1.4em'}}>
                                        <animated.img src={Pin} alt='pin' style={pinBoop.style}/>
                                    </Grid>
                                    <Grid item>
                                        27 route de Cantois<br/>33760 Ladaux
                                    </Grid>
                                </Grid>
                            </a>
                        </p>
                    </div>
                </Grid>
                <Grid item>
                    <div style={{
                        borderBottom: '1px solid var(--secondaryColor)',
                        width: '70%',
                        position: 'absolute',
                        left: '-50%',
                        bottom:'0'
                    }}></div>
                </Grid>
            </Grid>
        </Grid>
    )
};