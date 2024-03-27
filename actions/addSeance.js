import instance from "@/config/axios";

export default async function addSeance(userId) {
    await instance.post('/api/seance', {
        idUser: userId
    }).catch(err => console.log(err))
}