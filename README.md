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

## **📌 總結**
✅ **新增 `environment.ts` 設定 API URL**，確保前端連接後端 `TeaAPI`。  
✅ **提供 `production` 環境的 `environment.prod.ts` 設定**，確保正式環境使用正確的 API。  
✅ **提醒開發者在 HTTP 請求中使用 `environment.apiUrl`**，避免硬編碼 API 路徑。

這樣，開發者可以正確設定 API URL，確保 Angular 前端順利與 `TeaAPI` 連接！🚀✨  
如果還有需要調整的地方，請讓我知道！😊
