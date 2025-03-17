import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserService } from '../../../service/user.service';
import { UiService } from '../../../service/ui.service';
@Component({
  selector: 'app-modify-password-dialog',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule],
  templateUrl: './modify-password-dialog.component.html',
  styleUrl: './modify-password-dialog.component.scss'
})
export class ModifyPasswordDialogComponent {
  passwordForm: FormGroup;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModifyPasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private uiService: UiService
  ) {
    this.dialogRef.disableClose = true;

    this.passwordForm = this.fb.group({
      originPassword: ['', [Validators.required, Validators.minLength(4)]],
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }
  openSnackBar(message: string, action: string) {
    this.uiService.openSnackBar(message, action);
  }
  private passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return newPassword === confirmPassword ? null : { mismatch: true };
  }
  changePassword() {
    if (this.passwordForm.invalid) {
      this.uiService.openSnackBar("請確認輸入的密碼正確", "關閉");
      return;
    }
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    const { originPassword, newPassword } = this.passwordForm.value;
    var req = {
      id: this.data,
      oldPassword: originPassword,
      newPassword: newPassword,
    }
    this.userService.modifyPassword(req).subscribe({
      next: data => {
        console.log(data);
        if (data.resultCode === 0) {
          this.uiService.openSnackBar("密碼修改成功", "關閉");
          this.dialogRef.close(true);
        }
        else if (data.resultCode === -1) {
          this.uiService.openSnackBar("更改失敗，使用者不存在", "關閉");
        }
        else if (data.resultCode === -2) {
          this.uiService.openSnackBar("更改失敗，密碼輸入相同", "關閉");
        }
        else if (data.resultCode === -3) {
          this.uiService.openSnackBar("更改失敗，舊密碼錯誤", "關閉");
        }
      },
      error: error => {
        this.uiService.openSnackBar("密碼修改失敗：" + error.message, "關閉");
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    })

  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }
}
