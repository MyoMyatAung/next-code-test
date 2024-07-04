import { Genre } from "./genres";

export interface Song {
    title: string;
    artist: string;
    duration: string;
    bpm: number;
    maj: string;
    generes: Genre[];
    isNew?: boolean;
}

export const songs: Song[] = [
    {
        title: "Making love out of nothing at all",
        artist: "Air Supply",
        duration: "5:42",
        bpm: 164,
        generes: [{ label: "Rock", query: "rock" }, { label: "Classic", query: "classic" }, { label: "Pop", query: "pop" }],
        maj: "C",
        isNew: true
    },
    {
        title: "Hotel California",
        artist: "Eagles",
        duration: "6:31",
        bpm: 180,
        generes: [{ label: "Rock", query: "rock" }, { label: "Classic", query: "classic" }, { label: "Pop", query: "pop" }],
        maj: "G",
        isNew: false
    },
    {
        title: "You Give Love A Bad Name",
        artist: "Bon Jovi",
        duration: "3:43",
        bpm: 156,
        generes: [{ label: "Rock", query: "rock" }, { label: "Classic", query: "classic" }, { label: "Pop", query: "pop" }],
        maj: "F",
        isNew: false
    },
    {
        title: "Every Breath You Take",
        artist: "The Police",
        duration: "4:14",
        bpm: 167,
        generes: [{ label: "Rock", query: "rock" }, { label: "Classic", query: "classic" }, { label: "Pop", query: "pop" }],
        maj: "C",
        isNew: false
    }
]