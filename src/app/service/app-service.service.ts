import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private myClient: HttpClient) {}

  private signup = 'http://localhost:8000/api/signup';
  private login = 'http://localhost:8000/api/login';
  private addDoctors = 'http://localhost:8000/api/addDoctors';
  private doctors = 'http://localhost:8000/api/doctors';
  private profile = 'http://localhost:8000/api/profiles';
  private reserve = 'http://localhost:8000/api/reserves';
  addUser(newUser: any) {
    return this.myClient.post(this.signup, newUser);
  }
  userLogin(newUser: any) {
    return this.myClient.post(this.login, newUser);
  }
  addDoctor(newDoctor: any) {
    return this.myClient.post(this.addDoctors, newDoctor);
  }
  getDoctors() {
    return this.myClient.get(this.doctors);
  }
  getProfile(id: any) {
    return this.myClient.get(`${this.profile}/${id}`);
  }
  reserveApp(reservation: any) {
    return this.myClient.post(`${this.reserve}`, reservation);
  }
}
