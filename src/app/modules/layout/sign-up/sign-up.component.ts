import {Component, OnInit} from '@angular/core';
import {NzModalRef} from "ng-zorro-antd/modal";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private modal: NzModalRef,
              private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      password: ['', Validators.required],
      username: ['', Validators.required],
      remember: ['']

    });
  }

  ngOnInit(): void {
  }

  destroyModal(): void {
    this.modal.destroy()
  }

  submitForm() {
    console.log(this.validateForm.value)
  }
}
