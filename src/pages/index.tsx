import { useState } from 'react'
import { Container, Areabuttons, Buttons, Button, Areavisor, Visor } from "@/styles/styles";

export default function Programador() {

    const [visor, setVisor] = useState<string>('');

    const teclasGw = (tecla: string) => {
        setVisor(oldState => oldState.concat(tecla))
    }

    return (





        <Container>

            <Areavisor>
                <Visor>{visor}</Visor>
                <h4>GW I</h4>
            </Areavisor>

            <h1>PROGRAMADOR</h1>

            {/* botóes */}

            <Areabuttons>
                <Buttons>
                    <Button id="btn-7" className="7" onClick={() => teclasGw('7')}>7</Button>
                    <Button id="btn-8" className="8" onClick={() => teclasGw('8')}>8</Button>
                    <Button id="btn-9" className="9" onClick={() => teclasGw('9')}>9</Button>
                    <Button id="btn-MF" className="btnmf" onClick={() => teclasGw('MF')}>MF</Button>
                </Buttons>

                <Buttons>
                    <Button id="btn-4" className="btn4" onClick={() => teclasGw('4')}>4</Button>
                    <Button id="btn-5" className="btn5" onClick={() => teclasGw('5')}>5</Button>
                    <Button id="btn-6" className="btn6" onClick={() => teclasGw('6')}>6</Button>
                    <Button id="btn-x" className="btnx" onClick={() => teclasGw('X')}>X</Button>
                </Buttons>

                <Buttons>
                    <Button id="btn-1" className="btn1" onClick={() => teclasGw('1')}>1</Button>
                    <Button id="btn-2" className="btn2" onClick={() => teclasGw('2')}>2</Button>
                    <Button id="btn-3" className="btn3" onClick={() => teclasGw('3')}>3</Button>
                    <Button id="btn-FIM" className="btnfim" onClick={() => teclasGw('FIM')}>FIM</Button>
                </Buttons>

                <Buttons>
                    <Button id="btn-0" className="0" onClick={() => teclasGw('0')} >0</Button>
                    <Button id="btn-AL" className="al" onClick={() => teclasGw('AL')}>AL</Button>
                    <Button id="btn-AC" className="ac" onClick={() => teclasGw('AC')}>AC</Button>
                    <Button id="btn-E" className="e" onClick={() => teclasGw('E')}>E</Button>
                </Buttons>
            </Areabuttons>
        </Container>
    );
}