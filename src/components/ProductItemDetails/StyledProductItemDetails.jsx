import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {device} from "../../styles/breakpoints/breakpoints";

export const ContainerDetails = styled.div`
display: flex;
flex-direction: column;
width: 100%;
    @media ${device.tabletL}{
        display: grid;
        grid-template-columns: 50% auto;
        gap: 1rem 3rem;
        border-bottom: .1rem solid #D3D7DA;
        padding-bottom: 4.2rem;
        margin-bottom: 10rem;
    }
`;

export const ContainerProduct = styled.div`
position: relative;
display: flex;
flex-direction: column;
padding: 0 1.2rem 1.2rem;
`;

export const Price = styled.span`
font-size: 4rem;
font-weight: 800;
color: #007042;
padding-bottom: 2rem;
    &::after{
        content: 'грн';
        position: relative;
        left: 1rem;
        font-size: 1.8rem;
        font-weight: 700;
    }
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
position: absolute;
top: 1rem;
right: 1.2rem;
font-size: 2rem;
color: #E6ADBF;
cursor: pointer;
transition: all .3s linear;
    &:hover{
        transform:scale(1.2);
    }
    @media ${device.tabletM}{
        font-size: 2.5rem;
    }
    @media ${device.tabletL}{
        font-size: 3rem;
    }
`;

export const Article = styled.span`
position: absolute;
right: 1.2rem;
top: 4.5rem;
font-weight: 700;
font-size: 1.6rem;
color: #57646E;
`;

export const Description = styled.span`
text-align: justify;
font-weight: 400;
font-size: 1.4rem;
line-height: 2.2rem;
`;

export const Subtitle = styled.span`
display: flex;
flex-direction: column;
font-size: 2rem;
font-weight: 700;
padding: 2rem 0;
`;

export const Actions = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 3rem;
`;

export const SpecificationContainer = styled.div`
display: grid;
grid-template-columns: 15% auto;
grid-template-rows: auto;
gap: 2rem;
padding-top: 1rem;
`;

export const DescriptionKey = styled.span`
justify-content: center;
font-weight: 400;
font-size: 1.4rem;
color: #57646E;
`;

export const ProductItemList = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    @media ${device.tabletM}{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    }
    @media ${device.tabletL} {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    @media ${device.desktop} {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }
`;