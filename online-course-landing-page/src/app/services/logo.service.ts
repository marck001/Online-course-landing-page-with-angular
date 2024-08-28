import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  private headerLogoImg: HTMLImageElement | null = null;
  private footerLogoImg: HTMLImageElement | null = null;

  constructor() { }

  getHeaderLogo(): HTMLImageElement | null {
    return this. headerLogoImg;
  }

  getFooterLogo(): HTMLImageElement | null {
    return this.footerLogoImg;
  }

  setHeaderLogo(logo: HTMLImageElement):void{
    this.headerLogoImg = logo;
  }

  setFooterLogo(logo: HTMLImageElement):void{
    this.footerLogoImg = logo;
  }


  

}
