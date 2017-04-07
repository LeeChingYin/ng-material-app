import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';
// import { KeysPipe } from '../../pipes/key.pipe';


@Component({
	selector: 'multiple-dialog',
	styleUrls: ['_multiple.component.scss'],
	templateUrl: 'multipleDialog.component.html'
})

export class MultipleDialogComponent implements OnInit {
	config: {};
	slideToggleModel: boolean;
	// keyNameArray: any;
	constructor(private mdDialogRef: MdDialogRef<MultipleDialogComponent>) {
		this.config = mdDialogRef.config.data || {};
		this.setSelectedAll();
		// this.keyNameArray = KeysPipe.prototype.transform(this.config.content);
	}

	// 设置全选状态
	private setSelectedAll = function () {
		// console.log(this.config.content);
		// 全选
		let data = this.config.content;
		let count = 0;
		for (let i in data) {
			if (data[i].checked) {
				count++;
			}
		}

		if (count === data.length) {
			this.slideToggleModel = true;
		} else {
			this.slideToggleModel = false;
		}
	}
	public ngOnInit() {

	}

	onToggle(item) {
		item.checked = !item.checked;

		this.setSelectedAll();
	}

	cancleSelected(item) {
		item.checked = false;

		this.setSelectedAll();
	}

	selectAll(checked) {
		let data:any = this.config;
		let dataContent:any = data.content;
		console.log(dataContent);
		if (checked) {
			for (let i in dataContent) {
				dataContent[i].checked = true;
			}
		} else {
			for (let i in dataContent) {
				dataContent[i].checked = false;
			}
		}
	}


}

