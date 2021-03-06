import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private message: NzMessageService,
    private apiService: ApiService,
    private modal: NzModalRef,
  ) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      phone: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  login(data: any) {
    this.apiService.login(data).subscribe(res => {
      if (res['code'] === 200) {
        this.modal.destroy({result: true});
        this.message.success('登录成功', { nzDuration: 1000 });
      } else {
        this.message.error('密码或用户名错误！', { nzDuration: 1000 });
      }
    }, error => {
        this.message.error('登录失败', {nzDuration: 2000});
    });
  }

  cancel() {
    this.modal.destroy();
  }

}
