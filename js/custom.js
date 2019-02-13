var movie = [{
    title: 'Avengers',
    description: '4 May 2012 (USA)',
    url: 'https://www.imdb.com/title/tt0848228'
  },
  {
    title: 'Ant-Man',
    description: '17 July 2015 (USA)',
    url: 'https://www.imdb.com/title/tt5095030'
  },
  {
    title: 'Captain America: Civil War',
    description: '6 May 2016 (USA)',
    url: 'https://www.imdb.com/title/tt3498820'
  },
  {
    title: 'Avengers: Infinity War',
    description: '27 April 2018 (USA)',
    url: 'https://www.imdb.com/title/tt4154756'
  },
];

$('.ui.search')
  .search({
    source: movie,
    maxResults: 16
  });
