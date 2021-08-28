import styled from "styled-components";

export const Container = styled.div`
    margin: 20px;
    max-height: 100%;
    background-color: #1c1b22;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    border-radius: 55px;

    &:hover{ 
        transition: 0.3s;
        transform: scale(1.1);
    }

    @media screen and (min-width: 940px) {
        width: 30%
    }

    @media screen and (max-width: 640px) {
        width: 100%
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 22px;
    margin-top: 20px;
    font-weight: 500;
    color: #fff;
`;

export const Image = styled.img`
    width: 100%;
`;

export const Cargo = styled.p`
    text-align: center;
    font-size: 22px;
    margin-top: 20px;
    font-weight: 300; 
    color: #fff;   
`;

export const Descriçao = styled.p`
    text-align: center;
    font-size: 18px;
    margin-top: 15px;
    color: #fff;
`;