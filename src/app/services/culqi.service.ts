import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export declare let Culqi;

@Injectable({
  providedIn: 'root'
})
export class CulqiService {

  // tslint:disable-next-line: variable-name
  token_id: string;
  error: any;

  constructor(
    private toastr: ToastrService
    ) {
    document.addEventListener ('payment_event', (token: any) => {
      console.log('entro a event');
      this.token_id = token.detail;
      console.log(this.token_id);
      this.toastr.success('transacción correcta');
    });
    document.addEventListener('payment_event_error', (event: any) => {
    console.log(event.detail);
    this.toastr.error(event.detail.user_message);
    });
}

  initCulqi() {
      Culqi.publicKey  = 'pk_test_94tTaKyy2oea3bQf';
  }

  payorder(description: string, amount: number) {
    console.log(description, amount);

    Culqi.settings ({
      title: 'Spa Jx',
      currency: 'PEN',
      description,
      amount: amount * 100,
      // bandera:false
    });

    Culqi.options({
      lang: 'auto',
      modal: true,
      installments: false,
      customButton: '',
    });
    Culqi.open ();
  }
  open() {
    Culqi.open ();
  }

}
