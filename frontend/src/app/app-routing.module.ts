import { HomeComponent } from './Home/home/home.component';
import { CandidatosPostComponent } from "./candidatos-post/candidatos-post.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";





const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cadastro",
    component: CandidatosPostComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
