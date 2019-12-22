var course_Url ="http://saral.navgurukul.org/api/courses"
var data = require("axios")
const readlineSync = require('readline-sync');

let id_num;
let slug_id_num;
function myFunction(saral_data) {
  var b = data.get(saral_data)
  return b;
}

var x = myFunction(course_Url);
// console.log(x);

var promise = new Promise((resolve, reject) => {
    resolve(x);
    reject(err);
    
})
promise.then((result)=>{
  course_data=(result.data.availableCourses)
  // console.log(course_data)
  id_array=[]
  var i;

  for (i = 0; i <course_data.length; i++){
    index=(course_data[i])
    courses_name=index.name
    
    // console.log (courses_name)
    courses_id=index.id
    id=id_array.push(courses_id);
    console.log(courses_name,".............",courses_id)
    // console.log (courses_id)
    // return (couses_name)
  }

return(id_array)

}).then((courses_Id_Array)=>{
var userName = readlineSync.question("Enter your Course Id");
id_num=(courses_Id_Array[userName-1]);
console.log(id_num)


exercise_url= "http://saral.navgurukul.org/api/courses/"+id_num+"/exercises"
Url_data_2= data.get(exercise_url)
return (Url_data_2)
})
.then((paricular_exercises)=>{
  console.log(paricular_exercises)
  exercise_data = paricular_exercises.data.data
  console.log(exercise_data)

  index=0
  slug_list=[]
  for (index = 0; index < exercise_data.length; index++){
      exercises_name=exercise_data[index]
      
      console.log (exercises_name.name)
      console.log("-------------------------------------------------------")
      exercise_slug=(exercises_name.slug)
      slug_list.push(exercise_slug);
  
    count=0
    child_slug_list=[]
    for(count=0;count<exercises_name.childExercises.length;count++){
      child_exercise_name=exercises_name.childExercises[count]
      console.log("\t",child_exercise_name.name)
      exercise_slug=(child_exercise_name.slug)
      child_slug_list.push(exercise_slug)
    }
  }
console.log(slug_list)
console.log(child_slug_list)
// input for slug_data.
var userName_2 = readlineSync.question("Enter the slug_numnber");
slug_id_num=(slug_list[userName_2-1]);
// console.log(slug_id_num)
// console.log(id_num,slug_id_num)
content_Url="http://saral.navgurukul.org/api/courses/"+id_num+"/exercise/getBySlug?slug="+(slug_id_num)
Url_data_3= data.get(content_Url)
return(Url_data_3)

})
  
.then((get_content) => {
  console.log(get_content.data['content'])

}).catch((err)=>{ 
  console.log(err)
})
