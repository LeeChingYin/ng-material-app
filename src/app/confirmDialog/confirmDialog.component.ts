import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';


@Component({
    selector: 'confirm-dialog',
    styleUrls: ['confirmDialog.component.scss'],
    templateUrl: 'confirmDialog.component.html'
})

export class ConfirmDialogComponent implements OnInit {
    config : {};
    
	constructor(private mdDialogRef : MdDialogRef<ConfirmDialogComponent>, @Inject(MD_DIALOG_DATA) data: any){
        this.config = data;
	}
 	public ngOnInit() { }
}