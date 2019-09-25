import { HttpClient } from '@angular/common/http';  
import { Injectable } from '@angular/core';

@Injectable()
export class FileService {
  constructor(private httpClient: HttpClient) { } 
  sendFiles(formData: any){ 

  let baseUrl = "http://127.0.0.1:8000/api"; 
    let url = `${baseUrl}/file`;       
    return this.httpClient.post(   
      url,
      formData)
  }
  sendFile(formData: any){ 
    let baseUrl = "http://127.0.0.1:8000/api"; 
      let url = `${baseUrl}/storefile`;       
      return this.httpClient.post(   
        url,
        formData)
  }
}