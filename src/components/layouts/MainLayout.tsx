import Logo from '../../assets/logo-picto.svg'
import Menu from '../../assets/menu.svg'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import utilities from '../../style/utilities.module.css';
import useBoop from '../../hooks/UseBoop'
import {animated} from 'react-spring';
import {Link, Route, Switch, useLocation} from 'react-router-dom'
import Bio from '../Bio'
import MenuLayout from './MenuLayout'
import React, { useEffect } from 'react';
import Counseling from '../Counseling';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

const MainLayout = () => {
    const {style, trigger} = useBoop({rotation: 15});
    const location = useLocation();
    useEffect(() => {
        setTimeout(() => {
        const element = document.getElementById(location.pathname.replace("/", ""));
        window.scrollTo({
                behavior: element ? "smooth" : "auto",
                top: element ? element.offsetTop : 0
            });
        }, 100);
    }, [location]);

    return (
        <Grid container className={utilities.goToBack} alignItems='stretch'>
            <Grid item sm={12} md={5} container style={{marginTop: '2em'}} justifyContent='space-between'
                  alignItems='flex-start' alignContent='flex-start'>
                <Hidden mdUp>
                    <Grid item xs={3} container justifyContent='center' alignItems='center'>
                        <Link to='/menu'>
                            <IconButton onMouseEnter={trigger} onTouchStart={trigger}>
                                <animated.span style={style}>
                                    <img src={Menu} alt='menu'/>
                                </animated.span>
                            </IconButton>
                        </Link>
                    </Grid>
                </Hidden>
                <Grid item xs={9} sm={6} md={8} container alignItems='center' justifyContent='center'>
                    <Grid item style={{display: 'flex'}}>
                        <Link to=''>
                            <IconButton>
                                <img src={Logo} alt='home'/>
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item style={{lineHeight: '1.7em'}}>
                        <h2 style={{textAlign: 'center', fontWeight: 'lighter',}}
                            className={`${utilities.noMargin} ${utilities.primaryColor}`}>Pierre-Yves</h2>
                        <h1 className={`${utilities.noMargin} ${utilities.secondaryColor}`}>Dezaunay</h1>
                    </Grid>
                </Grid>
                <Hidden mdUp>
                    <Grid item sm={3}>
                    </Grid>
                </Hidden>
                <Hidden smDown>
                    <Grid item style={{
                        display: 'flex',
                        height: '4.5em',
                        borderBottom: '1px solid var(--secondaryColor)',
                        alignItems: 'center'
                    }}>
                        <div
                            className={`${utilities.noMargin} ${utilities.primaryColor} ${utilities.secondaryFont}`}>
                            Architecte &<br/> développeur<br/> indépendant
                        </div>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid item xs={12} container justifyContent='center'>
                        <div
                            className={`${utilities.noMargin} ${utilities.primaryColor} ${utilities.secondaryFont}`}>Architecte
                            & développeur indépendant
                        </div>
                    </Grid>
                </Hidden>
                <Grid container alignItems='flex-start' >
                    <Bio></Bio>
                    <Hidden mdUp>
                        <div style={{backgroundColor: 'var(--backgroundPrimaryColor)'}}>
                            <Counseling/>
                            <Portfolio/>
                            <Contact/>
                        </div>
                    </Hidden>
                </Grid>
            </Grid>
            <Hidden smDown>
                <Grid item md={7} style={{
                    backgroundColor: 'var(--backgroundPrimaryColor)',
                    minHeight: '100vh',
                    overflow: 'hidden'
                }}>
                    <MenuLayout></MenuLayout>
                    <Switch>
                        <Route exact path="/">
                            <Counseling/>
                        </Route>
                        <Route exact path="/Accompagnement">
                            <Counseling/>
                        </Route>
                        <Route exact path="/Portfolio">
                            <Portfolio/>
                        </Route>
                        <Route exact path="/Contact">
                            <Contact/>
                        </Route>
                    </Switch>
                </Grid>
            </Hidden>
        </Grid>
    );
};

export default MainLayout;
