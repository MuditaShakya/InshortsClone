
import {AppBar, Toolbar, styled} from '@mui/material';
import {Menu} from '@mui/icons-material';

const StyledHeader=styled(AppBar)`
    background:#FFFFFF;
    height:70px;
    
`;

const MenuIcon=styled(Menu)`
    color:#000000;
`;

const Header=() => {

    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return (
       <StyledHeader position="static">
        <Toolbar>
            <MenuIcon />
            <img src={url} alt="logo" style={{ width: 100, position: "absolute", left: "50%",transform: "translateX(-50%)"}} />

        </Toolbar>
       </StyledHeader>
    )
}

export default Header;