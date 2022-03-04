import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { InstallService } from './install.service'

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss']
})
export class InstallComponent implements OnInit {
  public shopurl: string;
  public loginform: FormGroup;
  public url: string;
  public existing: boolean = false;
  public tmpurl: string;
  public appName: any = environment.appName;
  public loading: boolean =true;



  constructor(private fb: FormBuilder, private router: Router, private installservice: InstallService, private route:ActivatedRoute ) {
    this.loginform = this.fb.group({
      shopurl: [environment.store, Validators.required],
    })
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      if(params['shop']){
        this.shopurl = this.route.snapshot.queryParamMap.get('shop');
        this.checkExisting(this.shopurl)
    }else{
      this.loading = false;
    }
    })
  

  }
  
  goTo() {
    if (!this.loginform.invalid) {
      if (this.loginform.controls['shopurl'].value.includes('http')) {
        let tmp = this.loginform.controls['shopurl'].value.split('//')[1];
        this.checkExisting(tmp);
      } else {
        this.checkExisting(this.loginform.controls['shopurl'].value)
      }
    }else{
      Object.keys(this.loginform.controls).forEach(key =>{
        this.loginform.get(key).markAsDirty();
      });
    }
  }

  checkExisting(url) {
    this.tmpurl = url;
    var installurl = `https://${this.tmpurl}/admin/oauth/authorize?client_id=${environment.appId}&scope=${environment.appScope}&redirect_uri=${window.location.origin}/app/auth`;
    document.location.href = installurl;
  }

}
