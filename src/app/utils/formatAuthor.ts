export const formatAuthorName = (author: string) => {
    const words = author.split(' ');
    const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return formattedWords.join(' ');
  };