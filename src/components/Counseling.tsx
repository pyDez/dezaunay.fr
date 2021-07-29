import {Grid, Hidden} from "@material-ui/core";
import React from "react";
import Lighthouse from '../assets/phare.svg'
import Lightrays from '../assets/lightrays.svg'
import utilities from '../style/utilities.module.css';

export default () => {
    const titleStyle: React.CSSProperties = {
        fontFamily: 'var(--secondaryFont)',
        fontSize: '1.3em',
        borderBottom: '1px solid var(--secondaryColor)',
        paddingBottom: '0.4em',
    }

    const taskTitleStyle: React.CSSProperties = {
        color: 'var(--secondaryColor)',
        fontSize: '1.3em',
        fontWeight: 'bold',
    }

    return (
        <div style={{position: 'relative', marginTop: '3em'}}>
            <img style={{position: 'absolute', width: '100%', marginTop: '1em'}}
                 src={Lightrays} alt='Lightrays'/>
            <Grid container direction='column' alignItems='center' >
                <Grid item className={utilities.goToFront}>
                    <img src={Lighthouse} alt='Lighthouse'/>
                </Grid>
                <Grid item style={titleStyle} className={utilities.goToFront}>
                    Comment puis-je vous aider ?
                </Grid>
                <Hidden mdUp>
                    <Grid item className={utilities.goToFront}>
                        arrows
                    </Grid>
                </Hidden>
                <Grid item container className={utilities.goToFront}>
                    <Grid item sm={6} style={{padding: '1.3em 1.2em 0em 5em'}}>
                        <h4 style={taskTitleStyle}>En réalisant vos projets</h4>
                            <p>
                                Application web et mobile visant à acquérir, stocker et traiter des données, « from
                                scratch » ou héritant d’une lourde dette technique, implémentons ensemble la meilleure
                                solution pour répondre à votre besoin.
                            </p>
                            <p>
                                Vous avez des besoins spécifiques ? Traitement audio ou vidéo, capteurs connectés,
                                Intelligence Artificielle et deep learning, temps réel et web socket ? Le projet n’en sera que
                                plus amusant !
                            </p>
                    </Grid>
                    <Grid item sm={6} style={{padding: '1.3em 5em 0em 1.2em'}}>
                        <h4 style={taskTitleStyle}>En vous accompagnant dans vos réflexions !</h4>
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
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
};