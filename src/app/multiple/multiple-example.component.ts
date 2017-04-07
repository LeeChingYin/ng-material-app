import { Component, OnInit, HostListener } from '@angular/core';
import { MultipleSimpleDialogService } from './multipleSimpleDialog.service';
import { MultipleDialogService } from './multipleDialog.service';

@Component({
	selector: 'multipleExample',
	templateUrl: 'multiple-example.component.html',
	styleUrls: ['multiple-example.component.css'],
	providers: [MultipleSimpleDialogService, MultipleDialogService]
})

export class MultipleExampleComponent implements OnInit {

	public constructor(public _multipleSimpleDialogService: MultipleSimpleDialogService, public _multipleDialogService: MultipleDialogService) { }
	public ngOnInit() { }

	datas = [{ title: '你', name: '1' }, { title: 'Banana' }, { title: 'Cat' }, { title: 'Dog', name: '1' }, { title: 'Egg' }, { title: 'Food' }, { title: 'Girl', name: '1' }, { title: 'Hello' }, { title: 'In' }];

	listData = [{title: '森美', name:'1'},{title: '小仪'},{title: '西瓜'},{title:'阿杰'}];
	
	public openSimpleDialog(assignFilterItemName) {
		this._multipleSimpleDialogService.setMultipleData({ content: this.datas, assignFilterItem: assignFilterItemName }).subscribe(res => {

			// 返回结果
			let selectedArr = [];
			let data:any = this.datas;
			for (let i in data) {
				if (data[i].selected) {
					selectedArr.push(data[i]);
				}
			}

			// console.log(selectedArr);

		});
	}

	public openDialog(titleArray, keyArray, assignFilterItemName) {
		this._multipleDialogService.setMultipleData({ content: this.listData, colsTitle: titleArray, keyArrayName: keyArray, assignFilterItem: assignFilterItemName}).subscribe(res => {

			// 返回结果
			let selectedArr = [];
			let data:any = this.listData;
			for (let i in data) {
				if (data[i].checked) {
					selectedArr.push(data[i]);
				}
			}

			// console.log(selectedArr);

		});
	}
}

