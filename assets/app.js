function removeDays(){
    let userSelectMonth = document.getElementById("user_month").value;
    if(userSelectMonth == 1 || userSelectMonth == 3 || userSelectMonth == 5 || userSelectMonth == 8 || userSelectMonth == 10){
        document.getElementById("thirty_one").style.display = "none";
    }else{
        document.getElementById("thirty_one").style.display = "block";
    };
    if(userSelectMonth == 1){
        document.getElementById("thirty").style.display = "none";
        document.getElementById("twoenty_nine").style.display = "none";
    }else{
        document.getElementById("thirty").style.display = "block";
        document.getElementById("twoenty_nine").style.display = "block";
    };
};
function threecalljs(){
    let userSelectMonth = document.getElementById("user_month").value;
    let userSelectDay = document.getElementById("user_day").value;
    let userInputYear = document.getElementById("user_year").value;
    let userDate = new Date(userInputYear, userSelectMonth, userSelectDay).getTime();
    let dateMilisecond = Date.now() - userDate;
    let userBirthDate = new Date(dateMilisecond);
    let userBirthMonth = userBirthDate.getMonth() - 0;
    let userBirthDay = userBirthDate.getDate() - 1;
    let userBirthYear = userBirthDate.getFullYear() - 1970;
    let ifUserInputYearNull = "দয়া করে বছর (year) সংখ্যা দিন ।";
    let ifUserInputWrongYear = "আপনার দেয়া বছর (year) এর সংখ্যা ভুল ।";
    let ifUserInputYearString = "আপনি বছর (year) এর জাগায় নাম্বার দেন নি । দয়া করে নাম্বার দিন";
    let nid_link = `<a href="https://services.nidw.gov.bd/nid-pub/register-account" id="nid_application_url" target="_blank">ক্লিক করুন</a>`;
    let seniorAdultPerson = `আপনি তো একজন প্রাপ্তবয়স্ক নাগরিক আপনার হয়তো আগে থেকেই জাতীয় পরিচয়পত্র রয়েছে । যদি না থেকে থাকে তা হলে আবেদনের জন্য ${nid_link}`;
    let adultPerson = `আপনি একজন প্রাপ্তবয়স্ক ব্যক্তি । জাতীয় পরিচয়পত্র আবেদনের জন্য ${nid_link}`;
    let childPerson = `আপনি এখন ও প্রাপ্তবয়স্ক হননি । জাতীয় পরিচয়পত্র আবেদনের জন্য`;
    let ifYearNaN = Number(userInputYear);
    if(userInputYear == "" || userInputYear == null){
        document.getElementById("output").innerHTML = ifUserInputYearNull;
    }else{
        if(userInputYear == 0){
            document.getElementById("output").innerHTML = ifUserInputWrongYear;
        }else{
            if(isNaN(ifYearNaN)){
                document.getElementById("output").innerHTML = ifUserInputYearString;
            }else{
                let userNidApplication =  userBirthYear >= 18 ? userBirthYear >= 36 ? seniorAdultPerson : adultPerson : childPerson;
                let userOutputBirthday = `আপনার বয়স ${userBirthYear} বছর ${userBirthMonth} মাস ${userBirthDay} দিন`;
                document.getElementById("output").innerHTML = userOutputBirthday;
                document.getElementById("nid_application_output").innerHTML = userNidApplication;
            };
        };
    };
};