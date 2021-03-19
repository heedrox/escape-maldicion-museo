// eslint-disable-next-line no-undef
const isAdmin = () => window.location.href.indexOf('theminiadmin') >= 0 || window.location.href.indexOf('LWRTW') >= 0;
const isSuperAdmin = () => window.location.href.indexOf('LWRTW') >= 0;

export {
  isAdmin,
  isSuperAdmin
};
