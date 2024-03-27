import instance from "@/config/axios";

export default async function addExercice(name) {
    await new Promise(res => {
        console.log(name)
        setTimeout(res, 2000)
        instance.post('/api/exercice', {
            name: name
        }).catch(err => console.log(err))
    })
}