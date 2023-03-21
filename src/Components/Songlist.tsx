import axios from "axios";
import { FC, useEffect, useState } from "react";
import { PlayerState, Song } from "../Types/Types";
import SongItem from "./SongItem";
import "./Songlist.css";

interface ISongListProps {
    player: PlayerState,
    setPlayer: React.Dispatch<React.SetStateAction<PlayerState>>,
};

const Songlist: FC<ISongListProps> = ({ setPlayer, player }) => {
    const [listOfSongs, setSongs] = useState<Song[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + '/api/Songs')
            .then(resp => setSongs(resp.data));
    }, []);


    const onDeleteHandler = (id: string) => {
        axios.delete(import.meta.env.VITE_API_URL + '/api/Songs/' + id)
            .then(resp => setSongs(listOfSongs.filter(song => song.id !== id)));
    };

    return (
        <div className="songlist-container">
            {listOfSongs.map(song => (<SongItem player={player} onDeleteHandler={onDeleteHandler} setPlayer={setPlayer} key={song.id} song={song} />))}
        </div>
    );
}


export default Songlist;