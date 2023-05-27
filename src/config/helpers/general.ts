const generateImgUrl = (width: number, height: number) => {
  return `https://picsum.photos/${width}/${height}`;
};

const convertParagraph = (paragraph: string) => {
  return paragraph.replace(/\n/g, `<br />`);
};

export { generateImgUrl, convertParagraph };
