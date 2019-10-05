import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthComponent } from './auth.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./login/login.module').then(m => m.LoginModule)
                    }
                ]
            },
            {
                path: 'create',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./signup/signup.module').then(m => m.SignupModule)
                    }
                ]

            }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule { }