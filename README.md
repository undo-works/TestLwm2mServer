# ライブラリ

## 参考URL

https://www.npmjs.com/package/lwm2m-node-lib

## クライアント

### テスト用コマンド

```bash
# この前にlwm2m-node-lib/でnpm install必要かも
node node_modules\lwm2m-node-lib\bin\iotagent-lwm2m-client.js
create /75001/2
create /75002/2
set /75001/2 0 440.81
set /75002/2 1 Connected
connect localhost 5683 PruebasDuplex /rd
quit
```

# Typescript対応できなかったけど

## 参考URL
https://ics.media/entry/4682/

## 利用コマンド

```bash
npm install typescript ts-node
npm install @types/node -D

# ファイルの実行
ts-node app.ts
```

## tsconfig.jsonの追加

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "strict": true,
  }
}
```