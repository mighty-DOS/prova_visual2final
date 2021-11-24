import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Formapag } from "../models/formapag";

@Injectable({
    providedIn: "root",
})
export class FormapagService {
    private baseURL = "http://localhost:5000/api/formapag";

    constructor(private http: HttpClient) {}

    list(): Observable<Formapag[]> {
        return this.http.get<Formapag[]>(`${this.baseURL}/list`);
    }
}
