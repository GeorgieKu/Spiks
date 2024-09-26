const typeClean = {
  shape: {
    dimension: {
      maxWidth: 48,
      maxHeight: 48,
    },
  },
  mode: {
    symbol: {
      dest: 'clean',
      inline: true,
      sprite: './sprite.svg',
    },
  },
};

const typeDefault = {
  shape: {
    dimension: {
      maxWidth: 48,
      maxHeight: 48,
    },
  },
  mode: {
    symbol: {
      dest: 'default',
      inline: true,
      sprite: './sprite.svg',
    },
  },
};

export default {
  typeClean,
  typeDefault,
};
