import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
	selector: 'multipleSimple',
	templateUrl: 'multipleSimple.component.html',
	styleUrls: ['_multiple.component.scss']
})

export class MultipleSimpleComponent implements OnInit {

	public ngOnInit() { }

	@Input() items: any = {};
	@Input() assignFilterItem: string;
	slideToggleModel: boolean;

	// 设置全选状态
	private setSelectedAll = function() {
		// 全选
		let data = this.items;
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
		var data = this.items;

		if (checked) {
			for (var i in data) {
				data[i].selected = true;
			}
		} else {
			for (var i in data) {
				data[i].selected = false;
			}
		}
	}
}
