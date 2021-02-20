import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from './primeng.module';

@NgModule({
    imports: [
        CommonModule,
        PrimeNgModule,
    ],
    declarations: [

    ],
    exports: [
        PrimeNgModule,
    ]
}) export class SharedModule { }
