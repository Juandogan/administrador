import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateConverter'
})
export class DateConverterPipe implements PipeTransform {

  transform(value: string): string {
    const fecha = new Date(value);
    const ahora = new Date();
    const diferencia = ahora.getTime() - fecha.getTime();

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

    let resultado = '';

    if (dias > 0) {
      resultado += `${dias}d${dias > 1 ? '' : ''} `;
    }

    if (horas > 0) {
      resultado += `${horas}h${horas > 1 ? 's' : ''} `;
    }

    resultado += `${minutos}m${minutos > 1 ? '' : ''}`;

    return resultado.trim();
  }
}
