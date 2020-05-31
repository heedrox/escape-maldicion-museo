const anItem = (id, roomId, image, type = '') => ({ id, roomId, image, type });

export default {
  defaultActiveRoom: 5,
  items: [
    anItem(101, 1, 'movie-tv.mp4', 'VIDEO'),
    anItem(102, 1, 'cuadro-leopoldo-archiduque-pinturas.jpg'),
    anItem(103, 1, 'cuadros-poligonos.jpg'),
    anItem(203, 2, 'library.jpg'),
    anItem(201, 2, 'book-catalog.jpg'),
    anItem(202, 2, 'book-disney.jpg'),
    anItem(205, 2, 'door-to-egypt.jpg'),
    anItem(204, 2, 'lock-to-3.jpg'),
    anItem(401, 4, 'frame-qo.jpg'),
    anItem(402, 4, 'frames-more-generic.jpg'),
    anItem(403, 4, 'frame-generic.jpg'),
    anItem(404, 4, 'piano.jpg', 'PIANO'),
    anItem(405, 4, 'door.jpg'),
    anItem(406, 4, 'lock-door.jpg'),
    anItem(503, 5, 'felpudo.jpg'),
    anItem(506, 5, 'cuadros.jpg'),
    anItem(504, 5, 'q-o-hint.jpg'),
    anItem(501, 5, 'book-on-table.jpg'),
    anItem(502, 5, 'door-to-dimension.jpg'),
    anItem(505, 5, 'lock-door-dimension.jpg'),
    anItem(701, 7, 'videocamara.jpg'),
    anItem(702, 7, 'movie-maldicion.mp4', 'VIDEO'),
  ]
}
