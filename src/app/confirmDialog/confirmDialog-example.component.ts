import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { confirmDialogService } from './confirmDialog.service';

@Component({
    // moduleId: module.id,
    selector: 'confirmDialog',
    templateUrl: 'confirmDialog-example.component.html',
    providers: [confirmDialogService]
})
    

export class DialogExampleComponent implements OnInit {
    lastCloseResult:any;
    
    public constructor(public _confirmDialogService: confirmDialogService) { }

    public confirm() {
        this._confirmDialogService.confirm({content:'确认删除吗？'}).subscribe(res => {
            
            // 返回结果
            if(res){
                this.lastCloseResult ="呵呵";
            }else{
                return;
            }
            
        });
    }


    public ngOnInit() { }

}


