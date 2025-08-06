 const coding = ["JS", "Python", "Java", "C++", "Ruby"];

 coding.forEach(function (val){                        
    console.log(val);
 })
  // we  can use arrow function as well coding.foreach((item) => {   })


 //other way to write the above code
 function printme(item){
    console.log(item);

 }
 coding.forEach(printme); // we can use arrow function as well coding.forEach((item) => { console.log(item); })


 //other way to write the above code
    coding.forEach((item, index, arr) => {
        console.log(item, index, arr);
    });


    const mycoding =[
        {
            languagename : "JS",
            langfilename : "js.js",

        },
        {
            languagename : "Python",
            langfilename : "python.py",
        },
        {
            languagename : "Java",
            langfilename : "java.java",     
        }
    ]

    mycoding.forEach((item) => {
        console.log(item.languagename)
    })



    const arr = [1, 2, 3, 4, 5];

    arr.forEach( (val)=> {    //arr.forEach(function(val) {}
        console.log(val);
    })