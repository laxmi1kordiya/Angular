import { Component, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SecureService } from './secure.service';
import * as Sentry from "@sentry/angular";
// import initHelpHero from 'helphero';

declare var $crisp;
declare global {
  interface Window {
    $crisp: any;
    CRISP_WEBSITE_ID: any;
  }
}

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  public change: boolean = true;
  public fullSidebar: boolean = true;
  public onboarding: boolean = false;
  
  public user: any = {};
  public fetchUser = false;
  public shortenNotify: boolean = false;
  public shopurl: any;
  public ipAddress: any;
  public ismenuclick: boolean = false;
  public testStores = ["dev-srore.myshopify.com", "dako-patel.myshopify.com", "webrex-test-store.myshopify.com", "wscc-test.myshopify.com"];
  public shopifyPlan: Boolean = false;


  // public analytics:any;

  constructor(public router: Router, public renderer: Renderer2, private route: ActivatedRoute, private secureservice: SecureService) { 
    this.getliverate();

    this.secureservice.checkToken().subscribe((res)=>{
      this.getUser();
    },
    (err) =>{
      localStorage.removeItem("token");
      localStorage.removeItem("shopurl");
      this.router.navigate(['/install']);
    }
    );
  }
  changeSidebar(event) {
    console.log("event", event)
    this.fullSidebar = event;
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 500);
    console.log(this.fullSidebar)
  }


  ngOnInit(): void {
  }
  ngAfterContentInit() {
    this.shortenNotify = (this.route.snapshot['_routerState'].url).includes("/dashboard") ? true : false;
  }

  changeOfRoutes() {
    this.shortenNotify = (this.route.snapshot['_routerState'].url).includes("/dashboard") ? true : false;
  }

  getUser() {
    this.secureservice.fetchUser().subscribe((res) => {
      this.secureservice.sendRoute(res['data']);
      this.user = res['data'];
      
      Sentry.configureScope((scope) => {
        scope.setUser({
          'id': res['data']._id,
          'username': res['data'].shopurl
        });
      });
      this.secureservice.setUser(this.user);

      this.fetchUser = true;

      // this.getLogs();

      // this.loadSegment(this.user);
      // window.analytics.identify(this.user._id, this.user);

      // this.loadChat();
      // this.checkUserShopifyPlan();

      // let token = localStorage.getItem('token');
      // if (token != undefined) {
      //   let session = sessionStorage.getItem('isAuth');
      //   if (session == null) {
      //     sessionStorage.setItem('isAuth', 'true');
      //     this.shopurl = localStorage.getItem('shopurl');
      //     this.getIP();
      //   }
      // }
    },
      (err) => {
        console.log(err);
      }
    );
  }
  getliverate(){
    this.secureservice.getRates().subscribe((res)=>{
      this.secureservice.setLiveRates(res['data']);
    },
    (err) =>{
      console.log(err);
    }
    )
  }





  // checkUserShopifyPlan() {
  //   let checkTestStore = this.testStores.find(e => e != this.user.shopUrl);
  //   if (checkTestStore == "" && this.user.plan_name == "partner_test") {
  //     this.shopifyPlan = true;
  //   }


  // }

  // getIP() {
  //   this.secureservice.getIPAddress().subscribe((res: any) => {
  //     this.ipAddress = res.query;
  //     this.addLog();
  //   });
  // }

  // addLog() {
  //   this.secureservice.addLogs({ log: this.ipAddress }).subscribe((res) => {
  //     this.getLogs();
  //   }, err => {
  //   });
  // }

  

  
  //   loadChat() {
  //     this.secureservice.user.subscribe(user => {
  //       this.user = user;
  //       // if (this.user.recurringPlanName != "Premium100") {
  //       if (this.user.admin) {
  //         this.onboarding = false;
  //       } else {
  //         if (!this.user.isInitialSetupDone) {
  //           this.onboarding = true;
  //         } else {
  //           this.onboarding = false;
  //         }
  //       }
  //       // }
  //       let checkTestStore = this.testStores.find(e => e == this.user.shopUrl);
  
  //       if (!this.user.admin && this.user.email && !this.user.email.includes("webrexstudio.com")) {
  //         var hlp = initHelpHero('arODRT6Dq2');
  //         hlp.identify(user._id, user);
  //         window.$crisp = [];
  //         window.CRISP_WEBSITE_ID = environment.crispId;
  //         this.addJsToElement("https://client.crisp.chat/l.js").onload = () => {
  //           window.$crisp.push(["set", "user:email", [this.user.email]]);
  //           window.$crisp.push(["set", "user:nickname", [this.user.storeName]]);
  //           window.$crisp.push(["set", "user:phone", [this.user.phone]]);
  //           let stepCount = "step-" + this.user.stepCount;
  //           let industry = this.user.industry ? "ind-" + this.user.industry : '';
  //           let themeName = this.user.themeName ? "theme-" + this.user.themeName : '';
  //           let appEnabled = this.user.appEnabled ? "AppEnabled" : "AppDisabled";
  //           let appVerified = this.user.isInitialSetupDone ? "Verified" : "NotVerified";
  //           window.$crisp.push(["set", "session:segments", [[this.user.shopUrl, appEnabled, appVerified, stepCount, industry, themeName], false]]);
  //         };
  //       }
  //     })
  //   }

  // addJsToElement(src: string): HTMLScriptElement {
  //   const script = document.createElement("script");
  //   script.type = "text/javascript";
  //   script.src = src;
  //   script.async = true;
  //   this.renderer.appendChild(document.body, script);
  //   return script;
  // }







}




