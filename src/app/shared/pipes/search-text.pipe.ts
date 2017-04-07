import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
	name: 'searchTextFilter'
})
/**
 * args[0]: searchText
 * args[1]: 指定筛选的项
 */
export class SearchTextFilter implements PipeTransform {
	transform(items: any[], args: any[]): any[] {
		return items.filter(item => {
			if(args[0] === undefined){
				return item[args[1]];
			}else{
				return item[args[1]].toLowerCase().indexOf(args[0].toLowerCase()) !== -1;
			}
		});
	}

}