import { StyleSheet, Dimensions } from 'react-native';
import { Color } from './Color';
import { isEmptyData } from 'utils/functions';

const { width, height } = Dimensions.get('window');

export const commonStyle = StyleSheet.create({
  mt5: { marginTop: 5 },
  mt10: { marginTop: 10 },
  mt15: { marginTop: 15 },
  mt20: { marginTop: 20 },
  mt25: { marginTop: 25 },
  mt30: { marginTop: 30 },
  mt50: { marginTop: 50 },
  mt70: { marginTop: 70 },
  mb5: { marginBottom: 5 },
  mb10: { marginBottom: 10 },
  mb15: { marginBottom: 15 },
  mb20: { marginBottom: 20 },
  mb25: { marginBottom: 25 },
  mb30: { marginBottom: 30 },
  mb40: { marginBottom: 40 },
  mb50: { marginBottom: 50 },
  mb60: { marginBottom: 60 },
  mb70: { marginBottom: 70 },
  ml5: { marginLeft: 5 },
  ml10: { marginLeft: 10 },
  ml15: { marginLeft: 15 },
  ml20: { marginLeft: 20 },
  ml25: { marginLeft: 25 },
  ml30: { marginLeft: 30 },
  mr5: { marginRight: 5 },
  mr8: { marginRight: 8 },
  mr10: { marginRight: 10 },
  mr15: { marginRight: 15 },
  mr20: { marginRight: 20 },
  mr25: { marginRight: 25 },
  mr30: { marginRight: 30 },
  fontSize10: { fontSize: 10 },
  fontSize11: { fontSize: 11 },
  fontSize12: { fontSize: 12 },
  fontSize13: { fontSize: 13 },
  fontSize14: { fontSize: 14 },
  fontSize15: { fontSize: 15 },
  fontSize16: { fontSize: 16 },
  fontSize17: { fontSize: 17 },
  fontSize18: { fontSize: 18 },
  fontSize20: { fontSize: 20 },
  fontSize22: { fontSize: 22 },
  fontSize25: { fontSize: 25 },
  textCenter: { textAlign: 'center' },
  textLeft: { textAlign: 'left' },
  textRight: { textAlign: 'right' },
  width100: { width: '100%' },
  lineHeight23: { lineHeight: 23 },
  paddingHorizontal5: {paddingHorizontal : 5},
  paddingHorizontal10: {paddingHorizontal : 10},
  paddingHorizontal15: {paddingHorizontal : 15},
  paddingHorizontal20: {paddingHorizontal : 20},
  paddingHorizontal25: {paddingHorizontal : 25},
  paddingHorizontal30: {paddingHorizontal : 30},
  paddingHorizontal35: {paddingHorizontal : 35},
  paddingHorizontal40: {paddingHorizontal : 40},
  paddingHorizontal50: {paddingHorizontal : 50},
  paddingHorizontal60: {paddingHorizontal : 60},
  paddingHorizontal70: {paddingHorizontal : 70},
  hipSlop5: {top: 5, bottom: 5, left: 5, right: 5},
  hipSlop10: {top: 10, bottom: 10, left: 10, right: 10},
  hipSlop15: {top: 15, bottom: 15, left: 15, right: 15},
  hipSlop20: {top: 20, bottom: 20, left: 20, right: 20},
  hipSlop25: {top: 25, bottom: 25, left: 25, right: 25},
  hipSlop30: {top: 30, bottom: 30, left: 30, right: 30},
});

