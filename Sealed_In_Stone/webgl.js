function main() {
  const canvas = document.querySelector("#game");
  const gl = canvas.getContext("webgl");
  var cPalette = [
    "#FFFFFF"
  ];
  if (gl === null) {
      alert("Unable to initialize WebGL. Your browser or machine may not support it.");
      return;
  }
  const vsSource = `
    attribute mat4 aVertexPosition;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    void main() {
       gl_Position = uProjectionMatrix * uModelViewMatrix *aVertexPosition;
    }
  `;
  const fsSource = `
    void main() {
       gl_FragColor = cPalette[0];
    }
   `;
}

function initShaderProgram(gl, vsSource, fsSource) {
  
}


window.onload = main;
