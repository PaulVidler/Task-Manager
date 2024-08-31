import { NgModule } from '@angular/core';

import { CardComponent } from '../../shared/card/card.component';

@NgModule ({
    declarations: [CardComponent],
    exports: [CardComponent] // export the component to be used elsewhere
})
export class SharedModule {}