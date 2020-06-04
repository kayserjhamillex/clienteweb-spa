import { Title } from '@angular/platform-browser';

export interface Reserva {
  id?: number,
  FechaReserva?: Date,
  Estado?: string,
  AdminSId?: number,
  ClienteSId?: number,
  ServicioSId?: number,
  HorarioSId?: number,
  admin: {
    id?: number,
    Fullname?: string,
    Correo?: string,
  },
  cliente: {
    id?: number,
    Fullname?: string,
    Numerodocumento?: string,
    Email?: string,
  },
  servicio: {
    id?: number,
    Name?: string,
    Resumen?: string,
    Monto?: string
  },
  horario: {
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
}
