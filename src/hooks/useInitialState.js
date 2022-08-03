import { useState } from 'react';
import { getMiniature } from '../utils/youtube_utilitys';

const initialState = {
  videoclips: [
    {
      id: 1,
      title: 'Tu dolor',
      artist: 'Alex Duvall, Kelvis Ochoa, El Micha',
      url: 'https://youtu.be/R7dxbVxbW4A',
      image: '',
      date: '01-05-2020',
    },
    {
      id: 2,
      title: 'Pedazo de ti',
      artist: 'Jota Barrios x Kelvis Ochoa',
      url: 'https://youtu.be/kcgV4KLeYZk',
      image: '',
      date: '01-05-2020',
    },
    {
      id: 3,
      title: 'Mala Canción de Amor ',
      artist: 'Jota Barrios',
      url: 'https://youtu.be/WVQk_q754DM',
      image: '',
      date: '01-05-2020',
    },
    {
      id: 4,
      title: 'El Bombazo',
      artist: 'Alex Duvall & Yomil y el Dany',
      url: 'https://youtu.be/kVOFRptMARE',
      image: '',
      date: '01-05-2020',
    },
    {
      id: 5,
      title: 'En Visto',
      artist: 'LIAM',
      url: 'https://youtu.be/zrH3TKSi0L4',
      image: '',
      date: '01-05-2020',
    },
    {
      id: 6,
      title: 'Artificial',
      artist: 'LIAM',
      url: 'https://youtu.be/XfBrGD3yw-Q',
      image: '',
      date: '01-05-2020',
    },
    {
      id: 7,
      title: 'Video Clips 7',
      artist: 'Artist 7',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      image: '',
      date: '01-05-2020',
    },
    {
      id: 8,
      title: 'Video Clips 8',
      artist: 'Artist 8',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      image: '',
      date: '2020-01-01',
    },
    {
      id: 9,
      title: 'Video Clips 9',
      artist: 'Artist 9',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      image: '',
      date: '2020-01-01',
    },
    {
      id: 10,
      title: 'Video Clips 10',
      artist: 'Artist 10',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      image: '',
      date: '2020-01-01',
    },
    {
      id: 11,
      title: 'Video Clips 11',
      artist: 'Artist 11',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      image: '',
      date: '2020-01-01',
    },
    {
      id: 12,
      title: 'Video Clips 12',
      artist: 'Artist 12',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      image: '',
      date: '2020-01-01',
    },
    {
      id: 13,
      title: 'Video Clips 13',
      artist: 'Artist 13',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      image: '',
      date: '2020-01-01',
    },
    {
      id: 14,
      title: 'Video Clips 14',
      artist: 'Artist 14',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      image: '',
      date: '2020-01-01',
    },
    {
      id: 15,
      title: 'Video Clips 15',
      artist: 'Artist 15',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      image: '',
      date: '2020-01-01',
    },
  ],
};

const matchVideoclipWithMiniature = () => {
  const videoclips = initialState.videoclips;
  videoclips.forEach((videoclip) => {
    videoclip.image = getMiniature(videoclip.url);
  });
  initialState.videoclips = videoclips;
};

matchVideoclipWithMiniature();

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const getRecentVideoclips = () => {
    const sortedVideoclips = state.videoclips.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    return sortedVideoclips.slice(0, 6);
  };

  const getAllVideoclips = () => {
    const sortedVideoclips = state.videoclips.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    return sortedVideoclips;
  };

  const getVideoclip = (id) => {
    return state.videoclips.find((videoclip) => videoclip.id === id);
  };

  const addVideoclip = (videoclip) => {
    setState({
      ...state,
      videoclips: [...state.videoclips, videoclip],
    });
  };

  const updateVideoclip = (id, videoclip) => {
    setState({
      ...state,
      videoclips: state.videoclips.map((v) => (v.id === id ? videoclip : v)),
    });
  };

  const deleteVideoclip = (id) => {
    setState({
      ...state,
      videoclips: state.videoclips.filter((v) => v.id !== id),
    });
  };

  return {
    state,
    getRecentVideoclips,
    getAllVideoclips,
    getVideoclip,
    addVideoclip,
    updateVideoclip,
    deleteVideoclip,
  };
};

export default useInitialState;
