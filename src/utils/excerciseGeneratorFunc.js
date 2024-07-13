import ExerciseCards from "../components/ExceriseCards";
import { EXERCISES } from "./soldier"


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function excerciseGenerator(Intensity, exerciseArray){

    if (exerciseArray.length === 1){
        const CompoundExercises1 = []
        const AccessoryExercises1 = []
        const finalExcerciselist = []
        for (const i in EXERCISES){
            if (EXERCISES[i]['muscles'].includes(exerciseArray[0]) && EXERCISES[i]['type'] === 'compound'){
                CompoundExercises1.push({...EXERCISES[i], name: i})
            }
            else if(EXERCISES[i]['muscles'].includes(exerciseArray[0]) && EXERCISES[i]['type'] === 'accessory'){
                AccessoryExercises1.push({...EXERCISES[i], name: i }) 
            }
        }
        const shuffledCompoundExercises1 = shuffleArray(CompoundExercises1);
        const shuffledAccessoryExercises1 = shuffleArray(AccessoryExercises1);
        for (var i=0; i<5; i++){
            if (shuffledCompoundExercises1.length > 0 && i < 2){
                finalExcerciselist.push(shuffledCompoundExercises1[i])
            }else{
                finalExcerciselist.push(shuffledAccessoryExercises1[i]) 
            }
            
        }
        return [finalExcerciselist]
    }
    else{
        console.log('ElsePART EXCEUTED')
    }
}