import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {
  text!: string;
  area!: string;
  arrBadWords: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.arrBadWords.push(this.text)
    this.text = '';
    console.log(this.arrBadWords);
  }

  reset(): void {
    this.arrBadWords.length = 0;
    console.log(this.arrBadWords);
  }

  update(): void {
    if (this.area) {
      this.arrBadWords.forEach(el => {
        let reg = new RegExp(`\\b${el}\\b`, 'g');
        function replacer(string: string) {
          return [string].join('!');
        }
        this.area = this.area.replace(reg, replacer)
      })
    }
  }
}
