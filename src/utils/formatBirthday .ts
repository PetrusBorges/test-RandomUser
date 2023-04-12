export const formatBirthday = (birthday: string) => {
  const date = new Date(birthday);
  const dia = String(date.getDate()).padStart(2, '0');
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const ano = date.getFullYear();
  const dataFormatada = `${dia}/${mes}/${ano}`;

  return dataFormatada;
};
