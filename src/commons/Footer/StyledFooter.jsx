import styled from "styled-components";
import {device} from "../../styles/breakpoints/breakpoints";
import {Link} from "react-router-dom";

export const Container = styled.div`
display: flex;
flex-direction: column;
@media${device.tabletM}{
flex-basis: 50%;
}
`;
export const StyledLink = styled(Link)`
text-decoration: none;
color: initial;
font-size: 1.4rem;
line-height: 1.5;
`;
export const Title = styled.p`
font-size: 1.6rem;
font-weight: 500;
`;
export const FooterContactsContainer = styled.div`
display: flex;
    flex-direction: column;
    flex-basis: 100%;
    order: 3;
    @media${device.tabletM}{
    order: 2;
    flex-basis: 60%;
    align-items: flex-end;
    }
    @media${device.tabletL}{
order: 3;
flex-basis: 30%;

}

`
export const SocialLink = styled.a`
text-decoration: none;
color: initial;
&:not(:last-child) {
margin-right: 1.5rem;
}
`
export const ContactContainer = styled.div`
display: flex;
    flex-direction: column;
    
    line-height: 1.5;
    font-size: 1.6rem;
    @media${device.tabletM}{

}
`
export const TextAdress = styled.p`
font-size: 1.2rem;
width: 70%;
@media${device.tabletM}{
text-align: right;
}
`
export const SocialsContainer = styled.div`
display: flex;
@media${device.tabletM}{
align-items: flex-end;
}
`
export const SocialsIconContainer = styled.div`
display: flex;
width: 2.5rem;
height: 2.5rem;
`

export const CopyrightContainer = styled.div`
border-top: .1rem solid black;
order: 4;
flex-basis: 100%;
margin-top: 2rem;


`
export const CopyrightText = styled.p`
text-align: center;
`

export const StyledFooter = styled.footer`
  background-color: #e6e9ef;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`
export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 2rem;
flex-basis: 100%;
order: 2;
@media${device.tabletS}{
flex-direction: row;
justify-content: space-around;
}
@media${device.tabletM}{
order: 3;
flex-basis: 50%;
justify-content: flex-start;
}
@media${device.tabletL}{
order: 2;
flex-basis: 40%;
justify-content: flex-start;
}
`

export const FooterContainer = styled.div`
padding: 2rem 1.6rem 0;
display: flex;
flex-wrap: wrap;

@media${device.tabletM}{
padding: 3rem 2.4rem 0;
}
 @media ${device.tabletL}{
        padding: 4rem 5rem 0;
    }
    
    @media ${device.desktop}{
    margin: 0 auto;
        padding: 5rem 0 0 0;
        width: 120rem;
    }
`
