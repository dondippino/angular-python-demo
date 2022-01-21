import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class Services {
    constructor(private http: HttpClient) { }

    private API_URL = 'http://localhost:5000'
    async login(data: any) {
      try {
          let result: any = await lastValueFrom(this.http.post(this.API_URL, data, {
              headers: {
                  "Access-Control-Allow-Origin": `*`,
                  "Accept": `*/*`,
              }
          }));

          if (result.authenticated) {
              localStorage.setItem("loggedIn", result.authenticated)
              window.location.href = "/transactions"
          } else {
              throw new Error("Something went wrong, try again")
          }
      } catch (error) {
          
      }
    }
    async getTransactions() {
        let result = await lastValueFrom(this.http.get(this.API_URL));
        return result;
    }
    async cancelTransaction(data: any) {
        let result = await lastValueFrom(this.http.put(this.API_URL, data, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        }));
        return result;
    }
}