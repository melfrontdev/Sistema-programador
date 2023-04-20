import styled from "styled-components";

export const Container = styled.div`
    width: 369px;
    height: 649px;
    display: flex;
    margin: 20px auto;
    flex-direction: column;
    align-items: center;
    border: 10px solid rgb(8, 0, 0);
    border-radius: 10px;
    color: rgb(0, 0, 0);
    font-size: large;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    justify-content: center;
    background-color: rgb(90, 88, 88);
    box-shadow: 10px 10px 5px 0px rgba(163, 163, 163, 1);

    h1 {
        color: #fff;
    }
`

/* visor e area visor */

export const Areavisor = styled.div`
    margin-top: 15px;
    width: 90%;
    height: 202px;
    border: 5px solid #fff;
    border-radius: 5px;
    position: relative;
    top: -20px;

    h4 {
        position: relative;
        left: 22px;
        color: #569f56;
    }
`
export const Visor = styled.div`
    margin: 30px auto 10px;
    width: 90%;
    height: 50px;
    border-radius: 5px;
    align-items: center;
    background-color: antiquewhite;
    font-family: 'Courier New', Courier, monospace;
    font-size: 60px;
    overflow: hidden;
`
/* botao e area do botao */

export const Areabuttons = styled.div`
    border: 5px solid white;
    border-radius: 5px;
    width: 90%;
    height: 302px;
    top: 26px;
    position: relative;

    .btn4 {
        background-color: #e9b8b8 !important;
    }

    .btn5 {
        background-color: #eeeec8 !important;
    }

    .btn6 {
        background-color: #abdfab !important;
    }

    .btn1 {
        background-color: red !important;
    }

    .btn2 {
        background-color: yellow !important;
    }

    .btn3 {
        background-color: green  !important;
    }

    .al {
        background-color: grey !important;
    }

    .ac {
        background-color: grey !important;
    }

    .e {
        background-color: grey !important;
        color: yellow;
    }

    .btnfim {
        background-color: grey !important;
    }

    .btnx {
        background-color: grey !important;
        color: yellow;
    }

    .btnmf {
        background-color: grey !important;
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6px 12px;
`;

export const Button = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-weight: 600;
    font-family: 'roboto';
    background: #fff;
    color: black;
    user-select: none;
    gap: 50px;
    cursor: pointer;

    &:active{
        position: relative;
        top: 1px;
    }
`
