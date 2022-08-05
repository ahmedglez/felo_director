import { useState } from 'react';

const initialState = {
  videoclips: [
    {
      date: '7/8/22',
      title: 'Pedazo De Ti',
      artists: 'Jotabarrioz, Kelvis Ochoa',
      link: 'https://www.youtube.com/watch?v=kcgV4KLeYZk',
    },
    {
      date: '6/29/22',
      title: 'Tu dolor',
      artists: 'Alex Duvall, Kelvis Ochoa, El Micha',
      link: 'https://www.youtube.com/watch?v=R7dxbVxbW4A',
    },
    {
      date: '6/24/22',
      title: 'Caleidoscopio',
      artists: 'Abel Geronés',
      link: 'https://www.youtube.com/watch?v=cZak2svI-Z0',
    },
    {
      date: '6/11/22',
      title: 'No Vas Remix',
      artists: 'Wow Popy, Los 4',
      link: 'https://www.youtube.com/watch?v=SOh9jf8_WP8',
    },
    {
      date: '4/29/22',
      title: 'Mala Canción de Amor',
      artists: 'Jotabarrioz',
      link: 'https://www.youtube.com/watch?v=WVQk_q754DM',
    },
    {
      date: '4/22/22',
      title: 'El Ascensor',
      artists: 'Alex Duvall, Kendaya',
      link: 'https://www.youtube.com/watch?v=8hMekvsQQ_w',
    },
    {
      date: '3/26/22',
      title: 'Tocando Fondo',
      artists: 'Norlam La Melodia',
      link: 'https://www.youtube.com/watch?v=b2qhUTWXQYs',
    },
    {
      date: '3/25/22',
      title: 'Rockstar',
      artists: 'Bryant Garcia',
      link: 'https://www.youtube.com/watch?v=7cs0eqZWj9Q',
    },
    {
      date: '3/11/22',
      title: 'Hecha para mi',
      artists: 'Omar Vali',
      link: 'https://www.youtube.com/watch?v=Y6QWRGp54FE',
    },
    {
      date: '3/10/22',
      title: 'WUATEKE',
      artists: 'Agada Aguila ',
      link: 'https://www.youtube.com/watch?v=IK-c-3GXako',
    },
    {
      date: '3/9/22',
      title: 'Sin Pelos',
      artists: 'Qva Libre feat. Jotabarrioz',
      link: 'https://www.youtube.com/watch?v=c6lHPnRgTlA',
    },
    {
      date: '2/11/22',
      title: 'Feudalismo Moderno',
      artists: 'David Blanco',
      link: 'https://www.youtube.com/watch?v=4J9Ub5tIgoo',
    },
    {
      date: '1/21/22',
      title: 'HANNIBAL LECTER',
      artists: 'El Yonka',
      link: 'https://www.youtube.com/watch?v=3cCB9l2BRzE',
    },
    {
      date: '1/20/22',
      title: 'Perra y Gato',
      artists: 'Danny & Carlos Diaz',
      link: 'https://www.youtube.com/watch?v=FPA_ASitmNQ',
    },
    {
      date: '12/15/21',
      title: 'Mojaita',
      artists: 'Liam , Alex Diaz , Lemuell , Danny , Andy Isasi , Aizen',
      link: 'https://www.youtube.com/watch?v=AWa8dhu6AC0',
    },
    {
      date: '12/3/21',
      title: "Baila pa' mí",
      artists: 'Liana Milanés feat. Magui Blue',
      link: 'https://www.youtube.com/watch?v=diRAEN7ePd0',
    },
    {
      date: '11/25/21',
      title: 'Caliente',
      artists: 'Haned, Alex Duvall',
      link: 'https://www.youtube.com/watch?v=xFSSDyO4rCA',
    },
    {
      date: '11/19/21',
      title: 'En Lo Oscurito',
      artists: 'Qva Libre, El Kimiko y Yordy',
      link: 'https://www.youtube.com/watch?v=rpW8j3u3z1s',
    },
    {
      date: '11/15/21',
      title: 'Cuore',
      artists: 'Liam, Aizen',
      link: 'https://www.youtube.com/watch?v=uB7UaBqZG8o',
    },
    {
      date: '11/9/21',
      title: 'Hija De La Noche',
      artists: 'Aleko & Ignacio Ley, Alex Duvall',
      link: 'https://www.youtube.com/watch?v=MwlSDLNyYLI',
    },
    {
      date: '10/22/21',
      title: 'Melatonina (Cap.5) FINAL',
      artists: 'Liam',
      link: 'https://www.youtube.com/watch?v=ooaIpW3HFPk',
    },
    {
      date: '10/20/21',
      title: 'Tranqui',
      artists: 'Lemuell',
      link: 'https://www.youtube.com/watch?v=F1S7lkVKX7w',
    },
    {
      date: '10/15/21',
      title: 'Dame De Eso',
      artists: 'Leoni Torres, Jotabarrioz',
      link: 'https://www.youtube.com/watch?v=nV6TKsWJ2OA',
    },
    {
      date: '10/6/21',
      title: 'Las Pequeñas Cosas',
      artists: 'Danny & Carlos Diaz',
      link: 'https://www.youtube.com/watch?v=EOkx-18yAoA',
    },
    {
      date: '9/30/21',
      title: 'No molestar',
      artists: 'Alex Duvall',
      link: 'https://www.youtube.com/watch?v=f_nYF3O5E28',
    },
    {
      date: '9/24/21',
      title: 'Fantasma',
      artists: 'Jota Barrios, David Blanco',
      link: 'https://www.youtube.com/watch?v=t-j4FDI7PbQ',
    },
    {
      date: '9/17/21',
      title: 'La Gema',
      artists: 'Liana Milanés',
      link: 'https://www.youtube.com/watch?v=dtD-nLsVIyE',
    },
    {
      date: '9/17/21',
      title: 'En Visto (Cap.4)',
      artists: 'Liam',
      link: 'https://www.youtube.com/watch?v=zrH3TKSi0L4',
    },
    {
      date: '8/20/21',
      title: 'Funk Aspirin',
      artists: 'Cimafunk, George Clinton',
      link: 'https://www.youtube.com/watch?v=eVIDa5hOMJg',
    },
    {
      date: '8/2/21',
      title: 'Mojar',
      artists: 'Danny & Carlos Diaz',
      link: 'https://www.youtube.com/watch?v=76BFYhUED_w',
    },
    {
      date: '7/30/21',
      title: 'Buenos Chamacos',
      artists: 'Yomil y el Dany',
      link: 'https://www.youtube.com/watch?v=KhgsUF5I2EQ',
    },
    {
      date: '7/28/21',
      title: 'Artificial (Cap.3)',
      artists: 'Liam',
      link: 'https://www.youtube.com/watch?v=XfBrGD3yw-Q',
    },
    {
      date: '6/25/21',
      title: 'Lógico (Cap.2)',
      artists: 'Liam',
      link: 'https://www.youtube.com/watch?v=LpuGma-odUs',
    },
    {
      date: '6/18/21',
      title: 'Mujeres',
      artists: 'Rome y Len ft Alex Duval',
      link: 'https://www.youtube.com/watch?v=dmkr_kiTIac',
    },
    {
      date: '6/4/21',
      title: 'Frágil (Cap.1)',
      artists: 'Liam',
      link: 'https://www.youtube.com/watch?v=YcwneaknsLw',
    },
    {
      date: '5/21/21',
      title: 'Luna',
      artists: 'Danny & Carlos Diaz',
      link: 'https://www.youtube.com/watch?v=9N-MEjRUvgE',
    },
    {
      date: '5/14/21',
      title: 'Si Nos Ven Por Ahí',
      artists: 'El Charly & Qva Libre',
      link: 'https://www.youtube.com/watch?v=OjUIhR6lGFA',
    },
    {
      date: '3/26/21',
      title: 'Primera Cita',
      artists: 'Danny & Carlos Diaz',
      link: 'https://www.youtube.com/watch?v=SwGb6fDmzWU',
    },
    {
      date: '3/5/21',
      title: 'Me Estoy Curando',
      artists: 'Alex Duvall, Jacob Forever',
      link: 'https://www.youtube.com/watch?v=rHhGQbv9zno',
    },
    {
      date: '2/14/21',
      title: 'Con Otro Amor',
      artists: 'Rome y Len ft Divan',
      link: 'https://www.youtube.com/watch?v=r_Z8GY3dtJU',
    },
    {
      date: '2/3/21',
      title: 'Dame la verde',
      artists: 'Alex Duvall',
      link: 'https://www.youtube.com/watch?v=wMQ-ObQOLog',
    },
    {
      date: '1/8/21',
      title: 'Fayer',
      artists: 'Alex Duvall ft Denver',
      link: 'https://www.youtube.com/watch?v=buovNriPvew',
    },
    {
      date: '12/18/20',
      title: 'Sola',
      artists: 'Dj Unic, Hanssel',
      link: 'https://www.youtube.com/watch?v=zLB5iJ4FdcA',
    },
    {
      date: '11/13/20',
      title: 'Tequila',
      artists: 'Alex Duvall',
      link: 'https://www.youtube.com/watch?v=y1aYe-5aJd8',
    },
    {
      date: '10/30/20',
      title: 'Dura Magaly',
      artists: 'Dj Unic, Yomil y El Dany, Wow Popy',
      link: 'https://www.youtube.com/watch?v=B2ntMkRk9Zk',
    },
    {
      date: '10/16/20',
      title: 'Adicción a ti',
      artists: 'Liana Milanés',
      link: 'https://www.youtube.com/watch?v=oS0QqWPxOCE',
    },
    {
      date: '10/16/20',
      title: 'De amor no se ha muerto nadie',
      artists: 'Yomil y el Dany, El Micha',
      link: 'https://www.youtube.com/watch?v=Byw7TmBRMMo',
    },
    {
      date: '10/16/20',
      title: 'La Boda',
      artists: 'JG, Alex Duvall',
      link: 'https://www.youtube.com/watch?v=1P2f_FkAzQo',
    },
    {
      date: '9/25/20',
      title: 'Preguntas ',
      artists: 'Alex Duvall',
      link: 'https://www.youtube.com/watch?v=Wg01YEVwxQo',
    },
    {
      date: '8/21/20',
      title: 'Algo Pendiente',
      artists: 'DENVER',
      link: 'https://www.youtube.com/watch?v=2sv7foeHe4w',
    },
    {
      date: '8/6/20',
      title: 'Tengo Una Pila',
      artists: 'Yomil y el Dany, Kimiko y Yordy',
      link: 'https://www.youtube.com/watch?v=FUJc926DOLw',
    },
    {
      date: '6/23/20',
      title: 'La Habana me Llama',
      artists: 'LOS 4',
      link: 'https://www.youtube.com/watch?v=OH81MP-Dj4c',
    },
    {
      date: '5/15/20',
      title: 'Polea',
      artists: 'Alex Duvall',
      link: 'https://www.youtube.com/watch?v=sVBz3ZRI_Z8',
    },
    {
      date: '4/3/20',
      title: 'Dueño De Que?',
      artists: 'JULY ROBY, LENIER, DIVAN',
      link: 'https://www.youtube.com/watch?v=S3NzyxvNeFo',
    },
    {
      date: '3/25/20',
      title: 'El Mentiroso',
      artists: 'Enzo, Chacal',
      link: 'https://www.youtube.com/watch?v=gN_Jojdi7Xg',
    },
    {
      date: '11/8/19',
      title: 'La Peque',
      artists: 'Descemer Bueno, Ulises Bueno',
      link: 'https://www.youtube.com/watch?v=Iv2KTMJRkDU',
    },
    {
      date: '9/28/19',
      title: '¡Qué Calor!',
      artists: 'Qva Libre',
      link: 'https://www.youtube.com/watch?v=ifSxy4XvHZg',
    },
    {
      date: '9/27/19',
      title: 'Mi Habana',
      artists: 'Descemer Bueno, Diana Fuentes & El Ruzzo',
      link: 'https://www.youtube.com/watch?v=EvkvfG84pnY',
    },
    {
      date: '7/5/19',
      title: 'Lo De Nosotros',
      artists: 'Alex Duvall, El Chulo',
      link: 'https://www.youtube.com/watch?v=XMrETOdSRSI',
    },
    {
      date: '6/7/19',
      title: 'Mis Ex',
      artists: 'Alex Duvall',
      link: 'https://www.youtube.com/watch?v=U9Rs80CoFGw',
    },
    {
      date: '5/17/19',
      title: 'El Bombazo',
      artists: 'Alex Duvall, Yomil y el Dany',
      link: 'https://www.youtube.com/watch?v=kVOFRptMARE',
    },
    {
      date: '4/2/19',
      title: '4 Cosas',
      artists: 'Yomil Y El Dany feat. Harryson',
      link: 'https://www.youtube.com/watch?v=t-NHJ4HL-BQ',
    },
    {
      date: '3/29/19',
      title: 'Hoy Lo Que Toca Es Party',
      artists: 'Alex Duvall, Chacal',
      link: 'https://www.youtube.com/watch?v=K2w3n921BLs',
    },
    {
      date: '12/21/18',
      title: 'Yo Espero',
      artists: 'Yomil y el Dany',
      link: 'https://www.youtube.com/watch?v=u7dZkzUcoQE',
    },
    {
      date: '9/14/18',
      title: 'Puchunguita',
      artists: 'Alex Duvall, El Enviado',
      link: 'https://www.youtube.com/watch?v=SE2QYYqpnfc',
    },
    {
      date: '8/11/18',
      title: 'Amor Prohibido',
      artists: 'Qva Libre',
      link: 'https://www.youtube.com/watch?v=Z-XNDUIziOw',
    },
  ],
  filter: '',  
};

initialState.filterList = initialState.videoclips;

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

  const filterVideoclips = (filter) => {
    if (filter === '') {
      const allvideos = state.videoclips;
      setState({
        ...state,
        filterList: allvideos,
        filter: '',
      });
    }
    const filteredVideoclips = state.videoclips.filter((videoclip) => {
      return (
        videoclip.title.toLowerCase().includes(filter.toLowerCase()) ||
        videoclip.artists.toLowerCase().includes(filter.toLowerCase())
      );
    });
    return filteredVideoclips;
  };

  const getVideoclipsByLimitAndOffset = (limit, offset) => {
    const sortedVideoclips = state.videoclips.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    return sortedVideoclips.slice(offset, offset + limit);
  };

  const setFilter = (filter) => {
    setState({
      ...state,
      filter: filter,
      filterList: filterVideoclips(filter),
    });
  };

  return {
    state,
    setState,
    getRecentVideoclips,
    getAllVideoclips,
    getVideoclip,
    addVideoclip,
    updateVideoclip,
    deleteVideoclip,
    filterVideoclips,
    getVideoclipsByLimitAndOffset,
    setFilter,
  };
};

export default useInitialState;
