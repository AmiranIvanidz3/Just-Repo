let loop = sessionStorage.getItem("number")
let tan_i = []
let describe_i = []
let start_i = []
let end_i = []
let employe_i = []

function getInformations(element,arr){
    for(let i =0; i< loop; i++){
        console.log(sessionStorage.getItem(`${element}${i}`))
        arr.push(sessionStorage.getItem(`${element}${i}`))
    }

}
getInformations(".tan-i",tan_i)
getInformations(".describe-i",describe_i)
getInformations("start-i", start_i)
getInformations(".end-i", end_i)
getInformations(".employe-i", employe_i)



const data ={
    "name": sessionStorage.getItem("name"),
    "surname": sessionStorage.getItem("lName"),
    "email":   sessionStorage.getItem("mail"),
    "phone_number": "+995"+sessionStorage.getItem("phone"),
    "experiences": [
      {
        "position": "back-end developer",
        "employer": "Redberry",
        "start_date": "2019/09/09",
        "due_date": "2020/09/23",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare nunc dui, a pellentesque magna blandit dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis diam nisi, at venenatis dolor aliquet vel. Pellentesque aliquet leo nec tortor pharetra, ac consectetur orci bibendum."
      }
    ],
    "educations": [
      {
        "institute": "თსუ",
        "degree": "სტუდენტი",
        "due_date": "2017/06/25",
        "description": "სამართლის ფაკულტეტის მიზანი იყო მიგვეღო ფართო თეორიული ცოდნა სამართლის არსის, სისტემის, ძირითადი პრინციპების, სამართლებრივი სისტემების, ქართული სამართლის ისტორიული წყაროების, კერძო, სისხლის და საჯარო სამართლის სფეროების ძირითადი თეორიების, პრინციპებისა და რეგულირების თავისებურებების შესახებ."
      }
    ],
    "image": "/storage/images/0rI7LyNRJRrokoSKUTb9EKvNuyYFKOvUmDQWoFt6.png",
    "about_me": "ეს არის აღწერა ჩემს შესახებ"
  }
  console.log(data['experiences'] = {
    "position": "back-end ",
    "employer": "Redberry",
    "start_date": "2019/09/09",
    "due_date": "2020/09/23",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare nunc dui, a pellentesque magna blandit dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis diam nisi, at venenatis dolor aliquet vel. Pellentesque aliquet leo nec tortor pharetra, ac consectetur orci bibendum."
  })
console.log(data)
  const formData = new FormData();
  const personal = document.getElementById('personal-form');
  const experience = document.getElementById('experience-form');
  const genshin =  new FormData(personal)
  console.log(genshin)
  const edu = document.getElementById('edu-form');
  
 
  
