import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';


@Component({
    selector: 'confirm-dialog',
    styleUrls: ['confirmDialog.component.scss'],
    templateUrl: 'confirmDialog.component.html'
})

export class ConfirmDialogComponent implements OnInit {
    config : {};
    
	constructor(private mdDialogRef : MdDialogRef<ConfirmDialogComponent>){
        this.config = mdDialogRef.config.data || {};
	}
 	public ngOnInit() { }
}