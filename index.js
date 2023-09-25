const goodbye = (name = '') => {
  const closingParagraph = document.querySelector('.email__closing');
  closingParagraph.textContent = `S pozdravem ${name}`;
};

goodbye('Pavel Ovesný');

