import { logDebug } from './log';
import { RequestUtil } from './request';
export async function checkVersion(): Promise<string> {
  return new Promise(async (resolve, reject) => {
    const MirrorList =
      [
        'https://jsd.cdn.zzko.cn/gh/NapNeko/NapCatQQ@main/package.json',
        'https://fastly.jsdelivr.net/gh/NapNeko/NapCatQQ@main/package.json',
        'https://gcore.jsdelivr.net/gh/NapNeko/NapCatQQ@main/package.json',
        'https://cdn.jsdelivr.net/gh/NapNeko/NapCatQQ@main/package.json'
      ];
    let version = undefined;
    for (const url of MirrorList) {
      try {
        version = (await RequestUtil.HttpGetJson<{ version: string }>(url)).version;
      } catch (e) {
        logDebug('检测更新异常',e);
      }
      if (version) {
        resolve(version);
      }
    }
    reject('get verison error!');
  });
}
