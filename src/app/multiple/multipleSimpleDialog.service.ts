import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { MultipleSimpleDialogComponent } from './multipleSimpleDialog.component';
import { Observable } from 'rxjs/Observable';


export class MultipleSimpleDialogService {
	constructor( @Inject(MdDialog) public _multipleDialog: MdDialog, @Inject(DOCUMENT) doc: any) {
		_multipleDialog.afterOpen.subscribe((ref: MdDialogRef<any>) => {
			if (!doc.body.classList.contains('no-scroll')) {
				doc.body.classList.add('no-scroll');
			}
		});
		_multipleDialog.afterAllClosed.subscribe(() => {
			doc.body.classList.remove('no-scroll');
		});
	}

	public setMultipleData(contentOrConfig: any, title?: string): Observable<any> {
		let config = new MdDialogConfig();
		config = {
			width: '700px'
		};
		if (contentOrConfig instanceof Object) {
			config.data = contentOrConfig;
		} else if ((typeof contentOrConfig) === 'string') {
			config.data = {
				content: contentOrConfig,
				title: title
			}
		}
		return this._multipleDialog.open(MultipleSimpleDialogComponent, config).afterClosed();
	}
}
