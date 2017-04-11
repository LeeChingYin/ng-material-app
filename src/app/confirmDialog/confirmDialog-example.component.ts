import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { confirmDialogService } from './confirmDialog.service';

@Component({
    selector: 'confirmDialog',
    templateUrl: 'confirmDialog-example.component.html',
    providers: [confirmDialogService]
})


export class DialogExampleComponent implements OnInit {
    lastCloseResult: any;

    public constructor(public _confirmDialogService: confirmDialogService) { }

    public confirm() {
        this._confirmDialogService.confirm({ content: '确认删除吗？' }).subscribe(res => {

            // 返回结果
            if (res) {
                this.lastCloseResult = "删除成功";
            } else {
                return;
            }

        });
    }

    public ngOnInit() { }

}


