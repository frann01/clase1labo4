import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';

  num1="";
  num2="";
  suma =0;
  promedio=0;

  nombre="";
  clave="";

  usuarioViejo= new Usuario("Pedro","1234");

  intentoLogIn = new Usuario("","");


  Calcular()
  {

    this.suma= parseInt(this.num1) + parseInt(this.num2);
    this.promedio = this.suma/2;
  }

  Limpiar()
  {
    this.num1="";
    this.num2="";
    this.promedio=0;
    this.suma=0;
    this.nombre="";
    this.clave="";
  }

  Ingresar()
  {
    this.intentoLogIn = new Usuario(this.nombre, this.clave);

    if(this.intentoLogIn.clave == this.usuarioViejo.clave
      && this.intentoLogIn.nombre == this.usuarioViejo.nombre)
      {
        alert("Bienvenido!!!");
      }
      else
      {
        if(this.intentoLogIn.nombre == this.usuarioViejo.nombre)
        {
          alert("Clave Incorrecta!");
        }
        else
        {
          alert("Nombre Incorrecto!");
        }
        
      }
  }
}
