import { Container, Areavisor, Visor, Buttons } from "@/styles/styles";


export default function Controller() {
    return (

        <Container>
            <Areavisor>

                <p>GREENWAVE GW3</p>
                <Visor>

                </Visor>

                <Buttons>
                    <div className="areabuttons">
                        <div id="btn-7" className="button">7</div>
                        <div id="btn-8" className="button">8</div>
                        <div id="btn-9" className="button">9</div>
                        <div id="btn-MF" className="button mf">MF</div>
                    </div>

                    <div className="areabuttons">
                        <div id="btn-4" className="button pr">4</div>
                        <div id="btn-5" className="button py">5</div>
                        <div id="btn-6" className="button pg">6</div>
                        <div id="btn-x" className="button x">X</div>
                    </div>

                    <div className="areabuttons">
                        <div id="btn-1" className="button red">1</div>
                        <div id="btn-2" className="button yellow">2</div>
                        <div id="btn-3" className="button green">3</div>
                        <div id="btn-FIM" className="button fim">FIM</div>
                    </div>

                    <div className="areabuttons">
                        <div id="btn-0" className="button">0</div>
                        <div id="btn-AL" className="button al">AL</div>
                        <div id="btn-AC" className="button ac">AC</div>
                        <div id="btn-E" className="button e">E</div>
                    </div>
                </Buttons>

            </Areavisor>
        </Container>
    );
}