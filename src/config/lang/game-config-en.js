import gameConfigBase from './game-config-base.js';
import { mergeConfig } from './lib/merge-config';

const localizedConfig = {
  title: {
    overTitle: 'ESCAPE FROM...',
    main: 'THE CURSE OF THE MUSEUM',
    start: 'START'
  },
  welcomeText: [
    'To whom it may concern,<br /><br />',
    'Dispair has taken over us. Once more, the curse of the museum is back. This time, it took',
    'for new victims. Everything happened last night, when the church clock struck twelve. <br /><br />',
    'Your adventures and your intelligence have reached our ears. In a humble way, we ask for you help. ',
    'We beg you to help us, to join me in the adventure of entering into the museum, investigating the ',
    'strange happenings that take place there, and freeing us, once for all, from this condemnation that',
    'harasses us.<br /><br />',
    'Yours sincerely,.'
  ].join(' '),
  readyText: [
    '<p>Thanks for coming</p>',
    '<p><br /><br /></p>',
    '<p>Damian will be here at the appointed time</p>'
  ].join(' '),
  keyboard: {
    placeholder: 'TYPE A CODE'
  },
  items: {
    504: { image: '4-q-o-hint-en.jpg' },
  }
}

export default mergeConfig(gameConfigBase, localizedConfig);
