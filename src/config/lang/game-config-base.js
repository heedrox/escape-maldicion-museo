import playerCodes from '../player-codes';

const anItem = (id, roomId, image, type = '') =>
  ({ id, roomId, image, type, corrupted: false });
const aCorruptedItem = (id, roomId, image, destinataries, type = '') =>
  ({ id, roomId, image, destinataries, type, corrupted: true });
const anInvisibleItem = (id, roomId, image, type = '') =>
  ({ id, roomId, image, type, corrupted: false, invisible: true });
const byNumberDestinataries = (ifTwo, ifThree, ifFour) => ({ ifTwo, ifThree, ifFour });

export default {
  availableRooms: [1, 2, 3, 4, 5, 6, 7],
  defaultUnlockedRooms: [2, 4, 5],
  defaultUnlockedItems: [],
  defaultActiveRoom: 5,
  players: playerCodes,
  codes: [
    '0000', //to test
    'SPIG', //Qs and Os
    '5703681924', // Tiburon
    'C4QN8', //cuadros
    '14396', //LEARN - Disney
    'EBGFA', //PIANO
    '86204', //arana escarabajo ...
    '9454', //vela, ojo, constelacion, serpiente
    '9458', //vela, ojo, constelacion, serpiente
    'ELMOMO',
  ],
  items: [
    anItem(101, 1, 'movie-tv.mp4', 'VIDEO'),
    aCorruptedItem(102, 1, 'cuadro-leopoldo-archiduque-pinturas.jpg', byNumberDestinataries([1], [1,3], [1,3])),
    anItem(104, 1, 'safe-box-in-1.jpg'),
    aCorruptedItem(105, 1, 'elmo-1.jpg', byNumberDestinataries([1],[1,2],[1,3])),

    anItem(203, 2, 'library.jpg'),
    anItem(201, 2, 'book-catalog.jpg'),
    anItem(207, 2, 'box-elmo.jpg'),
    anItem(205, 2, 'door-to-egypt.jpg'),
    anItem(204, 2, 'lock-to-3.jpg'),
    anItem(202, 2, 'book-disney.jpg'),
    aCorruptedItem(210, 2, 'elmo-3.jpg', byNumberDestinataries([1],[1,2],[1,3])),

    anItem(301, 3, 'pasillo.jpg'),
    anItem(311, 3, 'pergamino-pasillo.jpg'),
    anItem(304, 3, 'tomb-room.jpg'),
    anItem(305, 3, 'closed-tomb.jpg'),
    anItem(310, 3, 'pergamino-in-tomb.jpg'),
    anItem(306, 3, 'lock-tomb-1.jpg'),
    anItem(307, 3, 'lock-tomb-2.jpg'),
    anItem(308, 3, 'open-tomb.jpg'),
    anItem(309, 3, 'the-end.mp4', 'VIDEO'),
    anInvisibleItem(390, 3, 'damian-es.mp3', 'MP3'),

    anItem(401, 4, 'frame-qo.jpg'),
    anItem(403, 4, 'frame-generic.jpg'),
    anItem(407, 4, 'frame-tiburon.jpg'),
    anItem(404, 4, 'piano.jpg', 'PIANO'),
    anItem(405, 4, 'door.jpg'),

    anItem(504, 5, '4-q-o-hint.jpg'),
    anItem(501, 5, '1-book-on-table.jpg'),
    anItem(507, 5, '7-safe-lock-tiburon.jpg'),
    anItem(502, 5, '2-door-to-dimension.jpg'),
    anItem(505, 5, '5-lock-door-dimension.jpg'),
    aCorruptedItem(508, 5, '8-elmo-2.jpg', byNumberDestinataries([1],[1,2],[1,3])),
    anInvisibleItem(590, 5, 'clock-start.mp3', 'MP3'),

    anItem(600, 6, 'room.jpg'),
    anItem(604, 6, 'more-room.jpg'),
    aCorruptedItem(602, 6, 'pergamino-cuadros.jpg', byNumberDestinataries([2],[2],[2,4])),
    anItem(605, 6, 'pergamino-maldicion.jpg'),

    aCorruptedItem(704, 7, 'felpudo.jpg', byNumberDestinataries([2],[3],[2,4])),
    anItem(705, 7, 'basement.jpg'),
    anItem(702, 7, 'videocamara-yesbatt.jpg'),
    anItem(703, 7, 'movie-maldicion.mp4', 'VIDEO'),
  ]
}
