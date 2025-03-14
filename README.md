# KingstonTeaFront

本專案是使用 Angular CLI(https://github.com/angular/angular-cli) 版本 19.2.1 生成的。

## 1️⃣ 設定 API URL (`environment.ts`)

在 `src/environments/environment.ts` 內設定 **後端 API 連接 URL**，以確保前端正確連接 `TeaAPI`。

📌 **示例 (`environment.ts`)**：
```typescript
export const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/api' //據後端API設定URL
};
```

## 2️⃣ 啟動開發伺服器 (`ng serve`)

執行以下指令來啟動開發伺服器，並在 `http://localhost:4200/` 開啟專案：
```sh
ng serve
```

🚀 **開發伺服器啟動後，任何對應的檔案修改都會自動重新載入！**

## 3️⃣ 登入測試帳號

當應用程式啟動後，預設會跳轉到 **Dashboard**，請使用以下測試帳號登入系統。
![專案 Logo](assets/images/login.png)
📌 **測試帳號**
```
帳號: a29803904
密碼: test
```


🚀 **這樣，當用戶開啟應用程式時，系統會自動導向登入畫面，確保登入驗證生效！**

## **📌 總結**
✅ **新增 `environment.ts` 設定 API URL**，確保前端連接後端 `TeaAPI`。
✅ **提供 `production` 環境的 `environment.prod.ts` 設定**，確保正式環境使用正確的 API。
✅ **提醒開發者在 HTTP 請求中使用 `environment
