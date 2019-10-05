import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        // children: [
        //     {
        //         path: 'home',
        //         children: [
        //             {
        //                 path: '',
        //                // loadChildren: () =>
        //                     //import('./login/login.module').then(m => m.LoginModule)
        //             }
        //         ]
        //     },
        // ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }