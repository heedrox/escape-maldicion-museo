const anItem = (id, roomId, image, type = '') =>
  ({ id, roomId, image, type, corrupted: false });
const aCorruptedItem = (id, roomId, image, destinataries, type = '') =>
  ({ id, roomId, image, destinataries, type, corrupted: true });

export default {
  defaultActiveRoom: 5,
  players: {
    'LEGALBUENO': 1,
    'ELMASTA': 2,
    'MARICARMENDECORNI': 3,
    'ELENANO': 4,
  },
  codes: [
    '0000', //to test
    'SPIG', //Qs and Os
    '563402208', // poligonos cuadros
    '5703681924', // Tiburon
    'C4QN8', //cuadros archiduque
    '14396', //LEARN - Disney
    'EBGFA', //PIANO
    'OGALU', //runas
    '86204', //arana escarabajo ...
    '9455', //vela, ojo, constelacion, serpiente
    'ELMOWEC',
    'OEMECWE',
  ],
  items: [
    anItem(101, 1, 'movie-tv.mp4', 'VIDEO'),
    aCorruptedItem(102, 1, 'cuadro-leopoldo-archiduque-pinturas.jpg', [2, 4]),
    anItem(103, 1, 'cuadros-poligonos.jpg'),
    anItem(104, 1, 'safe-box-in-1.jpg'),
    aCorruptedItem(105, 1, 'elmo-1.jpg', [3]),

    anItem(203, 2, 'library.jpg'),
    anItem(201, 2, 'book-catalog.jpg'),
    anItem(207, 2, 'box-elmo.jpg'),
    anItem(205, 2, 'door-to-egypt.jpg'),
    anItem(204, 2, 'lock-to-3.jpg'),
    anItem(206, 2, 'lock-to-3.jpg'),
    anItem(202, 2, 'book-disney.jpg'),
    aCorruptedItem(210, 2, 'elmo-3.jpg', [4]),

    anItem(301, 3, 'pasillo.jpg'),
    anItem(311, 3, 'pergamino-pasillo.jpg'),
    aCorruptedItem(302, 3, 'final-door.jpg', [1, 4]),
    anItem(303, 3, '5-digit-lock.jpg'),
    anItem(304, 3, 'tomb-room.jpg'),
    anItem(305, 3, 'closed-tomb.jpg'),
    anItem(310, 3, 'pergamino-in-tomb.jpg'),
    anItem(306, 3, 'lock-tomb-1.jpg'),
    anItem(307, 3, 'lock-tomb-2.jpg'),
    anItem(308, 3, 'open-tomb.jpg'),
    anItem(309, 3, 'the-end.mp4', 'VIDEO'),

    anItem(401, 4, 'frame-qo.jpg'),
    anItem(403, 4, 'frame-generic.jpg'),
    anItem(407, 4, 'frame-tiburon.jpg'),
    anItem(404, 4, 'piano.jpg', 'PIANO'),
    anItem(406, 4, 'safe-box.jpg'),
    anItem(405, 4, 'door.jpg'),
    anItem(408, 4, 'battery.jpg'),

    anItem(504, 5, '4-q-o-hint.jpg'),
    anItem(501, 5, '1-book-on-table.jpg'),
    anItem(507, 5, '7-safe-lock-tiburon.jpg'),
    anItem(502, 5, '2-door-to-dimension.jpg'),
    anItem(505, 5, '5-lock-door-dimension.jpg'),
    aCorruptedItem(508, 5, '8-elmo-2.jpg', [2]),

    anItem(600, 6, 'room.jpg'),
    anItem(604, 6, 'more-room.jpg'),
    anItem(601, 6, 'computer.jpg'),
    aCorruptedItem(602, 6, 'pergamino-cuadros.jpg', [1, 3]),
    anItem(605, 6, 'pergamino-maldicion.jpg'),
    aCorruptedItem(603, 6, 'alfabeto-runico.pdf', [2, 3], 'PDF'),

    aCorruptedItem(704, 7, 'felpudo.jpg', [1]),
    anItem(705, 7, 'basement.jpg'),
    anItem(706, 7, 'barril.jpg'),
    anItem(701, 7, 'videocamara-nobatt.jpg'),
    anItem(702, 7, 'videocamara-yesbatt.jpg'),
    anItem(703, 7, 'movie-maldicion.mp4', 'VIDEO'),
  ]
}
