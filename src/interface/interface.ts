export interface ICard {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  my_rate?: number;
}

export interface IGenre {
  id: number;
  name: string;
}

export const firstCard: ICard = {
  adult: false,
  backdrop_path: '/5bo8PEYnYibOLwEOv5u2Grd0u4R.jpg',
  genre_ids: [10752],
  id: 635744,
  original_language: 'en',
  original_title: 'Jarhead: Law of Return',
  overview:
    "Major Ronan Jackson (Devon Sawa), an accomplished fighter pilot for the Israel Defense Forces and son of a U.S. Senator (Robert Patrick), is shot down while flying through Syrian airspace. After miraculously surviving the crash, Jackson is taken captive by a group of Hezbollah militiamen. A gripping and powerful story packed with hard-hitting action, Jarhead: Law of Return follows a squad of elite soldiers, led by Gunnery Sergeant Dave Torres (Amaury Nolasco), as they risk their own lives in the hopes of saving an ally they've never met.",
  popularity: 89.571,
  poster_path: '/6LlqyjAik3Kh68QQ9AchSJEF0Z5.jpg',
  release_date: '2019-10-01',
  title: 'Jarhead: Law of Return',
  video: false,
  vote_average: 6.4,
  vote_count: 508,
};
