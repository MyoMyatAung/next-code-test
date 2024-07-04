export interface Playlist {
    name: string;
    slug: string;
    trackCount: number;
    desc: string;
    img: string;
}

export const playlist: Playlist[] = [
    {
        img: '/assets/images/playlist-1.jpg',
        name: 'Free mood',
        slug: 'BEASTPULSE',
        trackCount: 8,
        desc: 'Beat playlist to your ear feel the cheer, Relaxing dreaming whatever it is next text.'
    },
    {
        img: '/assets/images/playlist-2.jpg',
        name: 'Food style',
        slug: 'CREATOR PLAYLIST',
        trackCount: 12,
        desc: 'ETA all day all night all time'
    },
    {
        img: '/assets/images/playlist-3.jpg',
        name: 'take me to your home whatever blah blah',
        slug: 'CREATOR PLAYLIST',
        trackCount: 20,
        desc: 'LOVE IS OUR'
    },
    {
        img: '/assets/images/playlist-4.jpg',
        name: 'Catch me',
        slug: 'CREATOR PLAYLIST',
        trackCount: 10,
        desc: 'Sexy mood'
    },
    {
        img: '/assets/images/playlist-5.jpg',
        name: 'Hunny come back',
        slug: 'CREATOR PLAYLIST',
        trackCount: 12,
        desc: ''
    },
    {
        img: '/assets/images/playlist-4.jpg',
        name: 'Keep it up up',
        slug: 'BEASTPULSE',
        trackCount: 20,
        desc: 'Where ever you go are this rhythm'
    },
    {
        img: '/assets/images/playlist-5.jpg',
        name: 'Gray',
        slug: 'BEASTPULSE',
        trackCount: 20,
        desc: 'Gray mode'
    }
]