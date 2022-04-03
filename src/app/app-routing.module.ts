import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountActivityComponent } from "./account-activity/account-activity.component";
import { NewWireComponent } from "./new-wire/new-wire.component";

export const routes: Routes = [
    { path: '', redirectTo: 'acc-activity', pathMatch: 'full' },
    { path: 'acc-activity', component: AccountActivityComponent },
    { path: 'new-wire', component: NewWireComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}