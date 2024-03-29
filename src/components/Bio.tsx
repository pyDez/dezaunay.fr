import { useMediaQuery, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Conception from '../assets/icn-conception.svg'
import Development from '../assets/icn-dev.svg'
import Distribution from '../assets/icn-distrib.svg'
import Monitoring from '../assets/icn-monitoring.svg'
import Pyd from '../assets/photo-pyd.png'
import utilities from '../style/utilities.module.css';

const Bio = () => {
    const iconStyle: React.CSSProperties = {
        color: '#878E93',
        textTransform: 'uppercase',
        margin:'1.2em 0'
    }
    const bioTitleStyle : React.CSSProperties = {
        fontFamily: 'var(--secondaryFont)',
        fontSize: '1.3em',
    }

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <>
            <Grid container alignItems='center' justify='center' style={{margin: '2em 0'}}>
                <Grid item>
                    <img src={Pyd} alt='me'/>
                </Grid>
                <Grid item style={{marginLeft: isXs? '0' : '-1.5em'}}>
                    <span style={bioTitleStyle}>Ensemble, mettons la technique<br/>
                        au service d'un {' '}
                        <span style={{borderBottom: '1px solid var(--secondaryColor)', paddingBottom: '0.4em'}}>monde meilleur</span>
                    </span>
                </Grid>
            </Grid>
            <Grid container>
                <Grid xs={7} sm={8} item style={{padding: isXs? '3em 1.5em' : '3em',}} className={utilities.backgroundPrimaryColor}>
                    Depuis plus de 12 ans, je concrétise votre idée auprés de vos utilisateurs.<br/><br/>
                    Compétent, passionné, ouvert et empathique.<br/><br/>
                    Créons ensemble des services inédits, innovants et à l’épreuve du temps.<br/><br/>
                    Egalement en charge d'un jardin agroécologique, je suis disponible aux 3/5.<br/><br/>
                    Retrouvez mon profil sur <a href='https://www.linkedin.com/in/pydezaunay/' style={{color: 'var(--secondaryColor)', textDecoration: 'none'}}>LinkedIn</a>.
                </Grid>
                <Grid xs={5} sm={4} item container direction="column" justify='center' style={{textAlign: 'center',}}>
                    <Grid item style={iconStyle}>
                        <img src={Conception} alt='Conception'/>
                        <br/>
                        <span>Conception</span>
                    </Grid>
                    <Grid item style={iconStyle}>
                        <img src={Development} alt='Development'/>
                        <br/>
                        <span>Développement</span>
                    </Grid>
                    <Grid item style={iconStyle}>
                        <img src={Distribution} alt='Distribution'/>
                        <br/>
                        <span>Distribution</span>
                    </Grid>
                    <Grid item style={iconStyle}>
                        <img src={Monitoring} alt='Monitoring'/>
                        <br/>
                        <span>Monitoring</span>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default Bio;