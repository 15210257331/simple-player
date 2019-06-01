import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { LoginComponent } from './login/login.component';
import { UserInfo } from '../../entity';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  keyword = '';
 
  userInfo: UserInfo = null;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private modalService: NzModalService,
    private message: NzMessageService,
    ) { }

  ngOnInit() {
    this.getUserInfo();
  }
  
  getUserInfo() {
    // this.userService.getUserInfo().subscribe(res => {
    //   if(res['result']) {
    //     this.userInfo = res['data'];
    //   }
    // })
  }

  searchMusic() {
    if (!this.keyword) {
      return;
    }
    this.router.navigate(['/search-detail'], {queryParams: {keyword: this.keyword}});
  }

  back() {
    window.history.back();
  }

  ahead() {
    window.history.forward();
  }

  refresh() {
    window.location.reload();
  }
  
  openLogin(): void {
    const modal = this.modalService.create({
      nzTitle: '登录',
      nzContent: LoginComponent,
      nzClosable: false,
      nzComponentParams: {},
      nzFooter: null,
      nzWidth: 380,
    });
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    modal.afterClose.subscribe((res) => {
      if(res) {
        this.getUserInfo();
      }
    });
  }

  logout() {
    // this.apiService.logout().subscribe(res => {
    //   this.message.success('退出成功！', { nzDuration: 1000 });
    //   this.userStore.clear();
    // });
  }
}
