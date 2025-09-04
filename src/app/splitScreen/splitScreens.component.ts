import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-split-screens',
  templateUrl: './splitScreens.component.html',
  styleUrls: ['./splitScreens.component.less'],
  standalone: true,
})
export class SplitScreensComponent implements AfterViewInit {
  @ViewChild('leftPanel') leftPanel!: ElementRef<HTMLDivElement>;
  @ViewChild('rightPanel') rightPanel!: ElementRef<HTMLDivElement>;
  @ViewChild('spacer') spacer!: ElementRef<HTMLDivElement>;
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;

  private syncing = false;

  ngAfterViewInit() {
  this.leftPanel.nativeElement.addEventListener('scroll', () => this.onPanelScroll('left'));
  this.rightPanel.nativeElement.addEventListener('scroll', () => this.onPanelScroll('right'));
  this.spacer.nativeElement.addEventListener('scroll', this.onSpacerScroll.bind(this));
  }

  onPanelScroll(panel: 'left' | 'right') {
    if (this.syncing) return;
    // Panels scroll independently
  }

  onSpacerScroll() {
    if (this.syncing) return;
    this.syncing = true;
    const scrollTop = this.spacer.nativeElement.scrollTop;
    this.leftPanel.nativeElement.scrollTop = scrollTop;
    this.rightPanel.nativeElement.scrollTop = scrollTop;
    this.syncing = false;
  }

}
