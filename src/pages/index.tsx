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
                    <Button id="btn-7">7</Button>
                    <Button id="btn-8">8</Button>
                    <Button id="btn-9">9</Button>
                    <Button id="btn-MF">MF</Button>
                </Buttons>

                <Buttons>
                    <Button id="btn-4">4</Button>
                    <Button id="btn-5">5</Button>
                    <Button id="btn-6">6</Button>
                    <Button id="btn-x">X</Button>
                </Buttons>

                <Buttons>
                    <Button id="btn-1">1</Button>
                    <Button id="btn-2">2</Button>
                    <Button id="btn-3">3</Button>
                    <Button id="btn-FIM">FIM</Button>
                </Buttons>

                <Buttons>
                    <Button id="btn-0">0</Button>
                    <Button id="btn-AL">AL</Button>
                    <Button id="btn-AC">AC</Button>
                    <Button id="btn-E">E</Button>
                </Buttons>
            </Areabuttons>
        </Container>
    );
}