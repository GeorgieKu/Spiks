export default {
  run($) {
    $('[fill]').removeAttr('fill');
    $('[stroke]').removeAttr('stroke');
    $('[style]').removeAttr('style');
  },
  parserOptions: { xmlMode: true },
};
