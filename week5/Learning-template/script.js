const contents = [
  {
    text: 'The <template> element stores HTML markup but browser ignores this contents(only check if syntax is valid)',
    id: 1,
    image: 'https://source.unsplash.com/400x300?2',
  },
  {
    text: 'HTML markup held by <template> is not rendered immediately when a page is loaded.',
    id: 2,
    image: 'https://source.unsplash.com/400x300?1',
  },
  {
    text: 'We can access and use HTML markup stored in <template> in JS. - access "template.content" from JS, clone it to reuse in a new component. - Node.cloneNode(true)',
    id: 3,
    image: 'https://source.unsplash.com/400x300?34',
  },
  {
    text: '(Bonus) We can put styles and scripts into <template>',
    id: 4,
    image: 'https://source.unsplash.com/400x300?3',
  },
];

const container = document.querySelector('#template_container');

function createBox(elem) {
  const { text, id, image } = elem;

  const template = document.querySelector('#article_template');
  const domFrag = template.content.cloneNode(true);

  domFrag.querySelector('img').src = image;
  domFrag.querySelector('h2').textContent = id;
  domFrag.querySelector('li').textContent = text;
  container.appendChild(domFrag);
}

contents.forEach(createBox);
