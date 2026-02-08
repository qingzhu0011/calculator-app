# 计算器 APP

一个美观、现代的计算器应用，支持所有安卓设备。

## 功能特点

- ✅ 美观的深色主题 UI
- ✅ 响应式设计，适配所有屏幕尺寸
- ✅ 基本运算：加、减、乘、除
- ✅ 支持小数运算
- ✅ 正负数切换
- ✅ 清除和删除功能
- ✅ 流畅的触摸反馈
- ✅ 圆形按钮设计
- ✅ 橙色运算符高亮

## 技术栈

- React Native
- Expo
- JavaScript

## 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 在安卓设备上运行
npm run android
```

## 在线打包 APK

### 方法1：使用 Expo EAS Build

```bash
# 安装 EAS CLI
npm install -g eas-cli

# 登录 Expo 账号
eas login

# 配置项目
eas build:configure

# 构建 APK
eas build --platform android --profile preview
```

### 方法2：使用 Expo Classic Build

```bash
# 登录
expo login

# 构建 APK
expo build:android -t apk
```

构建完成后，会得到一个下载链接，直接下载 APK 安装即可。

## UI 设计

- **背景色**：深灰色 (#1a1a1a)
- **数字按钮**：灰色 (#333333)
- **功能按钮**：中灰色 (#505050)
- **运算符按钮**：橙色 (#ff9500)
- **显示屏**：白色文字，70px 大字体
- **按钮**：圆形设计，带阴影效果

## 屏幕适配

- 使用 `Dimensions.get('window')` 获取屏幕宽度
- 按钮大小根据屏幕宽度自动计算
- 文字大小自适应 (`adjustsFontSizeToFit`)
- 支持竖屏模式

## 版本

- 当前版本：1.0.0
- 最后更新：2026-02-08

## 作者

Created with ❤️ by AI Assistant
