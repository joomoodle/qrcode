import React from "react";
import logo from "./logo.svg";
import "./App.css";
import QRCode from "qrcode.react";

const downloadQR = () => {
  const canvas = document.getElementById("123456");
  const pngUrl = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  let downloadLink = document.createElement("a");
  downloadLink.href = pngUrl;
  downloadLink.download = "123456.png";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empresa: "",
      nombre: "",
      puesto: "",
      oficina: "",
      celular: "",
      correo: "",
      direcion: "",
      isHidden: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field, event) {
    const newState = { ...this.state };
    newState[field] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    this.setState({ isHidden: false });
    event.preventDefault();
  }
  render() {
    const { isHidden } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {isHidden ? (
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type="text"
                  value={this.state.empresa}
                  onChange={event => {
                    this.handleChange("empresa", event);
                  }}
                  placeholder="Empresa"
                />
              </label>
              <label>
                <input
                  type="text"
                  value={this.state.nombre}
                  onChange={event => {
                    this.handleChange("nombre", event);
                  }}
                  placeholder="Nombre"
                />
              </label>
              <label>
                <input
                  type="text"
                  value={this.state.puesto}
                  onChange={event => {
                    this.handleChange("puesto", event);
                  }}
                  placeholder="Puesto"
                />
              </label>
              <label>
                <input
                  type="text"
                  value={this.state.oficina}
                  onChange={event => {
                    this.handleChange("oficina", event);
                  }}
                  placeholder="Telefono oficina"
                />
              </label>
              <label>
                <input
                  type="text"
                  value={this.state.celular}
                  onChange={event => {
                    this.handleChange("celular", event);
                  }}
                  placeholder="Telefono Celular"
                />
              </label>
              <label>
                <input
                  type="text"
                  value={this.state.correo}
                  onChange={event => {
                    this.handleChange("correo", event);
                  }}
                  placeholder="Correo"
                />
              </label>
              <label>
                <input
                  type="text"
                  value={this.state.direcion}
                  onChange={event => {
                    this.handleChange("direcion", event);
                  }}
                  placeholder="Dirección de empresa"
                />
              </label>
              <input type="submit" value="Generar QR" />
            </form>
          ) : (
            <>
              <QRCode
                id="123456"
                value={JSON.stringify(this.state)}
                size={290}
                level={"H"}
                includeMargin={true}
              />
              <a onClick={downloadQR}>Descargar</a>
            </>
          )}
        </header>
      </div>
    );
  }
}

export default App;
