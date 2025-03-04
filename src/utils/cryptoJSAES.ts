import DrbtOssKeyCrypto from './crypto-js.js';
//  CryptoJS AES 解密
export const CryptoJSAES = (data: any) => {
  if (!data) {
    return {};
  }
  const decrypted = DrbtOssKeyCrypto.DrbtDecryptOssKey(data.toString());
  // 将解密后的结果转换为字符串
  const decryptedText = decrypted.toString(DrbtOssKeyCrypto.enc.Utf8);
  // // 设置解密后的文本状态
  return decryptedText && typeof decryptedText === 'string' ? JSON.parse(decryptedText) : {};
};

export const WindowDrbtDecryptOssKey = () => DrbtOssKeyCrypto.DrbtDecryptOssKey;
