import Logo from '../../assets/logo-picto.svg'
import Menu from '../../assets/menu.svg'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import utilities from '../../style/utilities.module.css';
import useBoop from '../../hooks/UseBoop'
import {animated} from 'react-spring';
import { Link } from 'react-router-dom'
import Bio from '../Bio'
import MenuLayout from './MenuLayout'

export default () => {
    const {style, trigger} = useBoop({rotation: 15});

    return (
        <Grid container>
            <Grid item sm={12} md={5} container style={{marginTop: '2em'}} justify='space-between'
                  alignItems="center">
                <Hidden mdUp>
                    <Grid item xs={3} container justify='center' alignItems='center'>
                        <Link to='/menu'>
                            <IconButton onMouseEnter={trigger} onTouchStart={trigger}>
                                <animated.span style={style}>
                                    <img src={Menu} alt='menu'/>
                                </animated.span>
                            </IconButton>
                        </Link>
                    </Grid>
                </Hidden>
                <Grid item xs={9} sm={6} md={8} container alignItems='center' justify='center'>
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
                    <Grid item style={{display:'flex', height:'4.5em', borderBottom: '1px solid var(--secondaryColor)'}} alignItems='center' >
                        <div
                            className={`${utilities.noMargin} ${utilities.primaryColor} ${utilities.secondaryFont}`}>
                            Architecte &<br/> développeur<br/> indépendant
                        </div>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid item xs={12} container justify='center'>
                        <div
                            className={`${utilities.noMargin} ${utilities.primaryColor} ${utilities.secondaryFont}`}>Architecte
                            & développeur indépendant
                        </div>
                    </Grid>
                </Hidden>
                <Grid>
                    <Bio></Bio>
                </Grid>
            </Grid>
            <Hidden smDown>
                <Grid item md={7}>
                    <MenuLayout></MenuLayout>
                </Grid>
            </Hidden>
        </Grid>
    );
};
