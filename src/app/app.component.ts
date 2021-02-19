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

  cities: any[];
  selectedCity: any = {name: 'New York', code: 'NY'};

  selectedState: any = null;
    
  states: any[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
  ];

  cities1: any[] = [];
  
  cities2: any[] = [];
  
  city1:any = null;

  city2:any = null;

  constructor(private service: MyServiceService) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

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
