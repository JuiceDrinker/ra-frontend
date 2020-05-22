const isDuplicate = (element, array) => array.includes(element);

const getVideoId = (url) => url.split("=")[1]; //Get YT videoID after '='

export { isDuplicate, getVideoId };
