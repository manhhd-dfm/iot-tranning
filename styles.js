import { Dimensions, Platform } from 'react-native';
const { height, width } = Dimensions.get('window');

module.exports = {
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  headStyle: {
    width,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    flexDirection: 'row',
    padding: 10
  },
  borderTop: { borderTopWidth: 1, borderColor: '#cccccc', width },
  blackFont: { color: '#34495e' },
  imgBack: { width: 40, height: 40 },
  textTitle: {
    color: 'black',
    fontSize: 40,
    margin: 10,
    textAlign: 'center'
  },
  textInput: {
    width: width * 0.75,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'center',
    margin: 10,
    fontSize: 26,
    textAlign: 'center'
  },
  ticketInfo: {
    borderWidth: 1,
    borderRadius: 10,
    width: width * 0.95,
    padding: 10
  },

  textMovieTitle: {
    color: 'red',
    fontSize: 30,
    marginLeft: "14%",
    textAlign: 'center'
  },
  textMovieYear: {
    color: 'blue',
    fontSize: 20,
    marginLeft: "14%",
    textAlign: 'right'
  },

  colorRed: {color: 'red'},
  marTop5: {marginTop: width * 0.02},
  twoCol: {flexDirection: 'row', flexWrap: 'wrap'},
  itemTwoCol: {alignItems:'center', width: width * 0.47, marginLeft: width * 0.02, marginTop: width * 0.02},
  ButtonOk: {
    backgroundColor: 'gray',
    borderRadius: 4,
    minHeight: 50,
    width: width / 2 - 5
  },
  ButtonLogin: {
    borderRadius: 5,
    minHeight: 50,
    width: width * 0.75
  },
  alignCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  alignBetweenTop: {
    justifyContent: 'space-between'
  },
  alignBetween: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ticketItem: {
    width: width / 2 - 5,
    marginTop: 10,
    minHeight: 80,
    alignItems: 'center'
  },
  btnTicket: {
    minHeight: 80,
    width: width / 2 - 20,
    borderRadius: 5
  },
  TextOk: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 30,
    marginLeft: 30
  },
  marBottom10: {marginBottom: 10},
  fontSize25: { fontSize: 25 },
  fontSize24: { fontSize: 24 },
  fontSize22: { fontSize: 22 },
  fontSize18: { fontSize: 18 },
  fontSize20: { fontSize: 20 },
  fontSize16: { fontSize: 16 },
  textBold: { fontWeight: 'bold' },
  textWhite: { color: '#fff', textAlign: 'center' },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width,
    padding: 5
  },
  colStart: {
    justifyContent: 'flex-start',
    width,
    padding: 5,
    paddingBottom: 15
  },
  Button: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    minHeight: 80,
    width: width / 2 - 10
  },
  ButtonFull: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    minHeight: 80,
    width: width - 10
  },
  ticketBtn: {
    backgroundColor: '#f28902'
  },
  qrBtn: {
    backgroundColor: '#288ad6'
  },
  chargeBtn: {
    backgroundColor: '#3fb846'
  },
  depositBtn: {
    backgroundColor: '#ff0066'
  },
  loginBtn: {
    backgroundColor: '#fdd504'
  },
  logoutBtn: {
    backgroundColor: '#e10c00'
  },
  loginUser: {
    backgroundColor: '#0866C6'
  },
  scanCard: {
    backgroundColor: 'purple'
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },  
  image: {
    width: 200,
    height: 50,
    //alignItems: 'center',
    resizeMode: 'contain'
  },
  scroll: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    margin: 10,
  },
  row: {
    margin: 10
  },
  result: {
    borderWidth: 1,
    borderColor: '#666',
    width: '100%',
    paddingHorizontal: 16
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 12,
    width: '100%'
  }
};
