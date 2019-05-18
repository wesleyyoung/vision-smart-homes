import {
  Component,
  OnInit,
  Inject,
  HostListener,
  NgZone,
  ViewChild
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatIconRegistry
} from '@angular/material';
import {
  FormControl,
  Validators
} from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit {

  public isMobile: boolean;
  public mobileTrigger: number = 750;

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  constructor(
    public dialogRef: MatDialogRef<ContactModalComponent>,
    private ngZone: NgZone
  ) { }

  @HostListener('window:resize', ['$event']) onresize(ev) {
    this.isMobile = ev.target.innerWidth <= this.mobileTrigger;
  }

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public requiredFormControl = new FormControl('', [
    Validators.required
  ]);

  public phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/)
  ]);

  triggerResize() {
    this.ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.isMobile = window.innerWidth <= this.mobileTrigger;
  }

}
