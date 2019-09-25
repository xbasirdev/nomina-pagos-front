import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { File } from '../interfaces/files';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  API_ENDPOINT = "http://127.0.0.1:8000/api";
  constructor(private httpClient: HttpClient) { }
  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/files');
  }
  save(file: File){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/storefile', file, {headers: headers});
  }
  put(file){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/files/' + file.id, file, {headers: headers});
  }

  delete(id){
    return this.httpClient.delete(this.API_ENDPOINT + '/files/' + id);
  }
}
