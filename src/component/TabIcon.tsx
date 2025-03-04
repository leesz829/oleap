import { View, Image, StyleSheet, Text, Platform } from 'react-native';
import { findSourcePath, ICON, IMAGE } from 'utils/imageUtils';
import * as React from 'react';
import { useProfileImg } from 'hooks/useProfileImg';
import { useUserInfo } from 'hooks/useUserInfo';
import { CommaFormat, isEmptyData } from 'utils/functions';
import SpaceView from './SpaceView';
import { styles } from 'assets/styles/Styles';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';



const TabIcon = ({ name, isFocused }: { name: string; isFocused: boolean }) => {
  const memberBase = useUserInfo();

  switch (name) {

    case 'Roby': {
      const mbrProfileImgList = useProfileImg();
      const masterProfileImg = mbrProfileImgList.filter((e, i) => i == 0);

      if(masterProfileImg.length > 0) {
        return (
          <>
            <SpaceView viewStyle={_styles.navItemWrap}>
              <Image style={_styles.imgSize(isFocused)} source={findSourcePath(masterProfileImg[0].img_file_path)} />
              <SpaceView mt={5}>
                <Text style={styles.fontStyle('SB', 10, isFocused ? '#46F66F' : '#fff')}>마이홈</Text>
              </SpaceView>

              {/* {isEmptyData(memberBase?.new_board_cnt) && memberBase?.new_board_cnt > 0 && (
                <View style={_styles.newIcon} />
              )} */}
            </SpaceView>
          </>
        )
      } else {
        if (isFocused) {
          return <Image style={[_styles.imgSize(isFocused)]} source={IMAGE.logoLeapTmon} resizeMode={'cover'} />;
        } else {
          return <Image style={[_styles.imgSize(isFocused)]} source={IMAGE.logoLeapTmon} resizeMode={'cover'} />;
        }
      };
    }
    case 'Contents': {
      return (
        <>
          <SpaceView viewStyle={_styles.navItemWrap}>
            <Image style={styles.iconSquareSize(24)} source={isFocused ? ICON.navContentsOn : ICON.navContents} />
            <SpaceView mt={5}>
              <Text style={styles.fontStyle('SB', 10, isFocused ? '#46F66F' : '#fff')}>친구찾기</Text>
            </SpaceView>

            {/* <SpaceView viewStyle={_styles.bubbleContainer}>
              <LinearGradient
                colors={['#8BC1FF', '#416DFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.7, y: 0 }}
                style={_styles.bubble}
              >
                <Text style={styles.fontStyle('SB', 9, '#fff')}>새로운 친구를 만날 수 있는 컨텐츠들이 준비되어 있어요.</Text>
                <SpaceView viewStyle={_styles.triangle} />
              </LinearGradient>
            </SpaceView> */}
          </SpaceView>
        </>
      )
    }
    case 'Story': {
      return (
        <>
          <SpaceView viewStyle={_styles.navItemWrap}>
            <Image style={styles.iconSquareSize(24)} source={isFocused ? ICON.navStoryOn : ICON.navStory} />
            <SpaceView mt={5}>
              <Text style={styles.fontStyle('SB', 10, isFocused ? '#46F66F' : '#fff')}>스토리</Text>
            </SpaceView>
          </SpaceView>
        </>
      )
    }
    case 'Storage': {
      return (
        <>
          <SpaceView viewStyle={_styles.navItemWrap}>
            <Image style={styles.iconSquareSize(24)} source={isFocused ? ICON.navStorageOn : ICON.navStorage} />
            <SpaceView mt={5}>
              <Text style={styles.fontStyle('SB', 10, isFocused ? '#46F66F' : '#fff')}>보관함</Text>
            </SpaceView>
          </SpaceView>
        </>
      );
    }
    /* case 'Message': {
      return (
        <>
          <SpaceView>
            {isFocused ? <Image style={_style.iconSize} source={ICON.bellGold} /> : 
              <Image style={_style.iconSize} source={ICON.bellGray} />
            }

            {isEmptyData(memberBase?.msg_cnt) && memberBase?.msg_cnt > 0 &&
              <View style={_style.iconArea}><Text style={_style.countText}>{memberBase?.msg_cnt}</Text></View>
            }
          </SpaceView>
        </>
      );
    } */
    case 'Cashshop': {
      return (
        <>
          <SpaceView viewStyle={_styles.navItemWrap}>
            <Image style={styles.iconSquareSize(24)} source={isFocused ? ICON.navShopOn : ICON.navShop} />
            <SpaceView mt={5}>
              <Text style={styles.fontStyle('SB', 10, isFocused ? '#46F66F' : '#fff')}>스토어</Text>
            </SpaceView>
          </SpaceView>
        </>
      )
    }
    default:
      return <Image style={_styles.iconSize} source={IMAGE.logoLeapTmon} />;
  }
};

export default TabIcon;



const _styles = StyleSheet.create({
  iconSize: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  imgSize: (isOn: boolean) => {
    return {
      width: 26,
      height: 26,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: isOn ? '#46F66F' : '#707070',
      overflow: 'hidden',
    };
  },
  iconArea: {
    position: 'absolute',
    top: 12,
    right: -13,
  },
  shopIconArea: {
    position: 'absolute',
    top: -2,
    right: -21,
  },
  shopLimitArea: {
    position: 'absolute',
    top: -39,
    right: -32,
    alignItems: 'flex-end',
    opacity: 0,
    flex: 1,
  },
  shopLimitTextArea: {
    backgroundColor: '#7F67FF',
    borderRadius: 3,
    minWidth: 99,
    paddingVertical: 3,
    paddingLeft: Platform.OS == 'android' ?  0 : 5,
  },
  newIcon: {
		position: 'absolute',
		top: -3,
		right: -5,
		width: 8,
		height: 8,
		backgroundColor: '#32F9E4',
		borderRadius: 30,
	},
  storageLimitArea: {
    position: 'absolute',
    top: -38,
    left: -50,
    alignItems: 'flex-start',
    opacity: 0,
  },
  storageLimitTextArea: (width: number) => {
    return {
      backgroundColor: '#7F67FF',
      borderRadius: 3,
      overflow: 'hidden',
      width: width,
      paddingVertical: 8,
    };
  },
  storageTriangle: {
    marginTop: -1,
    marginLeft: 58,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#7F67FF',
    transform: [{ rotate: '180deg' }],
  },
  navItemWrap: {
    alignItems: 'center',
  },
  bubbleContainer: {
    position: 'absolute',
    top: -40,
    left: -28,
    width: 230,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubble: {
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderRadius: 50, // 말풍선의 둥근 모서리
    position: 'relative',
  },
  triangle: {
    position: 'absolute',
    bottom: -8, // 삼각형을 아래로 위치 조정
    left: 20,
    width: 0,
    height: 0,
    borderLeftWidth: 13,
    borderRightWidth: 13  ,
    borderTopWidth: 9,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#75A8FF', // 말풍선 배경색과 동일하게 설정
  },

});