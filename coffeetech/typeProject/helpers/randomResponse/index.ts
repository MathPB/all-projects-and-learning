export const randomResponse = (name: String) => {
  const randomNumber = Math.floor(Math.random() * 1000);
  const keyNumber = Math.floor(Math.random() * 5);

  let result;

  if (randomNumber > 0) {
    switch (keyNumber) {
      case 1:
        result = `<span style="font-size:40px"><b>${name}</b>, você fez <b style="color: #ff0000">${randomNumber}</b> piadas ruins nessa semana!</span>`;
        break;

      case 2:
        result = `<span style="font-size:40px"><b>${name}</b>, você falou <b style="color: #ff0000">${randomNumber}</b> ditados sobre cachorros essa semana!</span>`;
        break;

      case 3:
        result = `<span style="font-size:40px"><b>${name}</b>, você ajudou o leigo do Matheus <b style="color: #ff0000">${randomNumber}</b> vezes nessa sprint!</span>`;
        break;

      case 4:
        result = `<span style="font-size:40px"><b>${name}</b>, você deve um pix de <b style="color: #ff0000">R$ ${randomNumber}</b> para todos do time!</span>`;
        break;

      case 5:
        result = `<span style="font-size:40px"><b>${name}</b>, você esqueceu <b style="color: #ff0000">${randomNumber}</b> vezes de apontar a hora no Jira!</span>`;
        break;

      default:
        result = `<span style="font-size:40px"><b>${name},</b> nenhuma piada constada nessa semana, você não é digno! Desistimos de você!</span>`;
        break;
    }
  }
  return result;
};
