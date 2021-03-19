const OVERWITE_FIELDS = ['welcomeText', 'readyText', 'title', 'keyboard']

const mergeConfig = (base, config) => {
  OVERWITE_FIELDS.forEach(field => {
    if (config[field]) base[field] = config[field];
  })
  const idsReplace = config.items ? Object.keys(config.items) : [];
  idsReplace.forEach(itemIdStr => {
    const itemId = parseFloat(itemIdStr)
    const itemToReplace = base.items.filter(it => it.id === itemId)
    if (itemToReplace.length > 0) {
      itemToReplace[0].image = config.items[itemId].image
    } else {
      window.itemId = itemId
      console.log('item not found???', itemId, base.items)
      window.base = base
    }
  })
  return base;
};

export {
  mergeConfig
}
