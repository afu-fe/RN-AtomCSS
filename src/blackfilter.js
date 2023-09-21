const blackConfig = {
  ios: ['overlay', 'alignVertical'],
  android: [
    'flex-none',
    'content-evenly',
    'border-double',
    'border-none',
    'z-auto',
    'fixed',
    'sticky',
    'direction',
    'writing',
    'shadow',
    'text-decorate',
  ],
};
const blackfilter = function (key, OS) {
  let sky = '';
  const bArr = blackConfig[OS] || [];
  const realArr = bArr.filter((item) => key.indexOf(item) === 0);
  if (realArr?.length === 0) {
    sky = key;
  }
  return sky;
};

export default blackfilter;
