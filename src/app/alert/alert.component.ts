import { Component, ViewEncapsulation } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { alertService } from './alert.service';

@Component({
	moduleId: module.id,
	selector: 'alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.css'],
	encapsulation: ViewEncapsulation.None,
	providers: [alertService]
})
export class AlertComponent {
    public constructor(private _alertService: alertService) { }

	public success() {
		this._alertService.alertSuccess("添加成功");
	}
	public warning() {
        this._alertService.alertWarning("警告！");
	}
	public fail() {
        this._alertService.alertFail("删除失败");
	}
}

