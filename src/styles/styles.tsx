import styled from "styled-components";

export const Container = styled.div`
    width: 450px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 10px solid rgb(8, 0, 0);
    border-radius: 10px;
    color: rgb(0, 0, 0);
    font-size: large;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    justify-content: flex-start;
    background-color: rgb(90, 88, 88);
    box-shadow: 10px 10px 5px 0px rgba(163, 163, 163, 1);
    margin: 50px auto;
`;

export const Areavisor = styled.div`
    margin-top: 26px;
    width: 90%;
    height: 110px;
    border: 5px solid rgb(255, 255, 255);
    border-radius: 7px;

    P {
    position: absolute;
    font-family: 'Roboto',sans-serif;
    margin-top: -23;
    margin-left: 21px;
    font-size: 15px;
    color: rgb(42,224,42) !important;
}
`

export const Visor = styled.div`
    margin: 19px auto 10px;
    width: 90%;
    height: 67px;
    border-radius: 5px;
    align-items: center;
    background-color: antiquewhite;
    font-family: 'DS-Digital', sans-serif;
    font-size: 60px;
    overflow: hidden;
`

export const Buttons = styled.div`
    margin-top: 15px;
    width: 90%;
    height: 434px;
    border: 5px solid rgb(255, 255, 255);
    border-radius: 7px;

    .button {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-weight: 600;
    font-family: 'Roboto';
    background: #FFF;
    margin: 8px;
    color: black;
    cursor: pointer;
    user-select: none;
    box-shadow: 5px 5px 5px 0px rgb(59, 58, 58); }

`