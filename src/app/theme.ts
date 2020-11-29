import {throttle} from 'lodash-es';

export class Theme {

  private applyThemeThrottle = throttle(() => {
    this.applyTheme();
  }, 150);

  private _h: number | null;
  get h(): number | null {
    return this._h;
  }

  set h(value: number | null) {
    this._h = value || 0;
    this.applyThemeThrottle();
  }

  private _s: number | null;
  get s(): number | null {
    return this._s;
  }

  set s(value: number | null) {
    this._s = value || 0;
    this.applyThemeThrottle();
  }

  private _l: number | null;
  get l(): number | null {
    return this._l;
  }

  set l(value: number | null) {
    this._l = value || 0;
    this.applyThemeThrottle();
  }

  private _cc: number | null;
  get cc(): number | null {
    return this._cc;
  }

  set cc(value: number | null) {
    this._cc = value || 0;
    this.applyThemeThrottle();
  }

  private _dark: boolean;
  get dark(): boolean {
    return this._dark;
  }

  set dark(value: boolean) {
    this._dark = value;
    this.applyThemeThrottle();
  }

  constructor(h: number, s: number, l: number, cc: number, dark: boolean) {
    this._h = h || 0;
    this._s = s || 50;
    this._l = l || 50;
    this._cc = cc || 50;
    this._dark = dark;
  }

  private applyTheme(): void {
    document.body.style.setProperty('--is-dark-theme', `${+this.dark}`);
    document.body.style.setProperty('--primary-h', `${this.h}`);
    document.body.style.setProperty('--primary-s', `${this.s}`);
    document.body.style.setProperty('--primary-l', `${this.l}`);
    document.body.style.setProperty('--primary-contrast-threshold', `${this.cc}%`);
  }

}
