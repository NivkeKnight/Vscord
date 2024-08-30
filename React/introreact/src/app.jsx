import React, {useState} from "react";
import Formulario from "./Formulario";

export default function Componente(){
    const [numero,definirNumero] = useState(0);
    function somar(){
        definirNumero(numero + 1)
    }
    return(
    <div>
        <h1>Primeiro Site com React</h1>
        <p> Introdução ao React</p> 
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUSBwgVFRUWFhUbFxgXFx4XHRcWFR0YFhgXFR4aHykjHRooIBcaIj0hJysvLjAvGB8/ODgwPigtLisBCgoKDg0OGhAQGjcmHSUrNzMrNjc3Ky0rKy0uNzctLS0tLTUxNy0tKy0rNS0tKzcrNystNS0tLS0tNy03Ky0rN//AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcFCAECBAP/xABJEAACAQMBBAQHCQwLAAAAAAAAAQIDBREEBhIhMQdBUZETImFxgaHRFCMyM1RykrHBFRYkJTRCVWKCsuHwCBc1UlNjk6KjwtL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQMCBP/EACERAQEAAQMEAwEAAAAAAAAAAAABAgMRUQQSMUETIaEU/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAbQ6+/aXT1HZraqkklub27h8s599i+3qQGfOs5wpxzUkku1vCKK2i2s6TKefdOlnQj/k0U1j52Z47yv9fd7ncKmbnrq03+vKT+vkBsxcdtNnLdw1F2p5XVF77/ANuSOarpcsNKpihRqzXbhLuyygN+l+dJmT0f3J9yJ1akt/L4dWALnj0v2hvjoavfH2nppdLOz0/h0q0f2Yv6pFKqVux8Ycb1vxxqMC+dP0l7MVpJPWSjn+9CX2ZJXpdTQ1dBT0taM4vlKLyn6UarVqugjD3uo8n00l18BSxSuFeHHlBtLz8GBtS2kuJjbtfNFa7VLUVZ70IvHiYll53cLjjn5eo120l1nqISjUu9bqzv70ljj5TyazXyhJwVyquPYsqL6+We3r8hN/vYXb/WfafkNfuh/wCyRbObR6LaGg5aKM044ypxccZcksP4MuMJcm+XE1flPTyzvaurx6ua9Z66N2nQpKNO514xWcRi2orr4JPCKNrQaqO9VM/2nX+k/ac/d2r+ldR9OXtA2qZA9rukB2WnVhQ0iVWEsLfqU5cM43vB06jm01x4pNZWcFHyvc5c7nXf7T9p8dJVp6nMq05uW8+PN47X6wJ7W6WdpXUapUqHbF7jisJcVJyn5/Vgn2x23eluFo3toNdQpVlJppPcUlhNSSk2+vHPqKDWj0Llwp1Po/wPvUhRUcuNR4WeSA2V++iwfpqh/qx9p59LtfaNTcJ0o6lLcUXGeU41E+DdPDbai+DbS48smtSr2/8AxZEs2Vr21avT5qzy6Nfs5eFl/A41Mu2btNLCZXar2d/tS562Pr9h1++G0fLo+v2FY1tVoN9+PLj5jpCeib41pdyPH/VlxHu/iw5q16N4ttd+9a6D/aS+s+2s12l0WjlV1VeMacVmUm+CXaVLOpboR+On3LidIaq3PKnXqYfLCXtLOrvuOcuinq/i4aNanXoqdGWYySaa601lNHfJRWymrt7tC3tbVeJSSyl1Pz8s59RnPdtrw17oqefC6+Hb/ODvLqtrZszx6TfGXf8AFn6+56K3OHu3Uxh4SahDP505cory8DrorppNdq61LTzbnQlGNROLWJSippJtYfBp8O0pi76m2K31YvUVcbkuLS7OHWQm4XKnTqRVG4V1GVKlKSzjMsYzJJ4zhI10tXv9MtbQ+P22h1Fw0WlX4Tq6cPnTUfrZiNXttszpfjL1SfzZb/7uTWZ1tC341efcc+EtrXGrLuNmC09pelbVQvv4k1MPARUd1OGfCvnJzb4xXUksPg314LWsd0o3m1Uq+nXi1IRkl2ZXFPyp5XoNU687e6XiVG2bC9D8nLYLTb3ZU/fkBNgAAAAHDjF80Yu47O2i5r8Nt9OflcVnv5mVAEAuXRPs9q8uhTlTf6r4dzyRfW9Cs/CfgmvWPKvYXOAKPXQ1cflcPWeqj0LVn8dcY+iP8S5gBVWl6GNDGaep18n5IpL68kztexdjt1JRp6KL+ck+/JIgBiauzVmq03Gdtp4fNbq4+o+ek2Vsmkp7tG3wxl81vc+PN5ZmgBj/ALiWvH5BT+ijrOw2mccSt1L6C9hkgBVm1PR7pbxf6nuOapeDo0WoqHitzlWy5LKX5qKvuNu+5lxqUNRTg5U5OLaSw2utGyGvtdStqvC6LVulUcVFvdU4zjFtxU4vscpcU0/GZSnShZtXZrpCrq5UcVU0vBqUcuGN6U1JvMnvZzlsDGbL7MffDrH4KEVubjfBdcuXcn/OCwn0V2uVJNTnTk/hbjWH6Gnj0dpjeha01NROerhqUkpOm47uW8JSfjZ4fCXcW5Wj4gGst10Ne13KdHVwkpQk0+HBrg00+WGmn6ScbDdH9C+2jw9ycoqTluJPnBcMvHlTMB0tRcds6uOuNJ/8cF9hbPRdLf2I0/mmu6pMDEx6JtnlzovvZzS6LLbp9Qp6avJNRcYrhhJve4cCwUcksl8rMrPuILLo8oN/lUvV7DhdHdH5XLuXsJ2Dj4cOGvz6nKGUej3Qp+/aicu5fYe6nsTZ4xw6GfO2/tJKCzTxniObq53zUcp7F2SlHFLRxiuxLC9Ry9jLQ+Wn9b9pIgXtnDnvy5RuWxVlnHFXSqS7Hlr0ps6T2FsLjhW+nx/VXVwJOCySeEtt8oJrOjDZ+vy0UV5sr6iP3DohtjXvG8vT7S2zhpPmVGtd86OrjoLyqWm0FScZJOnKMXKMm+cZNLEGn28McS+9kbSrFs/R02c+Dpxi32y5yfpk2ZlJIYA5AAAAAAAAAAAAAAAAAAAAACof6QCzS0nzq31QLeMTtBs3ado6UY3jSb6g24+NKLTfB8YtPHkArzoArfi7VU2/g1IS+nHH/QteazExOz2zFn2bhNWfSbm+05PelNvHLjNt4WXw8pmAKh6Sdh79etpPDWvRqcJU4LO/COJRymmpNeTkTvYC06yybK0qFwilUjvtpPexvTlJLK4Zw+okWBgAjkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==" alt="foto qualquer"></img>
        <p>Você clicou {numero} vezes</p>
        <button onClick={somar}>Click</button>
        <Formulario/>
        <form>
            <label>
                Nome: <input type="text" name="nome"/>
            </label>
            <button>Enviar</button>
        </form>
            
    </div>
    )
}
