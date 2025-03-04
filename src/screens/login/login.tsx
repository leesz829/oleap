import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation, useIsFocused, CommonActions } from '@react-navigation/native';
import { ColorType } from '@types';
//import { signin, get_app_version, get_member_chk } from 'api/models';
import { layoutStyle, modalStyle, styles, commonStyle } from 'assets/styles/Styles';
import SpaceView from 'component/SpaceView';
import { SUCCESS, LOGIN_REFUSE, LOGIN_EMPTY, LOGIN_WAIT, LOGIN_EXIT, SANCTIONS, PASSWORD_ERROR, LOGIN_BLOCK, LOGIN_SLEEP } from 'constants/reusltcode';
import { ROUTES } from 'constants/routes';
import storeKey, { JWT_TOKEN } from 'constants/storeKey';
import { usePopup } from 'Context';
import { useUserInfo } from 'hooks/useUserInfo';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, TouchableOpacity, Text, Platform, PermissionsAndroid, StyleSheet, TextInput, Keyboard, ImageBackground, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setPrincipal } from 'redux/reducers/authReducer';
import * as mbrReducer from 'redux/reducers/mbrReducer';
import { ICON, IMAGE } from 'utils/imageUtils';
import Geolocation from 'react-native-geolocation-service';
import RNExitApp from 'react-native-exit-app';
import { isEmptyData } from 'utils/functions';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';




GoogleSignin.configure({
  webClientId:
    '535563482959-01e4bap45pcsvvafnis6sqndk1vokr0g.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId:
    '535563482959-vq2qcp0jb3o67soviq7sj0lihvh9skj6.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

const { width, height } = Dimensions.get('window');

export const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { show } = usePopup();
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const me = useUserInfo();
  const isFocus = useIsFocused();

  const [latitude, setLatitude] = React.useState(); // 위도
  const [longitude, setLongitude] = React.useState(); // 경도

  const [granted, setGranted] = React.useState('');

  const [activate, setActivate] = useState<boolean>(false); // 마케팅 수신동의

  // ########################################################################## 초기 실행
  useEffect(() => {
    if(isFocus) {
      setActivate(false);
      //requestLocationPermission();
      console.log('1111111');
    };
  }, [isFocus]);

  return (
    <>
      {/* <View style={{backgroundColor: 'red', flex: 1}}>
        <Text>asdklasmdsa</Text>
      </View> */}

      <KeyboardAwareScrollView extraScrollHeight={100} showsVerticalScrollIndicator={false} scrollEnabled={false}>

        <SpaceView viewStyle={_styles.wrap}>
            <ImageBackground
              source={ICON.join_bg}
              style={{height: height}}
            >
              <ScrollView showsVerticalScrollIndicator={false}>
                <SpaceView>
                  <SpaceView>
                    <SpaceView mt={65}>
                      <SpaceView>
                        <Text style={[styles.fontStyle('H', 22, '#fff'), {textAlign: 'center'}]}>LEAP</Text>
                      </SpaceView>
                      <SpaceView mt={45}>
                        <Text style={[styles.fontStyle('B', 28, '#fff'), {textAlign: 'center'}]}>오늘 하루,{'\n'}편안한 리프를 취하세요.</Text>
                      </SpaceView>
                    </SpaceView>

                    <SpaceView>
                      <SpaceView mt={80} pl={25} pr={25}>
                        <SpaceView>
                          <Text style={styles.fontStyle('EB', 15, '#fff')}>아이디(이메일)</Text>
                          <SpaceView>
                            <TextInput
                              value={id}
                              onChangeText={(text) => setId(text)}
                              autoCapitalize={'none'}
                              style={_styles.textInputStyle}
                              maxLength={50}
                              hitSlop={commonStyle.hipSlop25}
                              returnKeyType="done"
                            />
                          </SpaceView>
                        </SpaceView>
                        <SpaceView mt={25}>
                          <Text style={styles.fontStyle('EB', 15, '#fff')}>비밀번호</Text>
                          <SpaceView>
                            <TextInput
                              value={password}
                              onChangeText={(text) => setPassword(text)}
                              autoCapitalize={'none'}
                              style={_styles.textInputStyle}
                              maxLength={30}
                              secureTextEntry={true}
                              returnKeyType="done"
                            />
                          </SpaceView>
                        </SpaceView>
                      </SpaceView>

                      <SpaceView mt={40}>
                        <SpaceView viewStyle={layoutStyle.alignCenter}>
                          <TouchableOpacity
                            style={_styles.loginBtn}
                            onPress={() => {
                              if (id == '') {
                                return show({ content: '아이디를 입력해 주세요.' });
                              }
                              if (password == '') {
                                return show({ content: '비밀번호를 입력해 주세요.' });
                              }
                              
                              loginProc(false);
                              //dispatch(loginReduce(id, password));
                            }}>
                            <Text style={styles.fontStyle('B', 18, '#fff')}>로그인</Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style={_styles.joinBtn}
                            onPress={() => { joinProc(); }}>
                            <Text style={styles.fontStyle('B', 18, '#fff')}>회원가입</Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style={_styles.joinBtn}
                            onPress={() => {
                              navigation.navigate('SearchIdAndPwd');
                            }}>
                            <Text style={styles.fontStyle('B', 18, '#fff')}>아이디/비밀번호 찾기</Text>
                          </TouchableOpacity>
                        </SpaceView>
                      </SpaceView>

                      <SpaceView mt={20}>
                        <Text style={[styles.fontStyle('SB', 10, '#CBCBCB'), {textAlign: 'center'}]}>
                          리프(LEAP)는 회원가입 절차에 직업 또는 학력 등의  인증이 필요합니다.{'\n'}
                          이는 피싱, 폭력으로부터 안전한 SNS 환경을 제공하기 위한 목적으로 활용됩니다.{'\n'}
                          제공받은 소중한 개인정보는 인증 과정동안 암호화 처리되어 관리되며 인증 심사{'\n'}
                          종료 후 인증 심사 이력만 남고 개인 정보는 모두 삭제됩니다.</Text>
                      </SpaceView>

                    </SpaceView>
                  </SpaceView>
                </SpaceView>
              </ScrollView>
            </ImageBackground>
        </SpaceView>

      </KeyboardAwareScrollView>
    </>
  );
};



const _styles = StyleSheet.create({
  wrap: {
    minHeight: height,
    //flexGrow: 1,
  },
  loginBtn: {
    borderRadius: 25,
    backgroundColor: '#1F5AFB',
    alignItems: 'center',
    width: 270,
    paddingVertical: 12,
  },
  joinBtn: {
    borderRadius: 25,
    backgroundColor: '#000000',
    alignItems: 'center',
    width: 270,
    paddingVertical: 12,
    marginTop: 10,
  },
  textInputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#A8A8A8',
    padding: 0,
    color: '#F3E270',
    fontFamily: 'Pretendard-Bold',
    fontSize: 14,
    paddingBottom: 5,
    paddingTop: 5,
  },


});