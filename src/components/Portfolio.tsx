import {Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, Hidden} from "@material-ui/core";
import React from "react";
import Plus from '../assets/ouvrir.svg'
import Minus from '../assets/fermer.svg'
import Arrow from '../assets/fleche.svg'
import Quote from '../assets/apostrophe.svg'
import Lucine from '../assets/Lucine_logo.png'
import LucineLight from '../assets/Lucine_logo_light.png'
import LucinePicture from '../assets/Lucine-Realite-Virtuelle.jpg'
import Airudit from '../assets/airudit_logo.png'
import AiruditLight from '../assets/airudit_logo_light.png'
import AiruditPicture from '../assets/Airudit_Voice.jpg'
import SocialFootprint from '../assets/logo social footprint.png'
import SocialFootprintLight from '../assets/logo social footprint_light.png'
import SocialFootprintPicture from '../assets/Social Footprint.png'
import styled from "styled-components";
import utilities from '../style/utilities.module.css';
import {animated} from "react-spring";
import useBoop from "../hooks/UseBoop";

const Portfolio = () => {
    const lucineBoop = useBoop({rotation: 15});
    const airuditBoop = useBoop({rotation: 15});
    const socialFootprintBoop = useBoop({rotation: 15});

    const Icon = styled((props: any) => (
        <div {...props}>
            <div style={{cursor: 'pointer'}} className="expanded">
                <animated.img style={props.style} src={Plus} alt='plus'/>
            </div>
            <div style={{cursor: 'pointer'}} className="collapsed">
                <animated.img style={props.style} src={Minus} alt='minus'/>
            </div>
        </div>
    ))`
      & > .expanded {
        display: block;
      }

      & > .collapsed {
        display: none;
      }

      .Mui-expanded & > .collapsed {
        display: block;
      }

      .Mui-expanded & > .expanded {
        display: none;
      }
    `;

    const ListItem = styled((props: any) => (
        <li {...props}>
        </li>
    ))`
      & {
        paddingLeft: 1.3em;
        margin: 2em 2em 2em 0;
      }

      &:before {
        content: url(${Arrow});
        display: inline-block;
        marginLeft: -1.3em;
        width: 1.3em;
      }
    `;


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
    return (
        <div id='Portfolio'>
            <Hidden mdUp>
                <span style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '3em',
                }}>
                    <h2 className={utilities.secondaryTitle} style={{
                        borderBottom: '1px solid var(--secondaryColor)',
                        padding: '0.5em 1em'
                    }}>Portfolio</h2>
                </span>
            </Hidden>
            <Accordion className={classes.accordion} style={{margin: '3em',}}>
                <AccordionSummary
                    expandIcon={
                        <Icon style={lucineBoop.style}></Icon>
                    }
                    className={classes.accordionHeader}
                    onMouseEnter={lucineBoop.trigger} onTouchStart={lucineBoop.trigger}
                >
                    <Grid container justify='space-between' alignItems='baseline'>
                        <Grid item>
                            Lucine
                        </Grid>
                        <Grid item>
                            <Hidden xsDown>
                                <img src={Lucine} alt='Lucine'/>
                            </Hidden>
                            <Hidden smUp>
                                <img src={LucineLight} alt='Lucine'/>
                            </Hidden>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction='column'>
                        <Grid item>
                            <h4 style={{fontSize: '1.5em', fontWeight: 'normal',}}>Lucine propose des thérapies
                                numériques pour soulager les douleurs chronique.</h4>
                        </Grid>
                        <Grid item container alignItems='center'>
                            <Grid item md={5}>
                                <img src={LucinePicture} alt='Lucine'
                                     style={{maxWidth: '100%', marginRight: '1em'}}/>
                            </Grid>
                            <Grid item md={1}>
                            </Grid>
                            <Grid item md={6}>
                                Dopée par des algorithmes d’Intelligence Artificielle leur permettant de s’adapter aux
                                spécificités
                                des patients, les produits Lucine nécessitent l’agrégation de sources de données
                                diverses,
                                des analyses de pointes avant de diffuser les stimulations thérapeutique visuelles et
                                auditives adéquates.
                            </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item md={2}
                                  style={{borderBottom: '1px solid var(--secondaryColor)', margin: '2em 0 1em 0'}}>
                            </Grid>
                        </Grid>
                        <Grid item>
                            En tant que CTO, j’étais en charge de concevoir et d’implémenter, avec une équipe de 10
                            personnes, l’ensemble des éléments techniques permettant à la magie d’opérer.<br/>
                            Nous avons construit en deux ans un <b>écosystème d’applicatifs matures</b> avec des
                            interfaces
                            d’administration, des interfaces à l’usage du patient et des interfaces de récupération de
                            données à destination des chercheurs de l’équipe.<br/>
                            Cette réussite technique a permis une <b>levée de fond record</b> pour une entreprise
                            de cette maturité de 5.5 Million d’euros.<br/>
                            La sévérité des contraintes dû au domaine médicale en terme de réglementation, de sécurité
                            des données, d’interopérabilité fut un moteur exaltant pour construire des applicatifs
                            résilient et évolutif.<br/><br/>
                            <b>Sous ma direction technique, Lucine s’est structuré comme un véritable éditeur de
                                logiciel
                                optimisant l’ensemble des processus de conception, de création, de déploiement et de
                                monitoring des applicatifs.</b>
                        </Grid>
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
                            <Grid item md={6}>
                                <h5 style={{
                                    fontFamily: 'var(--secondaryFont)',
                                    textTransform: 'uppercase',
                                    fontSize: '1em',
                                    fontWeight: 'normal',
                                }}>Résultats obtenus :</h5>
                                <ul className={classes.resultsList}>
                                    <ListItem> Plateforme modulaire, testée, scalable et sécurisée</ListItem>
                                    <ListItem> Equipe structurée, performante et autonome</ListItem>
                                    <ListItem> Audits techniques ayant mené à une levée de fonds</ListItem>
                                    <ListItem> Deux articles scientifiques en cours de revue dans le domaine du
                                        traitement
                                        d’images par réseaux de neurones
                                    </ListItem>
                                    <ListItem> Une posture managériale plébiscitée dans un contexte mouvant</ListItem>
                                </ul>
                            </Grid>
                            <Grid item md={6}>
                                <h5 style={{
                                    fontFamily: 'var(--secondaryFont)',
                                    textTransform: 'uppercase',
                                    fontSize: '1em',
                                    fontWeight: 'normal',
                                }}>Témoignage :</h5>
                                <div><b>Paul Duchâteau</b></div>
                                <div>Directeur Produit chez Lucine</div>
                                <p style={{position: 'relative', paddingTop: '1.6em', zIndex: 1,}}>
                                    <img src={Quote} alt='quote'
                                         style={{position: 'absolute', left: '-1em', top: '0', zIndex: -1}}/>
                                    <span>
                                        J'ai travaillé avec Pierre-Yves au sein de la société Lucine.
                                        Il a dessiné l'intégralité de l'architecture logicielle, construit une équipe de développement / RSI / Devops robuste
                                        et managé/formé cette équipe depuis les phases de design jusqu'aux mises en production de plateformes complexes
                                        dans un écosytème difficile réglementairement.
                                        La tâche était conséquente et Pierre-Yves a su relever le défi brillamment,
                                        menant la société jusqu'à une levée de fonds record dans son domaine.
                                        Je recommande vivement PY pour ses compétences techniques, mais également son management bienveillant et empathique,
                                        ainsi que son sang froid à toute épreuve.
                                    </span>
                                </p>
                            </Grid>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion} style={{margin: '3em',}}>
                <AccordionSummary
                    expandIcon={
                        <Icon style={airuditBoop.style}></Icon>
                    }
                    className={classes.accordionHeader}
                    onMouseEnter={airuditBoop.trigger} onTouchStart={airuditBoop.trigger}
                >
                    <Grid container justify='space-between' alignItems='baseline'>
                        <Grid item>
                            Airudit
                        </Grid>
                        <Grid item>
                            <Hidden xsDown>
                                <img src={Airudit} alt='Airudit'/>
                            </Hidden>
                            <Hidden smUp>
                                <img src={AiruditLight} alt='Airudit'/>
                            </Hidden>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction='column'>
                        <Grid item>
                            <h4 style={{fontSize: '1.5em', fontWeight: 'normal',}}>Airudit développe des agents
                                conversationnels.</h4>
                        </Grid>
                        <Grid item container alignItems='center'>
                            <Grid item md={5}>
                                <img src={AiruditPicture} alt='Airudit'
                                     style={{maxWidth: '100%', marginRight: '1em'}}/>
                            </Grid>
                            <Grid item md={1}>
                            </Grid>
                            <Grid item md={6}>
                                Les agents conversationnels permettant d’interagir avec un matériel
                                informatique en utilisant <b>le langage naturel</b>. Au cœur de ces agents, afin de leur
                                permettre
                                de comprendre le langage humain, un moteur sémantique décompose, trie, pèse et
                                sélectionne ce qui lui semble faire le plus de sens. En constante évolution se moteur
                                agrège un ensemble de briques technologiques lui permettant d’affiner toujours plus sa
                                compréhension.
                            </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item md={2}
                                  style={{borderBottom: '1px solid var(--secondaryColor)', margin: '2em 0 1em 0'}}>
                            </Grid>
                        </Grid>
                        <Grid item>
                            En tant que Leader technique de cette petite équipe de développeur, j’ai
                            été au centre du changement d’échelle de ce moteur sémantique.<br/>
                            Un simple
                            apprentissage d’un nouveau domaine grâce à une cartographie correctement formaté, une
                            ontologie,
                            ouvrait un nouveau champ de discussion possible avec la machine. <br/>
                            Mon travail à
                            également rendu possible l’accès à l’agent conversationnel sur de nouveaux supports : web,
                            serveur vocale, internet des objets.
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion} style={{margin: '3em',}}>
                <AccordionSummary
                    expandIcon={
                        <Icon style={socialFootprintBoop.style}></Icon>
                    }
                    className={classes.accordionHeader}
                    onMouseEnter={socialFootprintBoop.trigger} onTouchStart={socialFootprintBoop.trigger}
                >
                    <Grid container justify='space-between' alignItems='baseline'>
                        <Grid item>
                            Social Footprint
                        </Grid>
                        <Grid item>
                            <Hidden xsDown>
                                <img src={SocialFootprint} alt='SocialFootprint'/>
                            </Hidden>
                            <Hidden smUp>
                                <img src={SocialFootprintLight} alt='SocialFootprint'/>
                            </Hidden>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction='column'>
                        <Grid item>
                            <h4 style={{fontSize: '1.5em', fontWeight: 'normal',}}>
                                Social Footprint mesure l'impact des influenceurs présents sur les réseaux
                                sociaux.</h4>
                        </Grid>
                        <Grid item container alignItems='center'>
                            <Grid item md={5}>
                                <img src={SocialFootprintPicture} alt='SocialFootprint'
                                     style={{maxWidth: '100%', marginRight: '1em'}}/>
                            </Grid>
                            <Grid item md={1}>
                            </Grid>
                            <Grid item md={6}>
                                Social Footprint permet d’identifier objectivement les domaines et la puissance de son
                                impact sur sa communauté. Cette aventure entrepreneuriale fut riche d’un point de vue technique
                                autant que d’un  point de vue business. La perfection de l’outil et mon incapacité
                                à le vendre ont prouvé que j’avais une plus grande appétence pour le premier que pour le
                                second.
                            </Grid>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    )
};

export default Portfolio;