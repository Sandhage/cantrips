import { Injectable } from '@angular/core';

Injectable()
export class MathUtilsService {
  public randomNum(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
