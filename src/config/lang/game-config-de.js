import gameConfigBase from './game-config-base.js';
import { mergeConfig } from './lib/merge-config';

const localizedConfig = {
  title: {
    overTitle: 'ENTFLIEH......',
    main: 'DEM FLUCHT DES MUSEUMS',
    start: 'STARTEN'
  },
  welcomeText: [
    'Wen es betrifft,<br /><br />',
    'Es its wieder so weit. Die Fluch des Museums ist zurück, aber dieses mal gibt es ein ' +
    'Opfer. Alles geschah letzte Nacht, als die Kirchenuhr zwölf Uhr schlug. <br /><br />',
    'Deine Abenteuerlust und Intelligenz haben unsere Ohren erreicht. Wir bitten dich, uns zu ' +
    'helfen, und mit uns das Abenteuer zu betreten, in das Museum rein zu gehen, die ' +
    'seltsamen Ereignisse dort zu untersuchen und uns ein Mal für alle mal von diesem Fluch ' +
    'zu befreien.<br /><br />',
    'LG,'
  ].join(' '),
  readyText: [
    '<p>Danke fürs Kommen</p>',
    '<p><br /><br /></p>',
    '<p>Warten Sie auf die festgelegte Zeit</p>'
  ].join(' '),
  keyboard: {
    placeholder: 'CODE EINTIPPEN'
  },
  items: {
    201: { image: 'book-catalog-de.jpg' },
    309: { image: 'the-end-en.mp4' },
    311: { image: 'pergamino-pasillo-de.png' },
    390: { image: 'damian-en.mp3' },
    504: { image: '4-q-o-hint-de.jpg' },
    501: { image: '1-book-on-table-de.jpg' },
    605: { image: 'pergamino-maldicion-de.jpg' },
    703: { image: 'movie-maldicion-de.mp4' }
  }
}

export default mergeConfig(gameConfigBase, localizedConfig);
