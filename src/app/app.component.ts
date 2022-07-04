import { Component, VERSION } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nome: string;
  donate: number;
  converte: number;

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}
  async exibirToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  async doacao() {
    const alert = await this.alertController.create({
      header: 'Doação',
      inputs: [
        {
          name: 'inputNome',
          type: 'text',
          placeholder: 'Digite seu nome',
        },
        {
          name: 'inputDonate',
          type: 'number',
          placeholder: 'U$',
          max: 10000,
          min: 0,
        },
      ],
      buttons: [
        {
          text: 'Ok',
          handler: (valor: any) => {
            this.nome = valor['inputNome'];
            this.donate = valor['inputDonate'];
            this.converte = this.donate * 5;
            this.exibirToast(
              `${this.nome} - Doação de U$ ${this.donate} - Convertido para R$ ${this.converte}`
            );
          },
        },
      ],
    });
    await alert.present();
  }
}
