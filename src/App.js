import "./App.css";
import { BsPerson } from "react-icons/bs";
import { FaReact, FaGraduationCap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { TbCertificate } from 'react-icons/tb'

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card2">
          <div className="header">
            <div className="avatar">
              <BsPerson size={64} />
            </div>
            <div className="title">
              <h3 className="name">Marcos Paulo Muniz Cardoso</h3>
              <span>Estagiário CRG GESTÃO | Full-Stack </span>
            </div>
          </div>
          <div className="container">
            <h3>Formação</h3>
            <div className="formacao">
            <div className="card--formacao">
                <TbCertificate size={40} /> 
                <div className="info">
                  <h5>Curso técnico</h5>
                  <label>UNINTER | Lógica de programação</label>
                  <small>2018 - 2018 (20 horas)</small>
                </div>
              </div>
              <hr />
              <div className="card--formacao">
              <TbCertificate size={40} /> 
                <div className="info">
                  <h5>Curso técnico</h5>
                  <label>ETEC Polivalente Americana | Análise e Desenvolvimento de Sistemas</label>
                  <small>2019 - 2021</small>
                </div>
              </div>
              <hr />
              <div className="card--formacao">
                <FaGraduationCap size={40} />
                <div className="info">
                  <h5>Ensino Superior</h5>
                  <label>FATEC Americana | Análise e Desenvolvimento de Sistemas</label>
                  <small>2022 - 2024</small>
                </div>
              </div>
            </div>
            <h3>Linguagens</h3>
            <div className="languages">
              <div className="card--language">
                <FaReact size={32} />
                <div className="card--language--header">
                  <h3>React</h3>
                  <h3>WEB</h3>
                </div>
              </div>
              <div className="card--language">
                <FaReact size={32} />
                <div className="card--language--header">
                  <h3>React Native</h3>
                  <h3>Mobile</h3>
                </div>
              </div>
              <div className="card--language">
                <DiJavascript1 size={32} />
                <div className="card--language--header">
                  <h3>JavaScript</h3>
                  <h3>WEB</h3>
                </div>
              </div>
              <div className="card--language">
                <DiJavascript1 size={32} />
                <div className="card--language--header">
                  <h3>HTML</h3>
                  <h3>WEB</h3>
                </div>
              </div>
              <div className="card--language">
                <DiJavascript1 size={32} />
                <div className="card--language--header">
                  <h3>CSS</h3>
                  <h3>WEB</h3>
                </div>
              </div>
              <div className="card--language">
                <DiJavascript1 size={32} />
                <div className="card--language--header">
                  <h3>Node</h3>
                  <h3>WEB</h3>
                </div>
              </div>
              <div className="card--language">
                <DiJavascript1 size={32} />
                <div className="card--language--header">
                  <h3>PHP</h3>
                  <h3>WEB</h3>
                </div>
              </div>
              <div className="card--language">
                <DiJavascript1 size={32} />
                <div className="card--language--header">
                  <h3>Python</h3>
                  <h3>WEB</h3>
                </div>
              </div>
              <div className="card--language">
                <DiJavascript1 size={32} />
                <div className="card--language--header">
                  <h3>C</h3>
                  <h3>Desktop</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
