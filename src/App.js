import "./App.css";
import { BsPerson } from "react-icons/bs";
import { FaReact, FaGraduationCap, FaPhp } from "react-icons/fa";
import {
  DiJavascript1,
  DiCss3Full,
  DiPython,
  DiJqueryLogo,
} from "react-icons/di";
import { TbCertificate } from "react-icons/tb";
import { GrNode } from "react-icons/gr";
import { AiOutlineHtml5, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

// import PDF from 'Documento.pdf'

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
            <div className="socials">
            <ul>
              <li><a href="https://www.instagram.com/marcospmc__/"><AiOutlineInstagram size={32} /></a></li>
              <li><a href="https://www.linkedin.com/in/marcos-cardoso-1931161b0/"><AiOutlineLinkedin size={32} /></a></li>
              <li><a href="https://github.com/MarcosPMC1"><AiOutlineGithub size={32} /></a></li>
            </ul>
            </div>
            <div className="cv">
              <a href="Documento.pdf" download='Documento.pdf'>
              <button class="download-button"> 
                <div class="docs">
                  <svg
                    class="css-i6dzq1"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    fill="none"
                    stroke-width="2"
                    stroke="currentColor"
                    height="20"
                    width="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line y2="13" x2="8" y1="13" x1="16"></line>
                    <line y2="17" x2="8" y1="17" x1="16"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  Curriculo
                </div>
                <div class="download">
                  <svg
                    class="css-i6dzq1"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    fill="none"
                    stroke-width="2"
                    stroke="currentColor"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line y2="3" x2="12" y1="15" x1="12"></line>
                  </svg>
                </div>
              </button>
              </a>
            </div>
          </div>
          <div className="container">
            <div className="formacao">
              <h3>Formação</h3>
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
                  <label>
                    ETEC Polivalente Americana | Análise e Desenvolvimento de
                    Sistemas
                  </label>
                  <small>2019 - 2021</small>
                </div>
              </div>
              <hr />
              <div className="card--formacao">
                <FaGraduationCap size={40} />
                <div className="info">
                  <h5>Ensino Superior</h5>
                  <label>
                    FATEC Americana | Análise e Desenvolvimento de Sistemas
                  </label>
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
                  <h3>ReactNative</h3>
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
                <AiOutlineHtml5 size={32} />
                <div className="card--language--header">
                  <h3>HTML</h3>
                  <h3>WEB</h3>
                </div>
              </div>
              <div className="card--language">
                <DiCss3Full size={32} />
                <div className="card--language--header">
                  <h3>CSS</h3>
                  <h3>WEB</h3>
                </div>
              </div>
              <div className="card--language">
                <GrNode size={32} />
                <div className="card--language--header">
                  <h3>Node</h3>
                  <h3>WEB</h3>
                </div>
              </div>
              <div className="card--language">
                <FaPhp size={32} />
                <div className="card--language--header">
                  <h3>PHP</h3>
                  <h3>WEB</h3>
                </div>
              </div>
              <div className="card--language">
                <DiPython size={32} />
                <div className="card--language--header">
                  <h3>Python</h3>
                  <h3>WEB</h3>
                </div>
              </div>
              <div className="card--language">
                <DiJqueryLogo size={32} />
                <div className="card--language--header">
                  <h3>Jquery</h3>
                  <h3>WEB</h3>
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
