import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-fetchresult',
  templateUrl: './fetchresult.component.html',
  styleUrls: ['./fetchresult.component.css']
})
export class FetchresultComponent implements OnInit {
  findData: any;
  readData: any;
  mg1: any;
  mg2: any;
  mg3: any;
  mg4: any;
  mg5: any;
  mg6: any;
  mg7: any;
  mg8: any;
  mg9: any;
  gd1: any;
  gd2: any;
  gd3: any;
  gd4: any;
  gd5: any;
  gd6: any;
  gd7: any;
  gd8: any;
  gd9: any;
  cc1: any;
  cc2: any;
  cc3: any;
  cc4: any;
  cc5: any;
  cc6: any;
  cc7: any;
  cc8: any;
  cc9: any;
  g1: any;
  ec1: any;
  ec2: any;
  ec3: any;
  ec4: any;
  ec5: any;
  ec6: any;
  ec7: any;
  ec8: any;
  ec9: any;
  sgpa: any;
  tgp: any;
  ShowMe:boolean=false
  ecredit: any;


  constructor(private service: UserService, private _http: HttpClient) { 

  }




  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    'uenroll': new FormControl('', Validators.required,),
    'udob': new FormControl('', Validators.required),
    'semester': new FormControl('', Validators.required),
    

  });

  userlogin() {
    if (this.loginForm.valid) {
      this.service.checkUser(this.loginForm.value).subscribe((res) => {
        this.findData = res.data;
        this.ShowMe=!this.ShowMe;
        

  this.ec1 =Math.ceil(parseInt(res.data[0].m1)/10);
  this.ec2 =Math.ceil(parseInt(res.data[0].m2)/10);
  this.ec3 =Math.ceil(parseInt(res.data[0].m3)/10);
  this.ec4 =Math.ceil(parseInt(res.data[0].m4)/10);
  this.ec5 =Math.ceil(parseInt(res.data[0].m5)/10);
  this.ec6 =Math.ceil(parseInt(res.data[0].m6)/10);
  this.ec7 =Math.ceil(parseInt(res.data[0].m7)/10);
  this.ec8 =Math.ceil(parseInt(res.data[0].m8)/10);
  this.ec9 =Math.ceil(parseInt(res.data[0].m9)/10);





   switch (res.data[0].cn1) {
     case 'Engineering Drawing' :
       this.gd1 = 4;
       this.cc1 = "CIP100";
       break;
     case 'Basic Electrical Engineering':
       this.gd1 = 4;
       this.cc1 = "EEL100";
       break;
     case 'Engineering Chemistry':
       this.gd1 = 4;
       this.cc1 = "CYL100";
       break;
     case 'Chemistry Laboratory':
       this.gd1 = 1;
       this.cc1 = "CYP100";
       break;
     case 'Basic Electrical Engineering Laboratory':
       this.gd1 = 1;
       this.cc1 = "ELP100";
       break;
     case 'Advanced English Comm. Skills & Organizational Behavior':
       this.gd1 = 3;
       this.cc1 = "HUL101";
       break;
     case 'Computer Programming':
       this.gd1 = 3;
       this.cc1 = "ITL100";
       break;

     case 'Computer Programming Laboratory	':
       this.gd1 = 1;  
       this.cc1 = "ITP100";
       break;

     case 'Mathematics II':
       this.gd1 = 4; 
       this.cc1 = "MAL101" ; 

   }
     
   switch (res.data[0].cn2) {
     case 'Engineering Drawing' :
       this.gd2 = "4";
       this.cc2 = "CIP100";
       break;
     case 'Basic Electrical Engineering':
       this.gd2 = "4";
       this.cc2 = "EEL100";
       break;
     case 'Engineering Chemistry':
       this.gd2 = "4";
       this.cc2 = "CYL100";
       break;
     case 'Chemistry Laboratory':
       this.gd2 = "1";
       this.cc2 = "CYP100";
       break;
     case 'Basic Electrical Engineering Laboratory':
       this.gd2 = "1";
       this.cc2 = "ELP100";
       break;
     case 'Advanced English Comm. Skills & Organizational Behavior':
       this.gd2 = "3";
       this.cc2 = "HUL101";
       break;
     case 'Computer Programming	':
       this.gd2 = "3";
       this.cc2 = "ITL100";
       break;

     case 'Computer Programming Laboratory	':
       this.gd2 = "1";  
       this.cc2 = "ITP100";
       break;

     case 'Mathematics II':
       this.gd2 = "4";   
       this.cc2 = "MAL101" ; 

   }

   switch (res.data[0].cn3) {
     case 'Engineering Drawing' :
       this.gd3 = "4";
       this.cc3 = "CIP100";
       break;
     case 'Basic Electrical Engineering':
       this.gd3 = "4";
       this.cc3 = "EEL100";
       break;
     case 'Engineering Chemistry':
       this.gd3 = "4";
       this.cc3 = "CYL100";
       break;
     case 'Chemistry Laboratory':
       this.gd3 = "1";
       this.cc3 = "CYP100";
       break;
     case 'Basic Electrical Engineering Laboratory':
       this.gd3 = "1";
       this.cc3= "ELP100";
       break;
     case 'Advanced English Comm. Skills & Organizational Behavior':
       this.gd3 = "3";
       this.cc3 = "HUL101";
       break;
     case 'Computer Programming	':
       this.gd3 = "3";
       this.cc3 = "ITL100";
       break;

     case 'Computer Programming Laboratory	':
       this.gd3 = "1";  
       this.cc3 = "ITP100";
       break;

     case 'Mathematics II':
       this.gd3 = "4";   
       this.cc3 = "MAL101"; 

   }

   switch (res.data[0].cn4) {
     case 'Engineering Drawing' :
       this.gd4 = "4";
       this.cc4 = "CIP100";
       break;
     case 'Basic Electrical Engineering':
       this.gd4 = "4";
       this.cc4 = "EEL100";
       break;
     case 'Engineering Chemistry':
       this.gd4 = "4";
       this.cc4 = "CYL100";
       break;
     case 'Chemistry Laboratory':
       this.gd4 = "1";
       this.cc4 = "CYP100";
       break;
     case 'Basic Electrical Engineering Laboratory':
       this.gd4 = "1";
       this.cc4= "ELP100";
       break;
     case 'Advanced English Comm. Skills & Organizational Behavior':
       this.gd4 = "3";
       this.cc4 = "HUL101";

       break;
     case 'Computer Programming	':
       this.gd4 = "3";
       this.cc4 = "ITL100";
       break;

     case 'Computer Programming Laboratory	':
       this.gd4 = "1";  
       this.cc4 = "ITP100";
       break;

     case 'Mathematics II':
       this.gd4 = "4";   
       this.cc4 = "MAL101"; 

   }
   
   switch (res.data[0].cn5) {
     case 'Engineering Drawing' :
       this.gd5 = "4";
       this.cc5 = "CIP100";

       break;
     case 'Basic Electrical Engineering':
       this.gd5 = "4";
       this.cc5 = "EEL100";
       break;
     case 'Engineering Chemistry':
       this.gd5 = "4";
       this.cc5 = "CYL100";
       break;
     case 'Chemistry Laboratory':
       this.gd5 = "1";
       this.cc5 = "CYP100";
       break;
     case 'Basic Electrical Engineering Laboratory':
       this.gd5 = "1";
       this.cc5= "ELP100";
       break;
     case 'Advanced English Comm. Skills & Organizational Behavior':
       this.gd5 = "3";
       this.cc5 = "HUL101";
       break;
     case 'Computer Programming	':
       this.gd5 = "3";
       this.cc5 = "ITL100";
       break;

     case 'Computer Programming Laboratory	':
       this.gd5 = "1";  
       this.cc5 = "ITP100";
       break;

     case 'Mathematics II':
       this.gd5 = "4"; 
       this.cc5 = "MAL101"; 


   }

   switch (res.data[0].cn6) {
     case 'Engineering Drawing' :
       this.gd6 = "4";
       this.cc6 = "CIP100";

       break;
     case 'Basic Electrical Engineering':
       this.gd6 = "4";
       this.cc6 = "EEL100";
       break;
     case 'Engineering Chemistry':
       this.gd6 = "4";
       this.cc6 = "CYL100";
       break;
     case 'Chemistry Laboratory':
       this.gd6 = "1";
       this.cc6 = "CYP100";
       break;
     case 'Basic Electrical Engineering Laboratory':
       this.gd6 = "1";
       this.cc6= "ELP100";
       break;
     case 'Advanced English Comm. Skills & Organizational Behavior':
       this.gd6 = "3";
       this.cc6 = "HUL101";
       break;
     case 'Computer Programming	':
       this.gd6 = "3";
       this.cc6 = "ITL100";
       break;

     case 'Computer Programming Laboratory	':
       this.gd6 = "1";  
       this.cc6 = "ITP100";
       break;

     case 'Mathematics II':
       this.gd6 = "4";   
       this.cc6 = "MAL101"; 
   }

   switch (res.data[0].cn7) {
     case 'Engineering Drawing' :
       this.gd7 = "4";
       this.cc7 = "CIP100";
       break;
     case 'Basic Electrical Engineering':
       this.gd7 = "4";
       this.cc7 = "EEL100";
       break;
     case 'Engineering Chemistry':
       this.gd7 = "4";
       this.cc7 = "CYL100";
       break;
     case 'Chemistry Laboratory':
       this.gd7 = "1";
       this.cc7 = "CYP100";
       break;
     case 'Basic Electrical Engineering Laboratory':
       this.gd7 = "1";
       this.cc7= "ELP100";

       break;
     case 'Advanced English Comm. Skills & Organizational Behavior':
       this.gd7 = "3";
       this.cc7 = "HUL101";

       break;
     case 'Computer Programming':
       this.gd7 = "3";
       this.cc7 = "ITL100";

       break;

     case 'Computer Programming Laboratory':
       this.gd7 = "1";  
       this.cc7 = "ITP100";
       break;

     case 'Mathematics II':
       this.gd7 = "4";  
       this.cc7 = "MAL101";  

   }

   switch (res.data[0].cn8) {
     case 'Engineering Drawing' :
       this.gd8 = "4";
       this.cc8 = "CIP100";
       break;
     case 'Basic Electrical Engineering':
       this.gd8 = "4";
       this.cc8 = "EEL100";
       break;
     case 'Engineering Chemistry':
       this.gd8 = "4";
       this.cc8 = "CYL100";
       break;
     case 'Chemistry Laboratory':
       this.gd8 = "1";
       this.cc8 = "CYP100";
       break;
     case 'Basic Electrical Engineering Laboratory':
       this.gd8 = "1";
       this.cc8= "ELP100";

       break;
     case 'Advanced English Comm. Skills & Organizational Behavior':
       this.gd8 = "3";
       this.cc8 = "HUL101";

       break;
     case 'Computer Programming':
       this.gd8 = "3";
       this.cc8 = "ITL100";

       break;

     case 'Computer Programming Laboratory':
       this.gd8 = "1";  
       this.cc8 = "ITP100";
       break;

     case 'Mathematics II':
       this.gd8 = "4";  
       this.cc8 = "MAL101";  

   }

   switch (res.data[0].cn9) {
     case 'Engineering Drawing' :
       this.gd9 = "4";
       this.cc9 = "CIP100";
       break;
     case 'Basic Electrical Engineering':
       this.gd9 = "4";
       this.cc9 = "EEL100";
       break;
     case 'Engineering Chemistry':
       this.gd9 = "4";
       this.cc9 = "CYL100";
       break;
     case 'Chemistry Laboratory':
       this.gd9 = "1";
       this.cc9 = "CYP100";
       break;
     case 'Basic Electrical Engineering Laboratory':
       this.gd9 = "1";
       this.cc9= "ELP100";

       break;
     case 'Advanced English Comm. Skills & Organizational Behavior':
       this.gd9 = "3";
       this.cc9 = "HUL101";

       break;
     case 'Computer Programming':
       this.gd9 = "3";
       this.cc9 = "ITL100";

       break;

     case 'Computer Programming Laboratory':
       this.gd9 = "1";  
       this.cc9 = "ITP100";
       break;

     case 'Mathematics II':
       this.gd9 = "4";  
       this.cc9 = "MAL101";  

   }
   
  this.sgpa =(this.ec1 * this.gd1 + this.ec2 * this.gd2 + this.ec3 * this.gd3+ this.ec4 * this.gd4+ this.ec5 * this.gd5+ this.ec6 * this.gd6+ this.ec7 * this.gd7+ this.ec8 * this.gd8+ this.ec9 * this.gd9 )/25;
  this.tgp=(this.ec1 * this.gd1 + this.ec2 * this.gd2 + this.ec3 * this.gd3+ this.ec4 * this.gd4+ this.ec5 * this.gd5+ this.ec6 * this.gd6+ this.ec7 * this.gd7+ this.ec8 * this.gd8+ this.ec9 * this.gd9 )
   this.ecredit = this.gd1 + this.gd2 + this.gd3 + this.gd4 + this.gd5 + this.gd6 + this.gd7 + this.gd8 + this.gd9;
 let g1 = parseInt(res.data[0].m1);
  if(g1 >= 91){
     this.mg1 = 'A+';
  }else if(g1 >= 81){
     this.mg1 = 'A';
  }else if(g1 >= 71){
     this.mg1 = 'B+';
  }else if(g1 >= 61){
     this.mg1= 'B';
  }else if(g1 >= 51){
   this.mg1= 'C+';
  }else if(g1 >= 40){
   this.mg1= 'C';
  }else {
    this.mg1='F'
  };

  var g2 = parseInt(res.data[0].m2);
  if(g2 >= 91){
    this.mg2 = 'A+';
 }else if(g2 >= 81){
    this.mg2 = 'A';
 }else if(g2 >= 71){
    this.mg2 = 'B+';
 }else if(g2 >= 61){
    this.mg2= 'B';
 }else if(g2 >= 51){
  this.mg2= 'C+';
 }else if(g2 >= 40){
  this.mg2= 'C';
 }else {
   this.mg2='F'
 };

 var g3 = parseInt(res.data[0].m3);
 if(g3 >= 91){
   this.mg3 = 'A+';
}else if(g3 >= 81){
   this.mg3 = 'A';
}else if(g3 >= 71){
   this.mg3 = 'B+';
}else if(g3 >= 61){
   this.mg3= 'B';
}else if(g3 >= 51){
 this.mg3= 'C+';
}else if(g3 >= 40){
 this.mg3= 'C';
}else {
  this.mg3='F'
};

var g4 = parseInt(res.data[0].m4);
if(g4 >= 91){
  this.mg4 = 'A+';
}else if(g4 >= 81){
  this.mg4 = 'A';
}else if(g4 >= 71){
  this.mg4 = 'B+';
}else if(g4 >= 61){
  this.mg4= 'B';
}else if(g4 >= 51){
this.mg4= 'C+';
}else if(g4 >= 40){
this.mg4= 'C';
}else {
 this.mg4='F'
};

var g5 = parseInt(res.data[0].m5);
if(g5 >= 91){
 this.mg5 = 'A+';
}else if(g5 >= 81){
 this.mg5 = 'A';
}else if(g5 >= 71){
 this.mg5 = 'B+';
}else if(g5 >= 61){
 this.mg5= 'B';
}else if(g5 >= 51){
this.mg5= 'C+';
}else if(g5 >= 40){
this.mg5= 'C';
}else {
this.mg5='F'
};

var g6 = parseInt(res.data[0].m6);
if(g6 >= 91){
this.mg6 = 'A+';
}else if(g6 >= 81){
this.mg6 = 'A';
}else if(g6 >= 71){
this.mg6 = 'B+';
}else if(g6 >= 61){
this.mg6= 'B';
}else if(g6 >= 51){
this.mg6= 'C+';
}else if(g6 >= 40){
this.mg6= 'C';
}else {
this.mg6='F'
};

var g7 = parseInt(res.data[0].m7);
if(g7 >= 91){
this.mg7 = 'A+';
}else if(g7 >= 81){
this.mg7= 'A';
}else if(g7 >= 71){
this.mg7 = 'B+';
}else if(g7 >= 61){
this.mg7= 'B';
}else if(g7 >= 51){
this.mg7= 'C+';
}else if(g7 >= 40){
this.mg7= 'C';
}else {
this.mg7='F'
};

var g8 = parseInt(res.data[0].m8);
if(g8 >= 91){
this.mg8 = 'A+';
}else if(g8 >= 81){
this.mg8 = 'A';
}else if(g8 >= 71){
this.mg8 = 'B+';
}else if(g8 >= 61){
this.mg8= 'B';
}else if(g8 >= 51){
this.mg8= 'C+';
}else if(g8 >= 40){
this.mg8= 'C';
}else {
this.mg8='F'
};

var g9 = parseInt(res.data[0].m9);
if(g9 >= 91){
this.mg9 = 'A+';
}else if(g9 >= 81){
this.mg9 = 'A';
}else if(g9 >= 71){
this.mg9 = 'B+';
}else if(g9 >= 61){
this.mg9= 'B';
}else if(g9 >= 51){
this.mg9= 'C+';
}else if(g9 >= 40){
this.mg9= 'C';
}else {
this.mg9='F'
};
     });

    }
    else {
      alert( 'All fields are required !!');
      this.loginForm.reset();

    }
  }


print(){
 window.print();

}

}
