(this.webpackJsonpqrcodeapp=this.webpackJsonpqrcodeapp||[]).push([[0],{15:function(e,n,a){e.exports=a(32)},22:function(e,n,a){},23:function(e,n,a){},32:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),o=a(7),c=a.n(o),r=(a(22),a(12)),i=a(8),u=a(9),h=a(13),s=a(10),d=a(1),p=a(14),m=(a(23),a(11)),g=a.n(m),C=function downloadQR(){var e=document.getElementById("123456").toDataURL("image/png").replace("image/png","image/octet-stream"),n=document.createElement("a");n.href=e,n.download="123456.png",document.body.appendChild(n),n.click(),document.body.removeChild(n)},E=function(e){function App(e){var n;return Object(i.a)(this,App),(n=Object(h.a)(this,Object(s.a)(App).call(this,e))).state={empresa:"",nombre:"",puesto:"",oficina:"",celular:"",correo:"",direcion:"",isHidden:!0,beignCard:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(p.a)(App,e),Object(u.a)(App,[{key:"handleChange",value:function handleChange(e,n){var a=Object(r.a)({},this.state);a[e]=n.target.value,this.setState(a)}},{key:"handleSubmit",value:function handleSubmit(e){var n=this.state,a=n.nombre,t=n.empresa,l=n.oficina,o=n.celular,c=n.correo,r=n.direcion,i="BEGIN:VCARD\n";i+="VERSION:3.0\n",i+="N:".concat(a,"\n"),i+="FN:".concat(a,"\n"),i+="ORG:".concat(t,"\n"),i+="URL:\n",i+="TEL;TYPE=voice,work,pref:+52 1 ".concat(l,"\n"),i+="TEL;TYPE=voice,cell,pref:+52 ".concat(o,"\n"),i+="EMAIL:".concat(c,"\n"),i+="ADR:TYPE=WORK,PREF:;;".concat(r,"\n"),i+="END:VCARD",console.log(i),this.setState({isHidden:!1,beignCard:i}),e.preventDefault()}},{key:"render",value:function render(){var e=this,n=this.state,a=n.isHidden,t=n.beignCard;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},a?l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,l.a.createElement("input",{type:"text",value:this.state.empresa,onChange:function onChange(n){e.handleChange("empresa",n)},placeholder:"Empresa"})),l.a.createElement("label",null,l.a.createElement("input",{type:"text",value:this.state.nombre,onChange:function onChange(n){e.handleChange("nombre",n)},placeholder:"Nombre"})),l.a.createElement("label",null,l.a.createElement("input",{type:"text",value:this.state.puesto,onChange:function onChange(n){e.handleChange("puesto",n)},placeholder:"Puesto"})),l.a.createElement("label",null,l.a.createElement("input",{type:"text",value:this.state.oficina,onChange:function onChange(n){e.handleChange("oficina",n)},placeholder:"Telefono oficina"})),l.a.createElement("label",null,l.a.createElement("input",{type:"text",value:this.state.celular,onChange:function onChange(n){e.handleChange("celular",n)},placeholder:"Telefono Celular"})),l.a.createElement("label",null,l.a.createElement("input",{type:"text",value:this.state.correo,onChange:function onChange(n){e.handleChange("correo",n)},placeholder:"Correo"})),l.a.createElement("label",null,l.a.createElement("input",{type:"text",value:this.state.direcion,onChange:function onChange(n){e.handleChange("direcion",n)},placeholder:"Direcci\xf3n de empresa"})),l.a.createElement("input",{type:"submit",value:"Generar QR"})):l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{id:"123456",value:t,size:290,level:"H",includeMargin:!0}),l.a.createElement("a",{onClick:C},"Descargar"),l.a.createElement("a",{onClick:function onClick(){e.setState({isHidden:!0})}},"Crear otro"))))}}]),App}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(E,null),document.getElementById("root")),function unregister(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}()}},[[15,1,2]]]);
//# sourceMappingURL=main.4cdecabc.chunk.js.map