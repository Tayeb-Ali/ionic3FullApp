import { Injectable } from "@angular/core";
import { LanguageModel } from "./language.model";

@Injectable()
export class LanguageService {
  languages : Array<LanguageModel> = new Array<LanguageModel>();

   constructor() {
     this.languages.push(
      {name: "Arabic", code: "ar"},
       {name: "English", code: "en"}
     );
   }

   getLanguages(){
     return this.languages;
   }
 }
