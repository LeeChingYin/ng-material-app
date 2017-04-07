import { Injectable } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Injectable()
export class alertService {

	constructor(public snackBar: MdSnackBar){}
	// message: string = 'Snack Bar opened.';
	actionButtonLabel: string = '确定';
	action: boolean = true;
	setAutoHide: boolean = true;
	autoHide: number = 10000;
	addExtraClass: boolean = false;

	// 成功
	public alertSuccess(msg){
		let config = new MdSnackBarConfig();
		config.duration = this.autoHide;
		config.extraClasses = ['alertSuccess'];
	    this.snackBar.open(msg, this.action && this.actionButtonLabel, config);
	}

	// 警告
	public alertWarning(msg){
		debugger;
		let config = new MdSnackBarConfig();
		config.duration = this.autoHide;
		config.extraClasses = ['alertWarning'];
	    this.snackBar.open(msg, this.action && this.actionButtonLabel, config);
	}
	// 失败
	public alertFail(msg){
		debugger;
		let config = new MdSnackBarConfig();
		config.duration = this.autoHide;
		config.extraClasses = ['alertFail'];
	    this.snackBar.open(msg, this.action && this.actionButtonLabel, config);
	}
}