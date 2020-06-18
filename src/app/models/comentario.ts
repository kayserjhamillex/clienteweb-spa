import { Title } from '@angular/platform-browser';

export interface Comentario {
  id?: number,
  Comentario?: string,
  BlogSId?: number,
  ClienteSId?: number,
  blog: {
    id?: number,
    Titulo?: string,
  },
  cliente: {
    id?: number,
    Fullname?: string,
    ImagenClienteS?: string,
  },
}
