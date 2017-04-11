import { Component, OnInit, HostListener, Input } from '@angular/core';


@Component({
	selector: 'multiple',
	templateUrl: 'multiple.component.html',
	styleUrls: ['_multiple.component.scss']
})

export class MultipleComponent implements OnInit {

	@Input() items: any = {};
	@Input() colsTitle: any;
	@Input() keyArray: any;

	@Input() assignFilterItem: string;

	constructor() {
	}

	public ngOnInit() {
		this.keyArray = this.keyArray.split(",");
		this.colsTitle = this.colsTitle.split(",");
	}

	// 设置全选状态
	private setSelectedAll = function() {
		// 全选
		let data = this.items;
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

	// 选中，反选
	onToggle(item) {
		item.checked = !item.checked;

		this.setSelectedAll();
	}

	// 在已选项列表中取消选中
	cancleSelected(item) {
		item.checked = false;

		this.setSelectedAll();
	}

	// 全选
	selectAll(checked) {

		var data = this.items;

		if (checked) {
			for (var i in data) {
				data[i].checked = true;
			}
		} else {
			for (var i in data) {
				data[i].checked = false;
			}
		}
	}

}