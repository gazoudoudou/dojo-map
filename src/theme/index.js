// @flow

const colors = {
  darkGrey: '#333333',
  deepGrey: '#6B6C6D',
  lightGrey: '#B7B7B7',
  veryLightGrey: '#E5E5E5',
  backgroundGrey: '#F5F4F8',
  facebookBlue: '#3B5998',
  googleBlue: '#4285F4',
  orange: '#FF6426',
  lightOrange: '#FCEBED',
  primary: '#F0245A',
  white: '#ffffff',
  addGreen: '#49a248',
  editBlue: '#246c9d',
  deleteRed: '#bf2e2c',
  text: '#3B3176',
  blueberry: '#3b3176',
  paleGrey: '#f5f4f8',
  seaFoamBlue: '#6cc9be',
  darkLavender: '#845ea4',
  purpleMountainMajesty: '#9d7eb6',
  greenyBlue: '#4bb193',
  starYellow: '#f2b828',
};

export default {
  colors,
  margin: 8,
  errorToast: {
    text: colors.darkGrey,
    background: colors.lightOrange,
  },
  messageToast: {
    text: colors.veryLightGrey,
    background: colors.editBlue,
  },
};
