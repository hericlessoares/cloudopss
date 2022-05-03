import { CandidatosService } from './../candidatos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

  candidatos:Array<any>=new Array();
  
  constructor(private candidatosService:CandidatosService) { }

  ngOnInit(): void {
    this.listarCandidatos();
  }

  listarCandidatos(){
    this.candidatosService.listarCandidatos().subscribe(candidatos=>{
    this.candidatos=candidatos;
    },err=>{
      console.log("erro")
    })
  }

}
