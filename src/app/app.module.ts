import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { ConfirmDialogComponent } from './confirmDialog/confirmDialog.component';
import { DialogExampleComponent } from './confirmDialog/confirmDialog-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from '@angular/material';
import { MultipleComponent } from './multiple/multiple.component';
import { MultipleSimpleComponent } from './multiple/multipleSimple.component';
import { MultipleSimpleDialogComponent } from './multiple/multipleSimpleDialog.component';
import { MultipleDialogComponent } from './multiple/multipleDialog.component';
import { MultipleExampleComponent } from './multiple/multiple-example.component';
import { SearchTextFilter } from './shared/pipes/search-text.pipe';
// directive
import { HoverDirective } from './shared/directives/hover.directive';

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        ConfirmDialogComponent,
        DialogExampleComponent,
        MultipleComponent,
        MultipleSimpleComponent,
        MultipleSimpleDialogComponent,
        MultipleDialogComponent,
        MultipleExampleComponent,
        SearchTextFilter,
        HoverDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        ConfirmDialogComponent,
        DialogExampleComponent,
        MultipleSimpleDialogComponent,
        MultipleDialogComponent
    ]
})
export class AppModule { }
