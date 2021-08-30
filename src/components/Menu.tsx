import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Close from '../assets/close.svg'
import Logo from '../assets/logo-picto.svg'
import utilities from '../style/utilities.module.css';
import useBoop from '../hooks/UseBoop'
import {animated} from 'react-spring';
import {Link} from 'react-router-dom'

const Menu = () => {
    const itemStyle: React.CSSProperties = {
        borderBottom: '1px solid var(--secondaryColor)',
        width: '100%',
        textAlign: 'center',
    };
    const {style, trigger} = useBoop({rotation: 15});

    return (
        <>
            <Grid container style={{marginTop: '2em', marginBottom: '2em'}} justify='space-between'
                  alignItems="center">
                <Grid item xs={3} container justify='center' alignItems='center'>
                    <Link to=''>
                        <IconButton onMouseEnter={trigger} onTouchStart={trigger}>
                            <animated.span style={style}>
                                <img src={Close} alt='menu'/>
                            </animated.span>
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item xs={5}></Grid>
                <Grid item xs={4} container alignItems='center' justify='center'>
                    <Grid item style={{display: 'flex'}}>
                        <Link to=''>
                            <IconButton>
                                <img src={Logo} alt='home'/>
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item sm={3}>
                </Grid>
            </Grid>
            <Grid container direction='column'>
                <Link to='' style={{textDecoration: 'none',}}>
                    <Grid item style={itemStyle}>
                        <h3 className={utilities.secondaryTitle}>Accueil</h3>
                    </Grid>
                </Link>
                <Link to='Accompagnement' style={{textDecoration: 'none',}}>
                    <Grid item style={itemStyle}>
                        <h3 className={utilities.secondaryTitle}>Accompagnement</h3>
                    </Grid>
                </Link>
                <Link to='Portfolio' style={{textDecoration: 'none',}}>
                    <Grid item style={itemStyle}>
                        <h3 className={utilities.secondaryTitle}>Portfolio</h3>
                    </Grid>
                </Link>
                <Link to='Contact' style={{textDecoration: 'none',}}>
                    <Grid item style={itemStyle}>
                        <h3 className={utilities.secondaryTitle}>Contact</h3>
                    </Grid>
                </Link>

            </Grid>
        </>
    );
};

export default Menu;