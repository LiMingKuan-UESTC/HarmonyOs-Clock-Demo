<div align="center">
  <h1>🕒 饭点提醒 (HarmonyOS Clock-Demo)</h1>
  <p>一个基于 HarmonyOS + ArkTS 的轻量化翻页时钟与饭点提醒应用</p>

  <p>
    <a href="https://github.com/LiMingKuan-UESTC/HarmonyOs-Clock-Demo/stargazers"><img src="https://img.shields.io/github/stars/LiMingKuan-UESTC/HarmonyOs-Clock-Demo?style=flat-square" alt="Stars"></a>
    <img src="https://img.shields.io/badge/Platform-HarmonyOS-blue.svg?style=flat-square" alt="Platform">
    <img src="https://img.shields.io/badge/Language-ArkTS-brightgreen.svg?style=flat-square" alt="Language">
    <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square" alt="License">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </p>
</div>

<br/>

## 📖 项目简介

本项目旨在为大学生提供一个轻量化、贴心的饭点提醒工具。<br>

大学生因为课程、实验等原因常常错过饭点，而按时就餐对于健康至关重要。本项目旨在提供一个轻量化、贴心的提醒工具。应用首屏提供高颜值的**翻页时钟**展示当前时间，并允许用户一键设置早餐、午餐、晚餐的系统级通知提醒。

## ✨ 核心功能

- ⏱️ **翻页时钟**：实时动态展示当前时间，提供优秀的视觉交互体验。
- 🔔 **三餐提醒**：预置早/午/晚三个饭点，支持点击时间区域自定义修改提醒时间。
- ⚙️ **系统通知接入**：通过系统底层的通知权限申请与本地通知分发，确保提醒准时到达。
- 🎛️ **状态管理**：采用卡片式布局与状态开关控制，直观易用。

### ✅ 首页

- 实时展示当前时间（翻页样式）
- 提供按钮跳转到提醒设置页面

### ✅ 提醒设置页

- 预置三个饭点提醒项：早餐 / 午餐 / 晚餐
- 点击时间区域可对提醒时间进行修改
- 右侧显示开关，可启用 / 关闭提醒
- 启用后，在设定时间触发系统通知提醒（已申请权限并发布通知）


## 📷 效果展示
<br>
<div align="center">
  <img src="pngs/show_check.png" height="200" style="object-fit: cover;" />
  <img src="pngs/show_index.png" height="200" style="object-fit: cover;" />
  <img src="pngs/show_alarmset.png" height="200" style="object-fit: cover;" />
  <img src="pngs/show_alarm.png" height="200" style="object-fit: cover;" />
  <img src="pngs/show_timepicker.png" height="200" style="object-fit: cover;" />
</div>
<br>
- 注：上方图片依次展示了 通知权限申请、首页时钟、提醒设置页、触发提醒、时间修改页 的实际运行结果。

## 🛠 运行与开发

1. 克隆仓库到本地

   ```bash
   git clone https://github.com/LiMingKuan-UESTC/HarmonyOs-Clock-Demo.git
   ```

2. 在 **DevEco Studio** 中打开项目

   * 使用 HarmonyOS SDK（建议 API Level 对应最新版本）
   * 等待项目索引 / 依赖构建完成

3. 连接设备或打开模拟器

   * 运行应用即可体验

## 📦 技术栈

| 技术            | 说明                |
| ------------- | ----------------- |
| HarmonyOS     | 应用运行平台            |
| ArkTS         | ArkUI 声明式 UI 开发语言 |
| DevEco Studio | 官方 IDE，用于开发与调试    |
| 系统通知          | 用于闹钟提醒通知授权与发布     |

## 💡 设计思路

* **首页时钟展示**：通过状态变量与定时器实时更新 UI，提高可视交互感
* **提醒逻辑**：使用通知权限申请 + 本地通知，确保提醒到达即弹出系统提醒
* **交互设计**：提醒设置页采用卡片布局，结合开关控制，提升交互体验

## 📂 核心目录结构

```text
HarmonyOs-Clock-Demo/
├── entry/src/main/ets/
│   ├── entryability/         # 应用入口与生命周期管理
│   ├── pages/                # UI 页面 (首页时钟、设置页等)
│   ├── components/           # 自定义 UI 组件 (翻页时钟组件等)
│   └── utils/                # 工具类 (系统通知封装、时间处理等)
├── AppScope/                 # 全局配置与资源
└── build-profile.json5       # 构建配置
```

## 📅 未来规划 to-do list

我们计划在未来的版本中逐步完善以下功能：

- [ ] 💤 **贪睡模式**：支持延迟提醒功能。
- [ ] ➕ **自定义提醒项**：不再局限于固定三餐，支持自由添加。
- [ ] 🕒 **循环周期设置**：支持每天/工作日/法定节假日等灵活排期。
- [ ] 💾 **数据持久化**：接入 DataStore/Preferences，保证重启后数据不丢失。
- [ ] 🎨 **深色模式适配**：支持系统级的 Dark Mode。

## 📜 免责声明与使用说明

本项目由 **LiMingKuan-UESTC** 制作，仅供交流、学习和展示使用。

作者不保证本项目的可靠性、稳定性、完整性或适用性。因使用、修改、分发或参考本项目所产生的任何问题、损失或风险，均由使用者自行承担。

本项目基于 Apache License 2.0 开源。
🤝 欢迎 Star ⭐ 和 Fork 🧑‍💻！
