import logo from '../../assets/logo-picto.svg'
import menu from '../../assets/menu.svg'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import utilities from '../../style/utilities.module.css';

export default () => {
    return (
        <>
            <Grid container>
                <Grid sm={12} md={5} container  style={{marginTop: '2em'}} justify='space-between'>
                    <Hidden mdUp>
                        <Grid item xs={3} container justify='center' alignItems='center'>
                            <IconButton>
                                <img src={menu} alt='menu'/>
                            </IconButton>
                        </Grid>
                    </Hidden>
                    <Grid item xs={9} sm={6} md={8} container alignItems='center' justify='center'>
                        <Grid item style={{display: 'flex'}}>
                            <a href='/'>
                                <IconButton>
                                    <img src={logo} alt='home'/>
                                </IconButton>
                            </a>
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
                        <Grid item alignItems="center">
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
                </Grid>
                <Hidden smDown>
                    <Grid md={7}>
                    </Grid>
                </Hidden>
            </Grid>
        </>
    );
};
