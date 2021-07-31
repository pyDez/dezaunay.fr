import {Accordion, AccordionDetails, AccordionSummary, createStyles, Grid, makeStyles} from "@material-ui/core";
import React from "react";
import Plus from '../assets/ouvrir.svg'
import Minus from '../assets/fermer.svg'
import Lucine from '../assets/Lucine_logo.png'
import styled from "styled-components";

export default () => {
    const Icon = styled((props:any) => (
        <div {...props}>
            <img src={Plus} alt='plus' className="expanded"/>
            <img src={Minus} alt='minus' className="collapsed"/>
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
    });

    const classes = useStyles();
    return (
        <>
            <Accordion className={classes.accordion} style={{margin: '3em',}}>
                <AccordionSummary
                    expandIcon={
                            <Icon></Icon>
                    }
                    className={classes.accordionHeader}
                >
                    <Grid container justify='space-between' alignItems='baseline'>
                        <Grid item>
                            Lucine
                        </Grid>
                        <Grid item>
                            <img src={Lucine} alt='Lucine'/>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <span>
                        Lucine propose des thérapies numériques pour soulager les douleurs chronique. Dopée
par des algorithmes d’Intelligence Artificielle leur permettant de s’adapter aux spécificités

des patients, les produits Lucine nécessitent l’agrégation de sources de données diverses,
des analyses de pointes avant de diffuser les stimulations thérapeutique visuelles et
auditives adéquates.
En tant que CTO, j’étais en charge de concevoir et d’implémenter, avec une équipe de 10
personnes, l’ensemble des éléments techniques permettant à la magie d’opérer. Nous
avons construit en deux ans un écosystème d’applicatifs matures avec des interfaces
d’administration, des interfaces à l’usage du patient et des interfaces de récupération de
données à destination des chercheurs de l’équipe. Cette réussite technique a permis une
levée de fond record pour une entreprise de cette maturité de 5.5 Million d’euros. La
sévérité des contraintes dû au domaine médicale en terme de réglementation, de sécurité
des données, d’interopérabilité fut un moteur exaltant pour construire des applicatifs
résilient et évolutif.
Sous ma direction technique, Lucine s’est structuré comme un véritable éditeur de logiciel
optimisant l’ensemble des processus de conception, de création, de déploiement et de
monitoring des applicatifs.
Résultats obtenus :
 Plateforme modulaire, testée, scalable et sécurisée
 Equipe structurée, performante et autonome
 Audits techniques ayant mené à une levée de fonds
 Deux articles scientifiques en cours de revue dans le domaine du traitement
d’images par réseaux de neurones
 Une posture managériale plébiscitée dans un contexte mouvant
                    </span>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<img src={Plus} alt='plus'/>}
                >
                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
            </Accordion>
        </>
    )
};