var courses_Url ="http://saral.navgurukul.org/api/courses"
var request = require("axios")
const readlineSync = require('readline-sync');

let courses_id_num;
let slug_id_num;
function courses_data(saral_data) {
  var courses_data = data.get(saral_data)
  return b;
}

var whole_data = courses_data(courses_Url);


var promise = new Promise((resolve, reject) => {
    resolve(whole_data)
    reject(err);
    
})
promise.then((result)=>{
  course_data=(result.data.availableCourses)
  // console.log(course_data)
  id_array=[]
  var count;
     
  for (count = 0; count <course_data.length; count++){
    index=(course_data[count])
    courses_name=index.name
    courses_id=index.id
    id=id_array.push(courses_id);
    console.log(courses_name,".............",courses_id)
    // return (couses_name)
  }

return(id_array)

}).then((courses_Id_Array)=>{
var user_choice = readlineSync.question("Enter your Course Id");
courses_id_num=(courses_Id_Array[user_choice-1]);
console.log(courses_id_num)


exercise_url= "http://saral.navgurukul.org/api/courses/"+id_num+"/exercises"
data_by_id= data.get(exercise_url)
return (data_by_id)
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
var user_slug = readlineSync.question("Enter the slug_numnber");
slug_id_num=(slug_list[user_slug-1]);

content_Url="http://saral.navgurukul.org/api/courses/"+courses_id_num+"/exercise/getBySlug?slug="+(slug_id_num)
content_data= data.get(content_Url)
return(content_data)

})
  
.then((get_content) => {
  console.log(get_content.data['content'])

}).catch((err)=>{ 
  console.log(err)
})