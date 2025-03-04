import AsyncStorage from '@react-native-async-storage/async-storage';
import { JWT_TOKEN } from 'constants/storeKey';

// api 서버 도메인
//export const api_domain = "http://115.85.182.94:9915";
export const api_domain = "http://221.146.13.175:9915";
//export const api_domain = "http://121.171.14.195:9915";
//export const api_domain = 'http://118.67.134.149:9915';
//export const api_domain = 'http://www.api.limeeted.com';

// export const api_domain = 'http://59.5.92.43:8080';

// 이미지 서버 경로
//export const img_domain = 'http://www.api.limeeted.com' + '/uploads';
export const img_domain = 'http://115.85.182.94:9915' + '/uploads';
export const local_img_domain = api_domain + '/file/local';

// token 값
export const jwt_token = () => { 
  return new Promise(async (resolve, reject) => {
    try {
      const value = await AsyncStorage.getItem(JWT_TOKEN);
      resolve(value);
    } catch (error) {
      reject(new Error('Error getting item from AsyncStorage'));
    }
  });
};

// json 데이터
export const get_json_data = (key: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const value = await AsyncStorage.getItem(key);
      resolve(value);
    } catch (error) {
      reject(new Error('Error getting item from AsyncStorage'));
    }
  });
};

export default { api_domain, img_domain, local_img_domain, jwt_token, get_json_data };