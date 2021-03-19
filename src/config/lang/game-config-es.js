import gameConfigBase from './game-config-base.js';
import { mergeConfig } from '@/config/lang/lib/merge-config';

const localizedConfig = {
  title: {
    overTitle: 'ESCAPE DE...',
    main: 'LA MALDICIÓN DEL MUSEO',
    start: 'EMPEZAR'
  },
  welcomeText: [
    'A quien corresponda,<br /><br />',
    'La desesperación nos invade. Una vez más, la maldición del museo ha vuelto a atacar, y se ha llevado',
    'cuatro nuevas víctimas. Todo ocurrió anoche, cuando las doce campanadas repicaron por toda la ciudad.<br /><br />',
    'A nuestros oídos han llegado vuestras hazañas, y con humildad y desolación, acudimos a pediros',
    'ayuda. Os rogamos que atendáis nuestras plegarias, acudiendo al museo, investigando los',
    'extraños sucesos que allá acontecen, y librándonos así, de una vez por todas, de esta escalofriante',
    'condena que nos acosa.<br /><br />',
    'Atentamente.'
  ].join(' '),
  readyText: [
    '<p>Gracias por venir</p>',
    '<p><br /><br /></p>',
    '<p>Damián llegará a la hora señalada</p>'
  ].join(' '),
  keyboard: {
    placeholder: 'PULSA CÓDIGO'
  }
}

export default mergeConfig(gameConfigBase, localizedConfig);
