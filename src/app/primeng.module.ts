import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { MessagesModule } from 'primeng/messages';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ChartModule } from 'primeng/chart';
import { TreeTableModule } from 'primeng/treetable';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { CalendarModule } from 'primeng/calendar';
import { MessageService, ConfirmationService } from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
    imports: [
        SidebarModule,
        SlideMenuModule,
        ButtonModule,
        TableModule,
        FileUploadModule,
        MessagesModule,
        DialogModule,
        ConfirmDialogModule,
        ChartModule,
        TreeTableModule,
        PickListModule,
        PaginatorModule,
        ProgressBarModule,
        CalendarModule,
        TabViewModule,
        DropdownModule,
        InputTextModule,
        CheckboxModule,
        RadioButtonModule,
        InputTextareaModule
    ],
    exports: [
        SidebarModule,
        SlideMenuModule,
        ButtonModule,
        TableModule,
        FileUploadModule,
        MessagesModule,
        DialogModule,
        ConfirmDialogModule,
        ChartModule,
        TreeTableModule,
        PickListModule,
        PaginatorModule,
        ProgressBarModule,
        CalendarModule,
        TabViewModule,
        DropdownModule,
        InputTextModule,
        CheckboxModule,
        RadioButtonModule,
        InputTextareaModule
    ],
    providers: [
        MessageService,
        ConfirmationService
    ]
}) export class PrimeNgModule { }
