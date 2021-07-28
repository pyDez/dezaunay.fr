import Grid from '@material-ui/core/Grid'
import {useLocation, Link} from 'react-router-dom'
import menuStyle from '../../style/menu.module.css';

export default () => {
    const {pathname} = useLocation()
    let activeTab = 0;
    switch (pathname) {
        case '/Accompagnement':
            activeTab = 0;
            break;
        case '/Portfolio':
            activeTab = 1;
            break;
        case '/Contact':
            activeTab = 2;
            break;
        default:
            break;
    }

    return (
        <>
            <Grid container justify='space-evenly'
                  style={{marginTop: '2em', borderBottom: '1px solid var(--secondaryColor)'}}>
                <Link to={'Accompagnement'} style={{textDecoration: 'none', color: 'inherit'}}>
                    <Grid item className={activeTab === 0 ? menuStyle.activeTab : undefined}>
                        <h3 className={menuStyle.tabTitle}>Accompagnement</h3>
                    </Grid>
                </Link>
                <Link to={'Portfolio'} style={{textDecoration: 'none', color: 'inherit'}}>
                    <Grid item className={activeTab === 1 ? menuStyle.activeTab : undefined}>
                        <h3 className={menuStyle.tabTitle}>Portfolio</h3>
                    </Grid>
                </Link>
                <Link to={'Contact'} style={{textDecoration: 'none', color: 'inherit'}}>
                    <Grid item className={activeTab === 2 ? menuStyle.activeTab : undefined}>
                        <h3 className={menuStyle.tabTitle}>Contact</h3>
                    </Grid>
                </Link>

            </Grid>
            {JSON.stringify(pathname)}
        </>
    )
};