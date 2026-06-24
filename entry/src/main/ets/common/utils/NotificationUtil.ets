// Copyright 2026 LI MingKuan
//
// 原项目：HarmonyOs-Clock-Demo
// 作者：LiMingKuan-UESTC
// 仓库地址：https://github.com/LiMingKuan-UESTC/Clustering-Matlab-Demo
// NotificationUtil.ets

import { common } from '@kit.AbilityKit';
import { notificationManager } from '@kit.NotificationKit';

/**
 * 请求打开通知权限
 */
export function requestNotificationPermission(context: common.UIAbilityContext) {
  notificationManager.requestEnableNotification(context).then(() => {
    console.info('通知权限已开启');
  }).catch((err: Error) => {
    console.error('开启通知权限失败: ' + JSON.stringify(err));
  });
}

/**
 * 发布文字通知
 * @param id 通知ID（建议唯一）
 * @param title 通知标题
 * @param text 通知内容
 */

export function publishSimpleNotification(id: number, title: string, text: string) {
  // 确保添加通知槽
  notificationManager.addSlot(notificationManager.SlotType.SOCIAL_COMMUNICATION)
    .then(() => {
      console.info('addSlot success');

      // 发送通知
      let notificationRequest: notificationManager.NotificationRequest = {
        id: id,
        notificationSlotType: notificationManager.SlotType.SOCIAL_COMMUNICATION, // 高优先级类型
        content: {
          notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
          normal: {
            title: title,
            text: text
          }
        }
      };

      notificationManager.publish(notificationRequest).then(() => {
        console.info('通知发布成功');
      }).catch((err: Error) => {
        console.error('通知发布失败: ' + JSON.stringify(err));
      });
    })

    // 补上横幅通知
    .catch((err: Error) => {
      console.error('addSlot fail: ' + JSON.stringify(err));
    });
}
