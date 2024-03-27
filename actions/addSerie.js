import instance from "@/config/axios";

export default async function addSerie(reps, poids, seanceId, exerciceId){
    await instance.post('/api/serie', {
        serie_reps: reps,
        serie_poids: poids,
        seanceId: seanceId,
        exerciceId: exerciceId
    }).catch(err => console.log(err))
}