export const styles = StyleSheet.create({
  bgColorGray: {
    backgroundColor: Color.black2222,
  },

  dim: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  openCloseBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  logo: { width: 141, height: 26, marginBottom: 6 },
  logoMark: { width: 166, height: 37 },
  logoRenew: { width: 200, height: 180, marginBottom: 228 },
  signImg: { width: 66, height: 66 },
  tmpImg: { width: 250, height: 230, borderRadius: 20 },
  rotate90: { transform: [{ rotate: '90deg' }] },
  rotateN90: { transform: [{ rotate: '-90deg' }] },
  rotate180: { transform: [{ rotate: '180deg' }] },
  favoriteBox: {},
  posTopRight: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
  },
  posBottomLeft: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    zIndex: 1,
  },
  favoriteImg: {
    width: '100%',
    height: 156,
    borderRadius: 16,
  },
  whiteBack: { backgroundColor: 'white' },
  hasFloatingBtnContainer: { paddingBottom: 80, backgroundColor: 'white' },
  bottomBtnContainer: {
    width: width - 32,
    position: 'absolute',
    left: 16,
    bottom: 16,
  },
  scrollContainer: {
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'white',
    flexGrow: 1,
  },
  scrollContainerAll: {
    paddingTop: 24,
    backgroundColor: 'white',
    flexGrow: 1,
  },
  container: {
    paddingTop: 24,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 24,
  },
  iconSize: {
    width: 8.4,
    height: 15.3,
    resizeMode: 'contain',
  },
  iconSize16: {
    width: 16,
    height: 16,
  },
  iconSize18: {
    width: 18,
    height: 18,
  },
  iconSize20: {
    width: 20,
    height: 20,
  },
  iconSize22: {
    width: 22,
    height: 22,
  },
  iconSize24: {
    width: 24,
    height: 24,
  },
  iconSize32: {
    width: 32,
    height: 32,
  },
  iconSize40: {
    width: 40,
    height: 40,
  },
  iconSize48: {
    width: 48,
    height: 48,
  },
  iconSize60: {
    width: 60,
    height: 60,
  },
  iconSize65: {
    width: 65,
    height: 65,
  },
  iconSize70: {
    width: 70,
    height: 70,
  },
  iconSize80: {
    width: 80,
    height: 80,
  },
  iconSquareSize: (size: number) => {
    return {
      width: size,
      height: size,
    };
  },
  iconNoSquareSize: (_w: number, _h: number) => {
    return {
      width: _w,
      height: _h,
    };
  },
  arrowIcon: {
    width: 20,
    height: 36,
    resizeMode: 'contain',
    marginTop: 2,
    marginLeft: 4,
  },
  smailIon: {
    width: 40,
    height: 25,
  },
  halfContainer: {
    flexDirection: 'row',
    overflow: 'visible',
    zIndex: 3,
  },
  halfItemLeft4: { flex: 1, marginRight: 4, overflow: 'visible', zIndex: 1 },
  halfItemRight4: { flex: 1, marginLeft: 4, overflow: 'visible', zIndex: 2 },
  halfItemLeft: {
    //flex: 1,
    marginRight: 5,
    overflow: 'visible',
    zIndex: 1,
    width: (width - 40) / 2,
  },
  halfItemRight: {
    flex: 1,
    marginLeft: 8,
    overflow: 'visible',
    zIndex: 2,
  },
  badgeBox: {
    width: (width - 48) / 2,
    height: (width - 48) / 2,
    padding: 16,
    backgroundColor: Color.grayF8F8,
    borderRadius: 16,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 48,
    alignItems: 'center',
  },
  dot: {
    width: 2,
    height: 2,
    borderRadius: 20,
    backgroundColor: Color.gray8888,
    marginRight: 4,
    marginTop: 12,
  },
  dotTextContainer: {
    flexDirection: 'row',
  },
  boxPlusIcon: {
    width: (width - 100) / 10,
    height: (width - 100) / 10,
  },
  tempBoxBase: {
    width: (width - 160) / 2,
    height: (width - 160) / 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempBoxAuth: {
    width: (width - 160) / 2,
    height: (width - 160) / 2,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#C7C7C7',
    borderStyle: 'dotted',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempBoxMiddle: {
    width: (width - 50) / 2,
    height: (width - 50) / 2,
    backgroundColor: Color.grayF8F8,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempBoxSmall: {
    width: (width - 80) / 4,
    height: (width - 72) / 4,
    backgroundColor: Color.grayF8F8,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  interestBox: {
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    paddingHorizontal: 15
  },
  boxTextActive: {
    color: Color.primary,
  },
  boxActive: {
    borderWidth: 1,
    borderColor: Color.blue02,
    backgroundColor: '#FFF',
  },
  statusBtn: {
    borderRadius: 12,
    backgroundColor: Color.purple,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
  },
  profileBox: {
    width: (width - 50) / 3,
    height: (width - 50) / 3,
    backgroundColor: Color.grayEEEE,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkDisabled: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 16,

    /* position: 'absolute',
    width: (width - 80) / 3,
    height: (width - 50) / 3,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end', */
  },
  disabled: {
    position: 'absolute',
    width: (width - 43) / 3,
    height: (width - 43) / 3,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  imageDimText: {
    width: '100%',
    backgroundColor: '#000',
    textAlign: 'center',
    paddingVertical: 1,
  },
  interviewContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    backgroundColor: Color.paleBlue,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  interviewLeftTextContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    borderTopLeftRadius: 0,
    maxWidth: 200,
  },
  interviewRightTextContainer: {
    padding: 16,
    backgroundColor: Color.primary,
    borderRadius: 16,
    borderTopRightRadius: 0,
    maxWidth: 300,
  },
  profileImg: {
    width: 130,
    height: 130,
    borderRadius: 80,
  },
  profileTmpImg: {
    width: 160,
    height: 160,
    borderRadius: 15,
  },
  profilePenContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  purpleContainer: {
    backgroundColor: Color.purple,
    padding: 16,
    borderRadius: 16,
  },
  levelContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: Color.grayF8F8,
    borderRadius: 12,
  },
  profileContainer: {
    backgroundColor: Color.grayF8F8,
    borderRadius: 16,
    padding: 24,
  },
  circleBox: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Color.grayEEEE,
  },
  circleBoxImg: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  whiteCircleBox30: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 8,
    width: 50,
    height: 50,
  },
  lineHeight16: {
    lineHeight: 16,
  },
  questionContainer: {
    backgroundColor: 'white',
    paddingTop: 16,
    paddingBottom: 5,
    paddingHorizontal: 30,
  },
  questionItemTextContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: -1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
    height: 52,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  questionItemTextContainerActive: {
    flex: 1,
    backgroundColor: 'black',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: -1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
    height: 52,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },

  questionIconContainer: {
    height: 52,
    justifyContent: 'center',
    width: 50,
    alignItems: 'flex-end',
  },
  searchInputContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.grayEEEE,
    paddingLeft: 16,
    paddingRight: 50,
    height: 52,
    justifyContent: 'center',
  },
  searchInputIconContainer: {
    position: 'absolute',
    right: 16,
  },
  searchDeleteBtnContainer: {
    position: 'absolute',
    right: 50,
  },
  textContainer: {
    padding: 24,
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: Color.grayF8F8,
  },
  fontStyle: (type:string, size:number, color:string) => {
    let f_type = 'SUITE-Regular';

    if(type == 'L') {
      f_type = 'SUITE-Light';
    } else if(type == 'M') {
      f_type = 'SUITE-Medium';
    } else if(type == 'R') {
      f_type = 'SUITE-Regular';
    } else if(type == 'B') {
      f_type = 'SUITE-Bold';
    } else if(type == 'SB') {
      f_type = 'SUITE-SemiBold';
    } else if(type == 'EB') {
      f_type = 'SUITE-ExtraBold';
    } else if(type == 'H') {
      f_type = 'SUITE-Heavy';
    }

    return {
      fontFamily: f_type,
      fontSize: isEmptyData(size) ? size : 14,
      color: isEmptyData(color) ? color : '#000',
    };
  },

});

