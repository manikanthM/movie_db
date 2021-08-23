import React from 'react'

import TMDBLogo from '../../images/tmdb_logo.svg'
import RMDBLogo from '../../images/react-movie-logo.svg'

import {Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles'

const Header = () => (
    <Wrapper >
        <Content>
            <LogoImg src = {RMDBLogo} alt = 'rect_img' />
            <TMDBLogoImg src = {TMDBLogo} alt = 'db_logo' />
        </Content>
    </Wrapper>
);

export default Header;