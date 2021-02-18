import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-web2';
  url = environment.URL_DATA;
  data = '';

  constructor(private service: MyServiceService) {}

  ngOnInit() {
    this.buscar();
  }

  buscar() {
    this.service.getData().subscribe((res: any) => {
      this.data = res;
    }, error => {
      console.log('Erro ao buscar dados');
    });
  }
  

}
