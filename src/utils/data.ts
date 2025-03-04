import * as properties from 'utils/properties';
import { findSourcePath } from 'utils/imageUtils';

// 보관함 전달 데이터 구성
export const getStorageListData = (
   list: [
      {
         match_seq: any;
         match_status: any;
         req_member_seq: any;
         res_member_seq: any;
         img_file_path: any;
         int_after_day: any;
         special_interest_yn: any;
         special_level: any;
         req_profile_open_yn: any;
         res_profile_open_yn: any;
         nickname: any;
         age: any;
         height: any;
         job_name: any;
         member_status: any;
         profile_score: any;
         auth_acct_cnt: any;
         match_type: any;
         req_profile_score: any;
         res_check_yn: any;
			req_success_check_yn: any;
         keep_end_day: any;
         message: any;
         social_grade: any;
      },
   ],
) => {
   let arrayList = new Array();
   let dataList = new Array();
   let hNum = 0;
   list.map(
      ({
         match_seq,
         match_status,
         req_member_seq,
         res_member_seq,
         img_file_path,
         int_after_day,
         special_interest_yn,
         special_level,
         req_profile_open_yn,
         res_profile_open_yn,
         nickname,
         age,
         height,
         job_name,
         member_status,
         profile_score,
         auth_acct_cnt,
         match_type,
         req_profile_score,
         res_check_yn,
			req_success_check_yn,
         keep_end_day,
         message,
         social_grade,
      }: {
         match_seq: any;
         match_status: any;
         req_member_seq: any;
         res_member_seq: any;
         img_file_path: any;
         int_after_day: any;
         special_interest_yn: any;
         special_level: any;
         req_profile_open_yn: any;
         res_profile_open_yn: any;
         nickname: any;
         age: any;
         height: any;
         job_name: any;
         member_status: any;
         profile_score: any;
         auth_acct_cnt: any;
         match_type: any;
         req_profile_score: any;
         res_check_yn: any;
			req_success_check_yn: any;
         keep_end_day: any;
         message: any;
         social_grade: any;
      }) => {
         const img_path = findSourcePath(img_file_path);

         const dataJson = { 
            match_seq: '', 
            match_status: '',
            req_member_seq: '', 
            res_member_seq: '', 
            img_path: '', 
            dday: 0, 
            special_interest_yn: '', 
            special_level: '',
            req_profile_open_yn: '', 
            res_profile_open_yn: '',
            nickname: '',
            age: '',
            height: '',
            job_name: '',
            member_status: '',
            profile_score: '',
            auth_acct_cnt: '',
            match_type: '',
            req_profile_score: '',
            res_check_yn: '',
			   req_success_check_yn: '',
            keep_end_day: 0,
            message: '',
            social_grade: '',
         };
         let dday_mod = 7 - Number(int_after_day);

         if(match_status == 'ZZIM') {
            dday_mod = 30 - Number(int_after_day);
         }

         dataJson.match_seq = match_seq;
         dataJson.match_status = match_status;
         dataJson.req_member_seq = req_member_seq;
         dataJson.res_member_seq = res_member_seq;
         dataJson.img_path = img_path;
         dataJson.dday = dday_mod;
         dataJson.special_interest_yn = special_interest_yn;
         dataJson.special_level = special_level;
         dataJson.req_profile_open_yn = req_profile_open_yn;
         dataJson.res_profile_open_yn = res_profile_open_yn;
         dataJson.nickname = nickname;
         dataJson.age = age;
         dataJson.height = height;
         dataJson.job_name = job_name;
         dataJson.member_status = member_status;
         dataJson.profile_score = profile_score;
         dataJson.auth_acct_cnt = auth_acct_cnt;
         dataJson.match_type = match_type;
         dataJson.req_profile_score = req_profile_score;
         dataJson.res_check_yn = res_check_yn;
         dataJson.req_success_check_yn = req_success_check_yn;
         dataJson.keep_end_day = keep_end_day;
         dataJson.message = message;
         dataJson.social_grade = social_grade;

         dataList.push(dataJson);
         hNum++;
      },
   );

   return dataList;
};