import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../profile/profile.module').then(m => m.ProfileModule),
                        pathMatch: 'full'
                    }
                ]
            },
            {
                path: 'wall',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../wall/wall.module').then(m => m.WallModule)
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
export class HomeRoutingModule { }