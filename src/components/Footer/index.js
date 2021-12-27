import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaSpotify } from 'react-icons/fa'
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">ZPizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" arial-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/raditdanu/" target="_blank" arial-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://open.spotify.com/show/47iJTTVIFo6zoFKbAkPSZf" target="_blank" arial-label="Spotify" rel="noopener noreferrer">
                                <FaSpotify />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/raditya-danu-129a72205/" target="_blank" arial-label="Linkedin" rel="noopener noreferrer">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
