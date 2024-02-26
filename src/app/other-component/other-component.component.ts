import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-other-component',
  templateUrl: './other-component.component.html',
  styleUrls: ['./other-component.component.scss']
})
export class OtherComponentComponent implements OnInit {
  @Input() informacija: string = '';

  @Output() povratnaInformacija: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    this.povratnaInformacija.emit('Nesto se desilo u ovoj komponenti');
  }
}
