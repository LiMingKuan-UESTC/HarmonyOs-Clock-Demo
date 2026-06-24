// Copyright 2026 LI MingKuan
//
// 原项目：HarmonyOs-Clock-Demo
// 作者：LiMingKuan-UESTC
// 仓库地址：https://github.com/LiMingKuan-UESTC/Clustering-Matlab-Demo
// ReminderService.ets

import { publishSimpleNotification } from './NotificationUtil';  // 引入发布通知的方法

/**
 * 定时检查并发布通知
 * @param morningOn 是否开启早晨提醒
 * @param morningHour 早晨提醒的小时
 * @param morningMinute 早晨提醒的分钟
 * @param noonOn 是否开启中午提醒
 * @param noonHour 中午提醒的小时
 * @param noonMinute 中午提醒的分钟
 * @param eveningOn 是否开启晚上提醒
 * @param eveningHour 晚上提醒的小时
 * @param eveningMinute 晚上提醒的分钟
 */
export function startReminderCheck(
  morningOn: boolean, morningHour: number, morningMinute: number,
  noonOn: boolean, noonHour: number, noonMinute: number,
  eveningOn: boolean, eveningHour: number, eveningMinute: number
) {
  setInterval(() => {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();

    if (morningOn && hour === morningHour && minute === morningMinute) {
      publishSimpleNotification(Date.now(), '早晨提醒', '该吃早餐了!');
    }

    if (noonOn && hour === noonHour && minute === noonMinute) {
      publishSimpleNotification(Date.now(), '中午提醒', '该吃午餐了!');
    }

    if (eveningOn && hour === eveningHour && minute === eveningMinute) {
      publishSimpleNotification(Date.now(), '晚上提醒', '该吃晚餐了!');
    }
  }, 60000);  // 每分钟检查一次
}
