# 计算器 APP 打包指南

## 方法1：使用 EAS Build（推荐）

### 步骤1：注册 Expo 账号
访问 https://expo.dev 注册免费账号

### 步骤2：安装 EAS CLI
```bash
npm install -g eas-cli
```

### 步骤3：登录
```bash
eas login
```

### 步骤4：配置项目
```bash
cd calculator-app
eas build:configure
```

### 步骤5：构建 APK
```bash
eas build --platform android --profile preview
```

### 步骤6：下载 APK
构建完成后（约10-15分钟），会得到一个下载链接，直接下载 APK 安装即可。

或者访问 https://expo.dev 在网站上下载。

---

## 方法2：使用 GitHub Actions 自动构建

### 步骤1：获取 Expo Token
```bash
# 登录 Expo
eas login

# 生成 Token
eas whoami
# 访问 https://expo.dev/accounts/[username]/settings/access-tokens
# 创建新的 Personal Access Token
```

### 步骤2：添加 GitHub Secret
1. 访问 https://github.com/qingzhu0011/calculator-app/settings/secrets/actions
2. 点击 "New repository secret"
3. Name: `EXPO_TOKEN`
4. Value: 粘贴你的 Expo Token
5. 点击 "Add secret"

### 步骤3：触发构建
推送代码到 main 分支，GitHub Actions 会自动开始构建。

或者手动触发：
1. 访问 https://github.com/qingzhu0011/calculator-app/actions
2. 选择 "Build Android APK"
3. 点击 "Run workflow"

### 步骤4：下载 APK
构建完成后，访问 https://expo.dev 下载 APK。

---

## 方法3：本地构建（需要 Android Studio）

### 前提条件
- 安装 Android Studio
- 安装 Android SDK
- 配置 ANDROID_HOME 环境变量

### 步骤
```bash
# 1. 安装依赖
npm install

# 2. 生成 Android 项目
npx expo prebuild

# 3. 构建 APK
cd android
./gradlew assembleRelease

# 4. APK 位置
# android/app/build/outputs/apk/release/app-release.apk
```

---

## 免费额度

### Expo EAS Build
- 免费账号：每月 30 次构建
- 构建时间：10-15 分钟/次
- 存储：无限期

### GitHub Actions
- 公开仓库：完全免费
- 私有仓库：每月 2000 分钟

---

## 常见问题

### Q: 构建失败怎么办？
A: 检查 Expo 账号是否登录，Token 是否正确配置。

### Q: 如何查看构建进度？
A: 访问 https://expo.dev/accounts/[username]/projects/calculator-app/builds

### Q: APK 在哪里下载？
A: 构建完成后，在 Expo 网站的 Builds 页面点击下载按钮。

### Q: 可以直接安装吗？
A: 可以！下载 APK 后直接传到手机安装即可。

---

## 技术支持

如有问题，请访问：
- Expo 文档: https://docs.expo.dev
- GitHub Issues: https://github.com/qingzhu0011/calculator-app/issues
