import {Grid, Hidden} from "@material-ui/core";
import React from "react";
import Github from '../assets/github.svg'
import Lucine from '../assets/Lucine_logo.png'
import LucineLight from '../assets/Lucine_logo_light.png'
import LucinePicture from '../assets/Lucine-Realite-Virtuelle.jpg'
import Airudit from '../assets/airudit_logo.png'
import AiruditLight from '../assets/airudit_logo_light.png'
import AiruditPicture from '../assets/Airudit_Voice.jpg'
import Bnp from '../assets/logo-bnp.png'
import BnpLight from '../assets/logo-bnp-light.png'
import BnpPicture from '../assets/bnp-picture.png'
import Natixis from '../assets/logonatixis.png'
import NatixisLight from '../assets/logonatixis_Light.png'
import NatixisPicture from '../assets/Natixis.jpg'
import SocialFootprint from '../assets/logo social footprint.png'
import SocialFootprintLight from '../assets/logo social footprint_light.png'
import SocialFootprintPicture from '../assets/Social Footprint.png'
import utilities from '../style/utilities.module.css';
import Experience, { ExperienceProps } from "./Experience";

const Portfolio = () => {

    const Experiences: ExperienceProps[] =
        [
            {
                Name: 'Lucine',
                Logo: Lucine,
                LogoLight: LucineLight,
                Picture: LucinePicture,
                Description: 'Lucine propose des thérapies numériques pour soulager les douleurs chroniques.',
                Introduction: 'Dopés par des algorithmes d’Intelligence Artificielle leurs permettant de s’adapter aux spécificités ' +
                    'des patients, les produits Lucine nécessitent l’agrégation de sources de données diverses, ' +
                    'des analyses de pointes avant de diffuser les stimulations thérapeutiques visuelles et ' +
                    'auditives adéquates.',
                Body:
                    'En tant que CTO, j’étais en charge de concevoir et d’implémenter, avec une équipe de 10 ' +
                    'personnes, l’ensemble des éléments techniques permettant à la magie d’opérer.<br/> ' +
                    'Nous avons construit en deux ans un <b>écosystème d’applicatifs matures</b> avec des interfaces ' +
                    'd’administration, des interfaces à l’usage du patient et des interfaces de récupération de ' +
                    'données à destination des chercheurs de l’équipe.<br/> ' +
                    'Cette réussite technique a permis une <b>levée de fond record</b> pour une entreprise ' +
                    'de cette maturité de 5.5 Million d’euros.<br/> ' +
                    'La sévérité des contraintes dûe au domaine médicale en terme de réglementation, de sécurité ' +
                    'des données, d’interopérabilité fut un moteur exaltant pour construire des applicatifs ' +
                    'résilients et évolutifs.<br/><br/> ' +
                    '<b>Sous ma direction technique, Lucine s’est structuré comme un véritable éditeur de logiciel ' +
                    'optimisant l’ensemble des processus de conception, de création, de déploiement et de ' +
                    'monitoring des applicatifs.</b>',
                Results: [
                      'Plateforme modulaire, testée, scalable et sécurisée',
                      'Equipe structurée, performante et autonome',
                      'Audits techniques ayant mené à une levée de fonds',
                      'Deux articles scientifiques en cours de revue dans le domaine du traitement d’images par réseaux de neurones',
                      'Une posture managériale plébiscitée dans un contexte mouvant',
                ],
                Testimony: {
                    Name: 'Paul Duchâteau',
                    Job: 'Directeur Produit chez Lucine',
                    Body: 'J\'ai travaillé avec Pierre-Yves au sein de la société Lucine.  ' +
                        ' Il a dessiné l\'intégralité de l\'architecture logicielle, construit une équipe de développement / RSI / Devops robuste  ' +
                        ' et managé/formé cette équipe depuis les phases de design jusqu\'aux mises en production de plateformes complexes  ' +
                        ' dans un écosytème difficile réglementairement.  ' +
                        ' La tâche était conséquente et Pierre-Yves a su relever le défi brillamment,  ' +
                        ' menant la société jusqu\'à une levée de fonds record dans son domaine.  ' +
                        ' Je recommande vivement PY pour ses compétences techniques, mais également son management bienveillant et empathique,  ' +
                        ' ainsi que son sang froid à toute épreuve.',
                },
            },
            {
                Name: 'Airudit',
                Logo: Airudit,
                LogoLight: AiruditLight,
                Picture: AiruditPicture,
                Description: 'Airudit développe des agents conversationnels.',
                Introduction: 'Les agents conversationnels permettent d’interagir avec un matériel ' +
                    'informatique en utilisant <b>le langage naturel</b>. Afin de leur permettre ' +
                    'de comprendre le langage humain, on trouve, au cœur de ces agents, un moteur sémantique qui décompose, trie, pèse et ' +
                    'sélectionne ce qui lui semble faire le plus de sens. En constante évolution ce moteur ' +
                    'agrège un ensemble de briques technologiques lui permettant d’affiner toujours plus sa compréhension.',
                Body:
                    'En tant que Leader technique de cette petite équipe de développeurs, j’ai ' +
                    'été au centre du changement d’échelle de ce moteur sémantique.<br/> ' +
                    'L\'ouverture d\'un nouveau champ de discussion possible avec la machin peut désormais se faire ' +
                    'grâce à un simple apprentissage d’un nouveau domaine basé sur une cartographie correctement formatée : une ontologie. ' +
                    'Mon travail à également rendu possible l’accès à l’agent conversationnel sur de nouveaux supports : web, ' +
                    'serveur vocale, internet des objets.',
                Results: null,
                Testimony: null,
            },
            {
                Name: 'Social Footprint',
                Logo: SocialFootprint,
                LogoLight: SocialFootprintLight,
                Picture: SocialFootprintPicture,
                Description: ' Social Footprint mesure l\'impact des influenceurs présents sur les réseaux sociaux.',
                Introduction: 'Social Footprint permet d’identifier objectivement les domaines et la puissance de son ' +
                    'impact sur sa communauté. Cette aventure entrepreneuriale fut riche d’un point de vue technique ' +
                    'autant que d’un  point de vue business. La perfection de l’outil et mon incapacité ' +
                    'à le vendre ont prouvé que j’avais une plus grande appétence pour le premier que pour le second.',
                Body: null,
                Results: null,
                Testimony: null,
            },
            {
                Name: 'BNP Paribas',
                Logo: Bnp,
                LogoLight: BnpLight,
                Picture: BnpPicture,
                Description: 'BNP Paribas est la banque d\'un monde qui change',
                Introduction: 'Maitrise d’ouvrage, support fonctionnel et développement sur l\'outil front office de THEAM, l\'une des entités de gestion de fortune de BNP Paribas.\n',
                Body:
                    'Analyse fonctionnelle et développement des besoins utilisateurs dédiés à la gestion de fonds : mise en place de méthodes de pricing, calculs d’exposition, calculs de frais de gestion, ratios réglementaires et autres outils d’aide à la décision.\n' +
                    'Support pour les gérants utilisant l’outil : passage d’ordres, suivi des positions, validation des Valeurs Liquidatives et calcul de frais de gestion, exécution de requêtes spécifiques.',
                Results: null,
                Testimony: null,
            },
            {
                Name: 'Natixis',
                Logo: Natixis,
                LogoLight: NatixisLight,
                Picture: NatixisPicture,
                Description: 'Natixis est une banque internationale spécialisée dans la gestion d’actifs et de fortunes, la banque de financement et d’investissement',
                Introduction: 'Développeur au sein de l\'équipe d\'analyse quantitative, j\'étais en charge de la création d\'outils d\'aide à la décision en matière d\'investissements financiers.\n' +
                    'Basé sur de puissants algorithmes statistiques, ces applications permettaient de mettre le savoir-faire de Natixis entre toutes les mains.',
                Body: null,
                Results: null,
                Testimony: null,
            }
        ]
            
        
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
                        padding: '0.5em 1em',
                        zIndex: 2,
                    }}>Portfolio</h2>
                </span>
            </Hidden>
            {Experiences.map((experience, index) =>
                <Experience Name={experience.Name}
                            Logo={experience.Logo}
                            LogoLight={experience.LogoLight}
                            Picture={experience.Picture}
                            Description={experience.Description}
                            Introduction={experience.Introduction}
                            Body={experience.Body}
                            Testimony={experience.Testimony}
                            Results={experience.Results}
                            key={index}></Experience>
            )}

            <div style={{margin: '3em',}}>
                    Retrouvez mes autres projets sur {' '}
                <a href='https://github.com/pyDez' style={{color: 'var(--secondaryColor)', textDecoration: 'none', paddingRight:'1em'}}>
                    Github
                    <img src={Github} alt='Github logo' style={{paddingLeft:'0.5em', verticalAlign:'middle'}}/>
                </a>
            </div>
        </div>
    )
};

export default Portfolio;