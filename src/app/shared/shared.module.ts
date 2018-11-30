/**
 * Created by vega on 2017-03-29.
 */
import { NgModule }       from '@angular/core';
import { OrdinalPipe} from './pipe/ordinal.pipe';
import { MyDatePipe } from './pipe/mydate.pipe';
import { HiddenDirective } from './directive/hidden.directive';
import { TextDecorationDirective } from './directive/text-decoration.directive';
import { ColorDirective } from './directive/color.directive';

import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [ OrdinalPipe,MyDatePipe,HiddenDirective,TextDecorationDirective,ColorDirective ],
    exports : [OrdinalPipe,MyDatePipe,HiddenDirective,TextDecorationDirective,ColorDirective]
})

export class SharedModule {}
