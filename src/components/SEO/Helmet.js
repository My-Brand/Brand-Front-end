const Helmet = (title, description) => {
  const titleTag = document.querySelector('title');
  const descTag = document.querySelector('[name="description"]');

  titleTag.textContent = title;
  descTag.attributes.content.textContent = description;
};

export default Helmet;
