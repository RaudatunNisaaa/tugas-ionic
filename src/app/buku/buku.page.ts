import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.page.html',
  styleUrls: ['./buku.page.scss'],
})
export class BukuPage {
  id_buku : any;
  judul_buku : any;
  pengarang : any;
  buku : any;
  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) {

   }

  ngOnInit() {
    console.log('cek fungsi halaman event init jalan');
  }

  ionViewDidEnter() {
    console.log("Jika Selesai Loading");
    this.getBuku();
  }

  getBuku() {
    this._apiService.getBuku().subscribe((res:any)=>{
      console.log("Berhasil", res);
      this.buku = res;
    }, (error:any) => {
      console.log('Gagal', error);
      this.alertController.create({
        header : 'Notifikasi',
        message : 'Gagal memuat data buku',
        buttons : ['OK']
      }).then(res => {
        res.present();
      })
    })
  }

}
