const getMiniature = (url) => {
  const video_url = url;
  const video_id = video_url.split('https://youtu.be/')[1];
  const video_Miniature = `https://img.youtube.com/vi/${video_id}/0.jpg`;
  return video_Miniature;
};

export { getMiniature };
