import Grid from '@material-ui/core/Grid';
import Conception from '../assets/icn-conception.svg'
import Development from '../assets/icn-dev.svg'
import Distribution from '../assets/icn-distrib.svg'
import Monitoring from '../assets/icn-monitoring.svg'
import Pyd from '../assets/photo-pyd.png'
import utilities from '../style/utilities.module.css';

export default () => {
    const iconStyle: React.CSSProperties = {
        color: '#878E93',
        textTransform: 'uppercase'
    }
    const bioTitleStyle : React.CSSProperties = {
        fontFamily: 'var(--secondaryFont)',
        fontSize: '1.3em',
    }

    return (
        <>
            <Grid container alignItems='center' justify='center' style={{margin: '2em 0'}}>
                <Grid item>
                    <img src={Pyd} alt='me'/>
                </Grid>
                <Grid item style={{marginLeft: '-1.5em'}}>
                    <span style={bioTitleStyle}>Ensemble, mettons la technique<br/>
                        au service d'un {' '}
                        <span style={{borderBottom: '1px solid var(--secondaryColor)', paddingBottom: '0.4em'}}>monde meilleur !</span>
                    </span>
                </Grid>
            </Grid>
            <Grid container>
                <Grid xs={8} item style={{padding: '3em',}} className={utilities.backgroundPrimaryColor}>
                    Depuis 10 ans, je suis le dernier maillon entre votre idée et vos utilisateurs.<br/><br/>
                    Compétent, passionné, ouvert et empathique.<br/><br/>
                    Créons ensemble des services inédits, innovants et à l’épreuve du temps.
                </Grid>
                <Grid xs={4} item container direction="column" justify='center' style={{textAlign: 'center',}}>
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