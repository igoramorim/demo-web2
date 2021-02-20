import { NgModule } from '@angular/core';
// import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
// import { MensageriaService } from './mensageria/mensageria.service';
import { CommonModule } from '@angular/common';
// import { FooterComponent } from 'src/app/core/footer/footer.component';
// import { MainComponent } from 'src/app/core/main/main.component';
// import { HeaderUnloggedComponent } from 'src/app/core/header-unlogged/header-unlogged.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { LoadingInterceptor } from 'src/app/core/interceptors/loading.interceptor';
// import { SecurityHttpInterceptor } from 'src/app/core/interceptors/security-http.interceptor';
// import { ConfirmDialogComponent } from './modal/confirm-dialog/confirm-dialog.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    // UnauthorizedComponent,
  ],
  entryComponents: [

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [

  ],
  providers: [
  //   MensageriaService,
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: LoadingInterceptor,
  //     multi: true,
  //   },
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: SecurityHttpInterceptor,
  //     multi: true,
  //   },
  ],
})
export class CoreModule {

  static forRoot() {
    return {
      ngModule: CoreModule,
    };
  }
}
