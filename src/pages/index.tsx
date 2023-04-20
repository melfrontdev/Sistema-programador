import { Container, Areabuttons, Buttons, Button, Areavisor, Visor } from "@/styles/styles";

export default function Programador() {
    return (

        <Container>

            <Areavisor>
                <Visor>

                </Visor>
                <h4>GW I</h4>
            </Areavisor>

            <h1>PROGRAMADOR</h1>

            {/* botóes */}

            <Areabuttons>
                <Buttons>
                    <Button id="btn-7" className="7">7</Button>
                    <Button id="btn-8" className="8">8</Button>
                    <Button id="btn-9" className="9">9</Button>
                    <Button id="btn-MF" className="btnmf">MF</Button>
                </Buttons>

                <Buttons>
                    <Button id="btn-4" className="btn4">4</Button>
                    <Button id="btn-5" className="btn5">5</Button>
                    <Button id="btn-6" className="btn6">6</Button>
                    <Button id="btn-x" className="btnx">X</Button>
                </Buttons>

                <Buttons>
                    <Button id="btn-1" className="btn1">1</Button>
                    <Button id="btn-2" className="btn2">2</Button>
                    <Button id="btn-3" className="btn3">3</Button>
                    <Button id="btn-FIM" className="btnfim">FIM</Button>
                </Buttons>

                <Buttons>
                    <Button id="btn-0" className="0">0</Button>
                    <Button id="btn-AL" className="al">AL</Button>
                    <Button id="btn-AC" className="ac">AC</Button>
                    <Button id="btn-E" className="e">E</Button>
                </Buttons>
            </Areabuttons>
        </Container>
    );
}