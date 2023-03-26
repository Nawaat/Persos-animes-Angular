import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/Auth.services';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {


  faUser = faUser
  email: any
  password: any
  logIn: any
  LoginFormGroup: FormGroup;

  constructor(private AuthService: AuthService, private route: Router) {

    this.LoginFormGroup = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {

    // AddUser(value: any) {

    //   let body = {

    //     name: value.name,
    //     mdp: value.mdp,
    //     email: value.email


    //   }

    //   this.AuthService.signUp(body).subscribe(add => {
    //     console.log(add);

    //     this.ngOnInit();
    //     // location.reload();

    //   });
    // }

  }



  Login() {

    console.log(this.LoginFormGroup.value);

    if (this.LoginFormGroup.valid) {

      this.AuthService.logIn(this.LoginFormGroup.value).subscribe(

        (data: any) => {
         
          localStorage.setItem('token', data.token)

          //une fois connecter diriger vers la liste des persos
          this.route.navigate(['/liste-persos'])

        })

    }
  }

}
