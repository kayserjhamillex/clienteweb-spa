import { Title } from '@angular/platform-browser';

export interface Horario {
  id?: number,
  Dia?: string,
  MasajistaId?: number,
  HoraId?: number,
  hora: {
    id?: number,
    Horainicio?: string,
    Horafin?: string,
  },
  masajista: {
    id?: number,
    Fullname?: string,
    Genero?: string,
    Celular?: string,
    Email?: string,
    ImagenMasajista?: string,
  },
}
