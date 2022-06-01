import { NotfoundComponent } from './views/notfound/notfound.component';
import { FormComponent } from './views/form/form.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "create",
    component: FormComponent
  },

  {
    path: "update/:id",
    component: FormComponent
  },

  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
