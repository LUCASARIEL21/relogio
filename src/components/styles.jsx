import styled from 'styled-components';

export const relogio = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 200px;
    width: 550px;
    background: transparent;
    border-radius: 3px;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, .5);
`;

export const horas = styled.div`
    height: 170px;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: rgba(5, 5, 5, .9);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, .7);
    border-radius: 7px;
    letter-spacing: 3px;
`;

export const minutos = styled.div`
    height: 170px;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: rgba(5, 5, 5, .9);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, .7);
    border-radius: 7px;
    letter-spacing: 3px;
`;

export const segundos = styled.div`
    height: 170px;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: rgba(5, 5, 5, .9);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, .7);
    border-radius: 7px;
    letter-spacing: 3px;
`;

export const shoras = styled.span`
    font-weight: bolder;
    font-size: 60px;
`;

export const smin = styled.span`
    font-weight: bolder;
    font-size: 60px;
`;

export const sseg = styled.span`
    font-weight: bolder;
    font-size: 60px;
`;

export const htemp = styled.span`
    font-weight: bolder;
    font-size: 10px;
`;

export const mtemp = styled.span`
    font-weight: bolder;
    font-size: 10px;
`;

export const stemp = styled.span`
    font-weight: bolder;
    font-size: 10px;
`;

// .relogio span {
//     font-weight: bolder;
//     font-size: 60px;
// }

// .relogio span.tempo {
//     font-size: 10px;
// }