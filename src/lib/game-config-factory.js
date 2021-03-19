import { getGameCode } from '@/lib/get-game-code';
import { getLanguage } from '@/lib/get-language';

const getGameConfigByLanguage = lang => {
  try {
    return require('../config/lang/game-config-' + lang).default;
  } catch (error) {
    alert('Language not supported ' + lang)
  }
}

const getCustomizedConfig = (gameCode) => {
  try {
    return require('../config/game-config-' + gameCode).default;
  } catch (error) {
    return null
  }
};

export default {
  get: () => {
    const baseConfig = getGameConfigByLanguage(getLanguage())
    const configByGameCode = getCustomizedConfig(getGameCode());

    if (configByGameCode) {
      //codes
      baseConfig.codes.push(configByGameCode.EVIL_NAME);


      for (let a = 0; a<baseConfig.items.length; a++) {
        baseConfig.background = configByGameCode.background;
        //images
        if ((typeof baseConfig.items[a].image !== 'undefined') &&
          (baseConfig.items[a].image.indexOf('#') === 0)) {
          baseConfig.items[a].image = configByGameCode.images[baseConfig.items[a].image];
        }
        //pizarra args
        if (baseConfig.items[a].plugin === true) {
          if (baseConfig.items[a].args === 'ROOM_2_PIZARRA_ARGS') {
            baseConfig.items[a].args = configByGameCode['ROOM_2_PIZARRA_ARGS'];
          } else if (baseConfig.items[a].args === 'ROOM_6_PIZARRA_ARGS') {
            baseConfig.items[a].args = configByGameCode['ROOM_6_PIZARRA_ARGS'];
          } else if (baseConfig.items[a].args === 'ROOM_8_PIZARRA_ARGS') {
            baseConfig.items[a].args = configByGameCode['ROOM_8_PIZARRA_ARGS'];
          } else if (baseConfig.items[a].args === 'ROOM_8_COMPUTER_ARGS') {
            baseConfig.items[a].args = configByGameCode['ROOM_8_COMPUTER_ARGS'];
          }
        }
      }

      baseConfig['welcomeText'] = configByGameCode['welcomeText'];
    }
    return baseConfig;
  }
}
