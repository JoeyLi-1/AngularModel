import { Input, Component, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: 'a-op',
    template: `
      
      <p>AOpComponent</p>
      <button (click)="changeName()">Change name</button>
      <b-op [user]="user"></b-op>
    `,
  })
export class AOpComponent {
  user = { name: 'A' };
 
  changeName() {
    this.user.name = 'B';
  }
}
 
@Component({
  selector: 'b-op',
  template: `
    <p>BOpComponent</p>
    <button (click)="changeName()">Change name</button>
    <span>User name: {{user.name}}</span>
    <c-op [user]="user"></c-op>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush // If comment this, name will change for component b-op. 
})
export class BOpComponent {
  @Input() user: any;
  changeName() {
    this.user.name = 'C';
  }
}

@Component({
    selector: 'c-op',
    template: `
        <p>COpComponent</p>
      <span>User name: {{user.name}}</span>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush // if comment this, name will change for component c-op
  })

  // If b-op defined onPush, but c-op did  not. When click button in a-op, b-op will not become dirty. c-op will not change as well.
  export class COpComponent {
    @Input() user: any;
  }