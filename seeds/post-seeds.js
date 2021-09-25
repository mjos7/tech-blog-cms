const { Post } = require('../models');

const postdata = [
  {
    title: 'The art of the croissant',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    user_id: 1,
  },
  {
    title: '19 ways to count sheep before going to bed',
    content: `Id nihil similique rerum, dignissimos quas quis!`,

    user_id: 2,
  },
  {
    title: "7 reasons why your boss doesn't like you",
    content: `aperiam officia saepe quae nam
    consectetur excepturi, in fugiat? Vero labore blanditiis facere`,
    user_id: 10,
  },
  {
    title: '101 steps to becoming a billionaire',
    content: `Id nihil similique rerum, dignissimos quas quis! Lorem`,
    user_id: 7,
  },
  {
    title: '21 reasons you should leave him',
    content: 'https://stanford.edu/consequat.png',
    user_id: 4,
  },
  {
    title: '3 reasons why you should get back together',
    content: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1,
  },
  {
    title: '6 steps to fall asleep while standing',
    content: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1,
  },
  {
    title: 'You did it. You made it here. Good job',
    content: `Cupiditate dolore aspernatur ducimus mollitia suscipit fuga `,
    user_id: 4,
  },
  {
    title: "The power of a fast 'no'",
    content: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9,
  },
  {
    title: "The art of quitting... before it's too late",
    content: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5,
  },
  {
    title: "3 reasons why I'm quitting my job",
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
