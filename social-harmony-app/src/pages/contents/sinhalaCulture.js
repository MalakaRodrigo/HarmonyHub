import React, { useState } from 'react';

const BlogContent = ({setTags}) => {
  const [highlightedWords, setHighlightedWords] = useState([]);

  const handleClick = (word) => {
    const foundWord = highlightedWords.find((w) => w.word === word);

    if (foundWord) {
      // Word is already highlighted, so update its rank
      const updatedWords = highlightedWords.map((w) =>
        w.word === word ? { word, rank: w.rank + 1 } : w
      );
      setHighlightedWords(updatedWords);
    } else {
      // Word is not highlighted, so add it with rank 1
      setHighlightedWords([...highlightedWords, { word, rank: 1 }]);
    }
    setTags(highlightedWords)
  };

  const text =
    'Sri Lanka, often called the "Pearl of the Indian Ocean," is a total paradise with its stunning nature, beautiful beaches, and wild animals. But it\'s not just about the scenery; it\'s got a super fascinating culture too, especially the Sinhala culture. In this blog post, we\'re diving deep into Sinhala culture to uncover its cool history, awesome traditions, its unique language, and all the things that make it so special.';
  const text2 = 'Sri Lankan Tamils, also known as Ceylon Tamils or Eelam Tamils, are the indigenous people of the South Asian island nation of Sri Lanka. They make up the majority in the Northern Province, a significant portion in the Eastern Province, and a minority in other regions. Approximately 70% of them reside in the Northern and Eastern provinces.'
  // Split the text into an array of words for easier processing
  const words = text.split(' ');
  const words2 = text2.split(' ');

  return (
    <div>
      <h1>Diving into Sinhala Culture in Sri Lanka</h1>
      {words.map((word, index) => (
        <span
          key={word}
          className="word"
          onClick={() => handleClick(word)}
          onKeyDown={() => handleClick(word)}
        >
          {word}{' '}
        </span>
      ))}
          <h1>Diving into Tamil Culture in Sri Lanka</h1>
      {words2.map((word, index) => (
        <span
          key={word}
          className="word"
          onClick={() => handleClick(word)}
          onKeyDown={() => handleClick(word)}
        >
          {word}{' '}
        </span>
      ))}
    </div>
  );
};

export default BlogContent;
