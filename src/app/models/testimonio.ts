import { Title } from '@angular/platform-browser';

export interface Testimonio {
  id?: number,
  Testimonio?: string,
  AdminSId?: number,
  ClienteSId?: number,
  admin: {
    id?: number,
    Fullname?: string,
    Correo?: string,
  },
  cliente: {
    id?: number,
    Fullname?: string,
    ImagenClienteS?: string,
  },
}
