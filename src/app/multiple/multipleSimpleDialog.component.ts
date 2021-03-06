import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';


@Component({
	selector: 'multiple-dialog',
	styleUrls: ['_multiple.component.scss'],
	templateUrl: 'multipleSimpleDialog.component.html'
})

export class MultipleSimpleDialogComponent implements OnInit {
	config: {};
	slideToggleModel: boolean;
	constructor(private mdDialogRef: MdDialogRef<MultipleSimpleDialogComponent>, @Inject(MD_DIALOG_DATA) data: any) {
		this.config = data;
		this.setSelectedAll();
	}

	// 设置全选状态
	private setSelectedAll = function() {
		// 全选
		let data = this.config.content;
		let count = 0;
		for (let i in data) {
			if (data[i].selected) {
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

	// 选中，反选
	onToggle(item) {
		item.selected = !item.selected;

		this.setSelectedAll();
	}

	// 在已选项列表中取消选中
	cancleSelected(item) {
		item.selected = false;

		this.setSelectedAll();
	}

	// 全选
	selectAll(checked) {
		let data: any = this.config;
		let dataContent: any = data.content;

		if (checked) {
			for (let i in dataContent) {
				dataContent[i].selected = true;
			}
		} else {
			for (let i in dataContent) {
				dataContent[i].selected = false;
			}
		}
	}
}