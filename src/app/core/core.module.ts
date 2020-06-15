import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './import.guard';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';



@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers:[ApiService]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
