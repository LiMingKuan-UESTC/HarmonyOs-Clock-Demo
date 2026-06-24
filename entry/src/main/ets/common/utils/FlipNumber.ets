// Copyright 2026 LI MingKuan
//
// 原项目：HarmonyOs-Clock-Demo
// 作者：LiMingKuan-UESTC
// 仓库地址：https://github.com/LiMingKuan-UESTC/Clustering-Matlab-Demo
// FlipNumber.ets

@Component
export struct FlipNumber {
  @Prop value: string
  @State displayValue: string = ''

  aboutToAppear() {
    this.displayValue = this.value
  }

  aboutToUpdate() {
    this.displayValue = this.value
  }

  build() {
    Text(this.displayValue)
      .fontSize(56)
      .fontWeight(FontWeight.Bold)
  }
}