export const layoutStyle = StyleSheet.create({
  flex1: { flex: 1 },
  row: { flexDirection: 'row' },
  alignCenter: { alignItems: 'center' },
  alignStart: { alignItems: 'flex-start' },
  alignEnd: { alignItems: 'flex-end' },
  justifyCenter: { justifyContent: 'center' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyStart: { justifyContent: 'flex-start' },
  justifyEnd: { justifyContent: 'flex-end' },
  selfEnd: { alignSelf: 'flex-end' },
  selfStart: { alignSelf: 'flex-start' },
  wrap: { flexWrap: 'wrap' },
  noWrap: { flexWrap: 'nowrap' },
  columCenter: { alignItems: 'center', justifyContent: 'center' },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rowEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textCenter: { textAlign: 'center' },
  textLeft: { textAlign: 'left' },
  textRight: { textAlign: 'right' },
  lineFontGray: { textDecorationLine: 'underline' },
  mb10: { marginBottom: 10 },
  mb20: { marginBottom: 20 },
});

export const modalStyle = StyleSheet.create({
  modalHandleStyle: {
    display: 'none',
  },
  modalContainer: {
    paddingTop: 30,
    borderTopRadius: 40,
  },
  modalHeaderContainer: {
    //height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  modalBody: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    zIndex: 10,
  },
  modalBackground: {
    height,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalStyle1: {
    width: width - 62,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 0,
  },
  modalStyle2: {
    width: width - 62,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 0,
    overflow: 'hidden',
  },
  modalHeader: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    //borderColor: '#EDEDED',
    borderColor: '#445561',
  },
  modalBtnContainer: {
    width: width - 62,
    //borderTopWidth: 1,
    //borderTopColor: Color.grayEEEE,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalBtnAuctContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 125,
  },
  modalBtn: {
    flex: 2,
    alignItems: 'center',
    paddingVertical: 0,
    height: 50,
    justifyContent: 'center',
  },
  modalAuctBtn: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 50,
    marginBottom: 40,
  },
  modalBtnline: {
    borderRightWidth: 1,
    borderRightColor: Color.grayEEEE,
  },
  textContainer: {
    padding: 24,
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: Color.grayF8F8,
  },
  guideModalBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  guideModalBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: Color.blue02,
    borderRadius: 10,
    overflow: 'hidden',
  },

});
