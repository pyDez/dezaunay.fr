import logo from '../../assets/logo-picto.svg'
import menu from '../../assets/menu.svg'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import utilities from '../../style/utilities.module.css';

export default () => {
    return (
        <>
            <Grid container justify='center' style={{marginTop:'2em'}}>
                <Grid item xs={3} container justify='center' alignItems='center'>
                    <IconButton>
                        <img src={menu} alt='menu'/>
                    </IconButton>
                </Grid>
                <Grid item xs={9} container alignItems='center'>
                    <Grid item style={{display:'flex'}}>
                        <a href='/'>
                            <IconButton>
                                <img src={logo} alt='home'/>
                            </IconButton>
                        </a>
                    </Grid>
                    <Grid item style={{lineHeight: '1.7em'}}>
                            <h2 style={{textAlign:'center', fontWeight: 'lighter',}} className={`${utilities.noMargin} ${utilities.primaryColor}`}>Pierre-Yves</h2>
                            <h1 className={`${utilities.noMargin} ${utilities.secondaryColor}`}>Dezaunay</h1>
                    </Grid>
                </Grid>
                <Grid item xs={12} container justify='center'>
                    <div className={`${utilities.noMargin} ${utilities.primaryColor} ${utilities.secondaryFont}`}>Architecte & développeur indépendant</div>
                </Grid>
            </Grid>


        </>
    );
};
