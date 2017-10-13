import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { sha512 } from 'sha512';
import { global } from '@angular/core/src/util';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    getStatus = {
      "rrr":"",
      "corpName":"",
      };
    post:any;
    merchantId:any;
    apiKey:any;

constructor(public navCtrl: NavController, public http: Http) {
    
  }

  getStatusForm(){
    console.log(this.getStatus.rrr);
    console.log(this.getStatus.corpName);
    
    switch (this.getStatus.corpName) {
			case "CAC":
				this.merchantId = "520287648";
				this.apiKey = "532709";
				break;
				
			case "COREN":
				this.merchantId = "534733185";
				this.apiKey = "412039";
				break;	
				
				case "KGSU":
				this.merchantId = "1992359726";
				this.apiKey = "395286";
				break;	
				
				case "FPMAURA":
				this.merchantId = "1132920101";
					this.apiKey = "604517";
					break;
					case "FIIRO":
				this.merchantId = "1171260900";
				this.apiKey = "240593";
				break;
			case "FPOFFA":
				this.merchantId = "535139208";
				this.apiKey = "591628";
				break;
			case "UNIIBADAN":
				this.merchantId = "628730945";
				this.apiKey = "859603";
				break;
			case "UNILAG":
				this.merchantId = "782573294";
				this.apiKey = "920875";
				break;
			case "UAM":
				this.merchantId = "550854200";
				this.apiKey = "084597";
				break;
			case "FUNNAB":
				this.merchantId = "578494662";
				this.apiKey = "832741";
				break;
			case "AMAC":
				this.merchantId = "1785452556";
				this.apiKey = "750298";
				break;
			case "DATAPEX":
				this.merchantId = "733082444";
				this.apiKey = "219527";
				break;
			case "NISLT":
				this.merchantId = "602670812";
				this.apiKey = "593062";
				break;
			case "MISC":
				this.merchantId = "1016770627";
				this.apiKey = "119537";
				break;
			case "UNIABUJA":
				this.merchantId = "539458830";
				this.apiKey = "406289";
				break;
			case "CRSMEDU":
				this.merchantId = "1016770769";
				this.apiKey = "122316";
				break;
			case "NOGAK":
				this.merchantId = "795213326";
				this.apiKey = "615403";
				break;
			case "SYSP":
				this.merchantId = "1509328648352";
				this.apiKey = "1946";
				break;
			case "OAU":
				this.merchantId = "769089025";
				this.apiKey = "846332";
				break;
			case "BANC":
				this.merchantId = "954151714";
				this.apiKey = "931026";
				break;
			case "FPKAD":
				this.merchantId = "542778173";
				this.apiKey = "286513";
				break;
			case "UNN":
				this.merchantId = "538757950";
				this.apiKey = "450683";
				break;
			case "FUTYOLA":
				this.merchantId = "536154072";
				this.apiKey = "837029";
				break;
			case "ABUZARIA":
				this.merchantId = "570138349";
				this.apiKey = "248913";
				break;
			case "FPIDAH":
				this.merchantId = "875614977";
				this.apiKey = "731508";
				break;
			case "PCN":
				this.merchantId = "1054480440";
				this.apiKey = "538260";
				break;
			case "CRSMHEALTH":
				this.merchantId = "1016770775";
				this.apiKey = "195288";
				break;
			case "FCEKANO":
				this.merchantId = "795212707";
				this.apiKey = "432591";
				break;
			case "NOUN":
				this.merchantId = "532216410";
				this.apiKey = "841573";
				break;
			case "NTI":
			this.merchantId = "1543411755";
			this.apiKey = "874963";
				
			case "ALVAN":
				this.merchantId = "1278794300";
				this.apiKey = "579341";
				break;
			case "NAFDAC":
				this.merchantId ="1862010758";
				this.apiKey = "176023";	
				break;	
			case "FCEOYO":
				this.merchantId ="646947432";
				this.apiKey = "893547";	
				break;	
			case "NYSC":
				this.merchantId ="852718071";
				this.apiKey = "648391";	
				break;	
			case "NEPC":
				this.merchantId ="1832434342";
				this.apiKey = "512893";	
				break;	
			case "UNIUYO":
				this.merchantId ="563061426";
				this.apiKey = "230416";	
				break;	
			case "FUTMINNA":
				this.merchantId ="1634742570";
				this.apiKey = "214986";	
				break;
			case "PTA_FGGC_IBUSA":
				this.merchantId ="1830506108";
				this.apiKey = "341798";	
				break;
			case "NTI":
				this.merchantId ="1543411755";
				this.apiKey = "874963";
				break;
			case "MOUAU":
				this.merchantId ="854306817";
				this.apiKey = "680921";
				break;
				
			case "NCC":
				this.merchantId ="960420455";
				this.apiKey = "430162";
				break;
			case "JAMB":
				this.merchantId ="1796888777";
				this.apiKey = "104289";
				break;
			case "FGCODI":	
				this.merchantId ="1313968028";
				this.apiKey = "824519";
			case "ORON":	
				this.merchantId ="592156322";
				this.apiKey ="283701";
				break;
			case "KBSTECH":
				this.merchantId= "1663596349";
				this.apiKey ="402816";
				break;
			case "USMANDANUNI":
			this.merchantId= "573566089";
				this.apiKey ="695470";
				break;
			
			case "NAU":
			this.merchantId= "549310119";
			this.apiKey ="907265";
			break;
			
			case "NCS_FPN":
			this.merchantId= "950412860";
			this.apiKey ="651834";
			break;
			
			case "FPBIDA": 
			this.merchantId= "613592988";
			this.apiKey ="319842";
			break;
			
			case "PLSPOLY": 
			this.merchantId= "675159478";
			this.apiKey ="842036";
			break;
			
			case "YABATECH":
			this.merchantId = "576943955";
			this.apiKey = "428537";
			break;
			case "VCN":
			this.merchantId = "635163735";
			this.apiKey = "412397";
			break;
			case "AYEMICOL":
			 this.merchantId = "1540643012";
             this.apiKey = "642935";
      break;
			case "FPBAUCHI":
			this.merchantId = "541113225";
			this.apiKey = "517906";
			break;
			
			case "AOCED":
			this.merchantId = "2126910334";
			this.apiKey = "715642";
			break;
			
			case "FPNASARAWA":
			this.merchantId = "871398876";
            this.apiKey = "784253";
			break;
			
			default:
				this.merchantId = "";
				this.apiKey = "";
				
		}

  var merch = this.merchantId;
  var apiKey = this.apiKey;
  var rrrToGet = this.getStatus.rrr;
  var hashString = "";

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
    
  //hashString= sha512(rrrToGet + apiKey + merch);
  //hashString= sha512(rrrToGet)
  console.log(rrrToGet);

  //console.log(hashString);

  //this.http.get(("https://login.remita.net/remita/ecomm/871398876/260180314407/77e6c441765b4b7fe9eba850f17ea45dfb1d348c5de93734ed83033fe231e99fc5a68e6042903620f86d2f399c8003edbd44483e0634120de043f9103046aa31/status.reg"), {headers: headers}).subscribe(data => {
    //  console.log(hashString);
    //});
  
//"https://login.remita.net/remita/ecomm/' + "/" + merch +"/" + "/" + hash + "/" + status.reg";
}

//getStatusForm2(){
  //this.http.get(("https://login.remita.net/remita/ecomm/871398876/260180314407/77e6c441765b4b7fe9eba850f17ea45dfb1d348c5de93734ed83033fe231e99fc5a68e6042903620f86d2f399c8003edbd44483e0634120de043f9103046aa31/status.reg")).subscribe(data => {
   // console.log(data);
  //});
}

