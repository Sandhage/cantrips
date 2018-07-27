import { Injectable } from '@angular/core';

Injectable()
export class MathUtilsService {
  public randomNum(max: number, min?: number): number {
    let num: number;

    if (min) {
      num = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      num = Math.floor(Math.random() * Math.floor(max));
    }

    return num;
  }
}
