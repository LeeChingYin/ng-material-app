import { Component, Inject, Injectable } from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { ConfirmDialogComponent } from './confirmDialog.component';
import {Observable} from 'rxjs/Observable';

// @Injectable();
export class confirmDialogService {

	constructor( @Inject(MdDialog) public _confirmDialog: MdDialog, @Inject(DOCUMENT) doc: any) { 
		_confirmDialog.afterOpen.subscribe((ref: MdDialogRef<any>) => {
	      if (!doc.body.classList.contains('no-scroll')) {
	        doc.body.classList.add('no-scroll');
	      }
	    });
	    _confirmDialog.afterAllClosed.subscribe(() => {
	      doc.body.classList.remove('no-scroll');
	    });
	}

	public confirm(contentOrConfig : any, title ?: string) : Observable<any> {
		let config = new MdDialogConfig();
		config = {
			width: '300px',
			height: '200px'
		};
		if(contentOrConfig instanceof Object){
			config.data = contentOrConfig;
		}else if((typeof contentOrConfig) === 'string'){
			config.data = {
				content: contentOrConfig,
				title: title
			}
		}
		return this._confirmDialog.open(ConfirmDialogComponent, config).afterClosed();
	}
}

