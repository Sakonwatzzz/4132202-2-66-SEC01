
    var num  =10
    let name = "tt"
    age = 20;

    fruit = ["apple","mango","tangmo"];
    obj = {name:"jmn", age:"20", Phone:"9988456"}

    data ={adress:["96","jira","Buriram",3100],name:"tomm"};


    console.log(fruit[1]);
    console.log(obj.Phone);
    console.log(data.name[2]);

    document.getElementById("msg").innerHTML = data.adress[2];
    let longTxt = data.name + " : " + fruit[0];

    longTxt = `${data.name} : 
             ${fruit[1]}`; 
    $(function(){
        $("#msg").html(longTxt);
    });//jQuery ready
