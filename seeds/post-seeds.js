const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    user_id: 1,
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: `Id nihil similique rerum, dignissimos quas quis!`,

    user_id: 2,
  },
  {
    title: 'Donec diam neque, vestibulum',
    content: `aperiam officia saepe quae nam
    consectetur excepturi, in fugiat? Vero labore blanditiis facere`,
    user_id: 10,
  },
  {
    title: 'Nunc purus.',
    content: `Cupiditate dolore aspernatur ducimus mollitia suscipit fuga `,
    user_id: 4,
  },
  {
    title: 'Pellentesque eget nunc.',
    content: `Id nihil similique rerum, dignissimos quas quis! Lorem`,
    user_id: 7,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'https://stanford.edu/consequat.png',
    user_id: 4,
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1,
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1,
  },
  {
    title: 'Duis ac nibh.',
    content: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9,
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5,
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3,
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content:
      'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10,
  },
  {
    title: 'Donec dapibus.',
    content: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8,
  },
  {
    title: 'Nulla tellus.',
    content: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3,
  },
  {
    title:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content: 'https://gmpg.org/lorem.jpg',
    user_id: 3,
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    content: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7,
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6,
  },
  {
    title: 'Etiam justo.',
    content: 'https://shareasale.com/quis.json',
    user_id: 4,
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    content:
      'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6,
  },
  {
    title:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'https://java.com/at/nibh/in.png',
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
