import { CandidatoModel } from './candidatos-post/candidato.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  constructor(private http:HttpClient) { }

  listarCandidatos():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/candidatos');
}
  cadastrarCandidato(candidato:CandidatoModel):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/candidatos',candidato)
  }
  limparCadastro(candidato:CandidatoModel):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/candidatos',candidato)
  }

}