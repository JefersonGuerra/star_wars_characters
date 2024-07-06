'use client'
import { useEffect, useState } from "react";
import { Crown } from "lucide-react";

export default function Favorite({ data, status }: Props) {

    const [statusFavorite, setStatusFavorite] = useState<boolean>(status);

    function favoriteCharacters() {

        let localSave = localStorage.getItem("favoriteCharacters");

        if (localSave === null) {
            const favoriteCharacters = [data];
            localStorage.setItem("favoriteCharacters", JSON.stringify(favoriteCharacters));
            setStatusFavorite(true)
        } else {
            localSave = JSON.parse(localSave);
            localStorage.setItem("favoriteCharacters", JSON.stringify(localSave?.concat(data)));
            setStatusFavorite(true)
        }

    }

    function removeFavoriteCharacters() {

        let localSave = localStorage.getItem("favoriteCharacters");

        if (localSave) {
            localStorage.setItem("favoriteCharacters", JSON.stringify(JSON.parse(localSave).filter((item: any) => item.url !== data.url)));
            setStatusFavorite(false)
        }
    }

    useEffect(() => {
        setStatusFavorite(status)
    }, [status])


    return (
        <div className="drop-shadow-2xl" title={statusFavorite ? 'Remove favorite' : 'Add favorite'}>
            <Crown onClick={statusFavorite ? removeFavoriteCharacters : favoriteCharacters} className={`w-[30px] h-[30px] mt-[5px] mr-[15px] float-right cursor-pointer hover:text-color_14 hover:opacity-[1] ${statusFavorite ? 'text-color_14' : 'opacity-[0.6]'}`} />
        </div>
    )
}

interface Props {
    data: any,
    status: boolean
}