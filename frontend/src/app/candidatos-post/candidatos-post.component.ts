import { CandidatosComponent } from './../candidatos/candidatos.component';
import { CandidatoModel } from './candidato.model';
import { CandidatosService } from './../candidatos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-candidatos-post',
  templateUrl: './candidatos-post.component.html',
  styleUrls: ['./candidatos-post.component.css']
})
export class CandidatosPostComponent implements OnInit {

  candidato:CandidatoModel=new CandidatoModel();
  constructor(private candidatosService:CandidatosService,private router: Router) { }

  ngOnInit(): void {
    
  }

  cadastrar(){
    console.log(this.candidato);
    this.candidatosService.cadastrarCandidato(this.candidato).subscribe(()=>{
      this.router.navigate(['/cadastro'])
      this.candidato=new CandidatoModel()
    },err=>{
      console.log("erro ao cadastrar o candidato",err)
    })
  }
  limparCadastro(){
    this.candidato=new CandidatoModel();
    this.router.navigate(['/cadastro'])
  }


}
