'use server'
import api from "@/services/api";

export async function getCharacters(page?: number) {

    if (!page) {
        page = 1;
    }

    return (
        await api.get('/', {
            params: { page },
        }).then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.error(error);
        })
    )
}
