let loop = sessionStorage.getItem("number")
let experiences = []
   for(let i = 0; i< loop; i++){
     let list = {
        position : sessionStorage.getItem(`tan-i${i}`),
        employer: sessionStorage.getItem(`employe-i${i}`),
        start_date :sessionStorage.getItem(`start-i${i}`) ,
        end_date: sessionStorage.getItem(`end-i${i}`),
        description: sessionStorage.getItem(`describe-i${i}`)
   }
   experiences.push(list)
}

let education = []
   for(let i = 0; i< loop; i++){
     let list = {
        institute : sessionStorage.getItem(`right-collage${i}`),
        degree: sessionStorage.getItem(`right-quality${i}`),
        due_date :sessionStorage.getItem(`right-endDate${i}`) ,
        description: sessionStorage.getItem(`right-tell${i}`)
        
   }
   education.push(list)
}


const formData = new FormData();
formData.append("name", sessionStorage.getItem("name"));
formData.append("surname",sessionStorage.getItem("lName"));
formData.append("email", sessionStorage.getItem("mail"));
formData.append("phone_number", "+995"+sessionStorage.getItem("phone"));
formData.append("experiences", JSON.stringify(experiences));
formData.append("educations", JSON.stringify(education));
formData.append("image", sessionStorage.getItem("imageData"));
formData.append("about_me",sessionStorage.getItem("about"));
console.log(formData);
const apiUrl = "https://resume.redberryinternship.ge/api/cvs";


async function x(){
    const response = await fetch(
    "https://resume.redberryinternship.ge/api/cvs",
    {
      method: "POST",
      body: formData,
      mode:'no-cors'
    }
  );
  const data = await response.json();
    console.log(data)
}
x()
   