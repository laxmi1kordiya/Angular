import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  public tabs = {
    list: [
      {
        tab: 'faq',
        label: 'FAQs',
      }, {
        tab: 'contactUs',
        label: 'Contact Us'
      }
    ],
    activeTab: 'faq'
  };

  public faq = [false, false, false, false, false, false, false, false, false, false, false, false];

  public faqs = [
    {
      title: "Not working on store front, not converting prices, what to do ?",
      ans: "Make sure that you enabled our app from header, if not then enable and check, if enabled and still not working then contact our support. You can disable our app until we contact you.",
      open: true,
      img: "assets/appStatus.png",
      imgText:"Screenshot for reference."
    },
    {
      title: "How to add countries?",
      ans: "In Auto Currency Converter app's admin just click on the countries menu on left sidebar and hit add button. Now add details as you want and hit the save button.",
      open: false
    },
    {
      title: "How to change the currency of a country in the list?",
      ans: "In Auto Currency Converter app's admin just click on the countries menu on left sidebar and select the country from list and hit the edit button. Now, change the currency for specific country and hit the save button.",
      open: false
    },
    {
      title: "Is this app have free?",
      ans: "Yes, Auto Currency Converter is free to access. ",
      open: false
    },
    {
      title: "How to integrate app?",
      ans: "Goto settings and click on Price Setting you will find steps to integrate app.",
      open: false
    },
    {
      title: "How to uninstall an app?",
      ans: "Disabel an option from top right corner and then a popup will appear with a button 'Remove code'. Hit button to remove all our codes from your store",
      open: false
    },
    {
      title: "How Rounding rules worked?",
      ans: "Rounding rules are worked same as Shopify rounding rules, For e.g If you set a rounding rule 0.99 then all your generated product prices are shown based on that rule. If your product price is 58.67 then it will 58.99 automatically.",
      open: false
    },
    {
      title: "Does this app also work with checkout?",
      ans: "No, User will see your store's default currency in checkout.",
      open: false
    }
  ];
  public contactForm;
  public messageStatus;
  public helpVideoText1 = "video1";
  constructor(private fb:FormBuilder) { 
     this.contactForm = this.fb.group({
      userId: [''],
      email: [''],
      messageType: ['', Validators.required],
      message: ['', Validators.required],
      shopUrl: [''],
      messageFrom: ['']
    });
    
  }

  ngOnInit(): void {
    
  }
  changeActive(i) {
      this.faqs[i].open = !this.faqs[i].open;
    }

}






