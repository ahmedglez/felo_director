const getMiniature = (url) => {
  const video_url = url;
  const video_id = video_url.split('https://www.youtube.com/watch?v=')[1];
  const video_Miniature = `https://img.youtube.com/vi/${video_id}/0.jpg`;
  return video_Miniature;
};

export { getMiniature };
