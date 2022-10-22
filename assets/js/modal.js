const timetable = document.getElementById('tablewrapper');
const todaytimetable = document.getElementById('todayclass');
const courses = document.getElementById('courses');
const departmen = document.getElementById('navbar');
const downloadb = document.getElementById('downloadwrapper');
const submit = document.getElementById('lsubmit');
const matric = document.getElementById('lmatric');
const pagew = document.getElementById('pagewrapper');
const lpagew = document.getElementById('lpagewrapper');
const inc = document.getElementById('incorrect');
const empty = document.getElementById('empty');
const bgimg = document.getElementById('view');
date = new Date();

submit.addEventListener("click", function(e){
    e.preventDefault();
})
matric.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
        event.preventDefault();
        myfunction(); 
    }
});
function myfunction(){
    department = matric.value;
    var s = department;
    var rx = /[a-z]/gi;
    var rxn = /[0-9]/gi;
    var m = s.match(rx);
    var n = s.match(rxn);
    if(department.search(/CPE/i) > -1 && m.length > 5 && n.length > 5){
        lpagew.style.position = "absolute";
        lpagew.classList.add("animate__backOutUp");
        pagew.classList.add("animate__backInUp");
        pagew.style.display = "block";
        inc.style.display = "none";
        empty.style.display = "none";
        let departmentz = `<h1>RUN 300LVL COMPUTER ENGINEERING<h1>`;
        departmen.innerHTML = departmentz;
        bgimg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(./assets/img/umberto-jXd2FSvcRr8-unsplash.jpg)";
        let download = `<button class="download"><a href="../runcpe practice/assets/files/Time-Table for the Semester.pdf" download="Time-Table for the Semester">Download PDF</a></button>`; 
        downloadb.innerHTML = download;

        let timeTable = [
            {
                Day : 'Monday',
                Period1 : "MEE 202",
                Period2 : "MEE 202",
                Period3 : "COMPUTER",
                Period4 : "MTH 222",
                Period5 : " ",
                Period6 : "MEE 204",
                Period7 : "MEE 204",
                Period8 : " ",
                Period9 : " ",
                Period10 : " ",
            },
            {
                Day : 'Tuesday',
                Period1 : " ",
                Period2 : " ",
                Period3 : "CVE 206",
                Period4 : "CVE 206",
                Period5 : " ",
                Period6 : "MEE 208",
                Period7 : "MEE 208",
                Period8 : " ",
                Period9 : " ",
                Period10 : " ",
            },
            {
                Day : 'Wednesday',
                Period1 : "CPE 202",
                Period2 : "CPE 202",
                Period3 : "EEE 202",
                Period4 : "EEE 202",
                Period5 : " ",
                Period6 : " ",
                Period7 : " ",
                Period8 : " ",
                Period9 : " ",
                Period10 : "GST 210 ",
            },
            {
                Day : 'Thursday',
                Period1 : "MEE 204",
                Period2 : "GIT 204 (ELECT)",
                Period3 : "CPE 202",
                Period4 : "GIT 204 (CIVIL)",
                Period5 : " ",
                Period6 : "EEE 202",
                Period7 : " ",
                Period8 : " ",
                Period9 : " ",
                Period10 : " ",
            },
            {
                Day : 'Friday',
                Period1 : " ",
                Period2 : "MTH 222",
                Period3 : "MTH 222",
                Period4 : " ",
                Period5 : " ",
                Period6 : " ",
                Period7 : " ",
                Period8 : " ",
                Period9 : "GIT 204 (MECH)",
                Period10 : " ",
            }
            ]
            
        var table = "";
        for(let i=0; i < timeTable.length; i++)
        {        
            table += `
                <tr>
                        <td style = "text-align: left;"> ${timeTable[i].Day}</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                </tr>
                `
            timetable.innerHTML = table; 
        }
        
        // ----------------------------------- Daily Time Table Creation -----------------------------------
        weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        date = new Date();
        today = weekday[date.getDay()];
        
        if(today == "Monday"){
            table = "";
            i=0;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["MEE 202", "MEE 202", "None", "MTH 222", "None", "MEE 204", "MEE 204", "None", "None", "None"];
        };
        if(today == "Tuesday"){
            table = "";
            i=1;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["None", "None", "CVE 206", "CVE 206", "None", "MEE 208", "MEE 208", "None", "None", "None"];
        };
        if(today == "Wednesday"){
            table = "";
            i=2;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["CPE 202", "CPE 202", "EEE 202", "EEE 202", "None", "None", "None", "None", "None", "GST 210"];
        };
        if(today == "Thursday"){
            table = "";
            i=3;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["MEE 204", "GIT 204 (ELECT)", "CPE 202", "GIT 204 (CIVIL)", "None", "EEE 202", "None", "None", "None", "None"];
        };
        if(today == "Friday"){
            table = "";
            i=4;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["None", "MTH 222", "MTH 222", "None", "None", "None", "None", "None", "GIT 204 (MECH)", "None"];
        };
        if(today == "Sunday"){
            table = "";
            i=1;
            {        
                table = `
                    <p style = "text-align: left; margin-left: 50px;">There are no classes scheduled for today</p>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["None", "None", "None", "None", "None", "None", "None", "None", "None", "None"];
        };
        if(today == "Saturday"){
            table = "";
            i=1;
            {        
                table = `
                    <p style = "text-align: left; margin-left: 50px;">There are no classes scheduled for today</p>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["None", "None", "None", "None", "None", "None", "None", "None", "None", "None"];
        };

        // -------------------------------------- Courses for The Semester --------------------------------------
    let course = [
        {
            CourseCode : "EEE 305",
            CourseTitle : "COMPUTATION STRUCTURES I",
            Units : "3",
        },
        {
            CourseCode : "EEE 313",
            CourseTitle : "ENGINEERING ANALYSIS I",
            Units : "3",
        },
        {
            CourseCode : "CPE 303",
            CourseTitle : "LOW LEVEL LANGUAGE PROGRAMMING",
            Units : "3",
        },
        {
            CourseCode : "EEE 301",
            CourseTitle : "MICROELECTRONIC DEVICES AND CIRCUITS I",
            Units : "3",
        },
        {
            CourseCode : "EEE 309",
            CourseTitle : "SIGNALS AND SYSTEMS",
            Units : "3",
        },
        {
            CourseCode : "CPE 301",
            CourseTitle : "DIGITAL SYSTEM DESIGN WITH VHDL",
            Units : "2",
        },
        {
            CourseCode : "CPE 305",
            CourseTitle : "DIGITAL SYSTEM DESIGN LABORATORY",
            Units : "1",
        },
        {
            CourseCode : "GST 309",
            CourseTitle : "STUDIES IN LEADERSHIP V",
            Units : "1",
        },
        {
            CourseCode : "GIT 303",
            CourseTitle : "CISCO CERTIFIED NETWORK ASSOCIATE (CCNA) I",
            Units : "0",
        }
    ];
    var displaycourse = "";
    for(let n=0; n < course.length; n++)
    {        
        displaycourse += `
                            <div class="coursecontent">
                                <div style = "text-align: center;"> ${course[n].CourseCode}</div>
                                <div> ${course[n].CourseTitle}</div>
                                <div style = "text-align: center;"> ${course[n].Units}</div>
                            </div>
                        `
        courses.innerHTML = displaycourse; 
    };
    }else if(department.search(/MEE/i) > -1 && m.length > 5 && n.length > 5){
        lpagew.style.position = "absolute";
        lpagew.classList.add("animate__backOutUp");
        pagew.classList.add("animate__backInUp");
        pagew.style.display = "block";
        inc.style.display = "none";
        empty.style.display = "none";
        let departmentz = `<h1>RUN 300LVL MECHANICAL ENGINEERING<h1>`;
        departmen.innerHTML = departmentz;
        bgimg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(./assets/img/pavel-neznanov-w95Fb7EEcjE-unsplash.jpg)";
        let download = `<button class="download"><a href="../runcpe practice/assets/files/Time-Table for the Semester.pdf" download="Time-Table for the Semester">Download PDF</a></button>`; 
        downloadb.innerHTML = download;

        let timeTable = [
            {
                Day : 'Monday',
                Period1 : "MEE 202",
                Period2 : "MEE 202",
                Period3 : "MECHANICAL",
                Period4 : "MTH 222",
                Period5 : " ",
                Period6 : "MEE 204",
                Period7 : "MEE 204",
                Period8 : " ",
                Period9 : " ",
                Period10 : " ",
            },
            {
                Day : 'Tuesday',
                Period1 : " ",
                Period2 : " ",
                Period3 : "CVE 206",
                Period4 : "CVE 206",
                Period5 : " ",
                Period6 : "MEE 208",
                Period7 : "MEE 208",
                Period8 : " ",
                Period9 : " ",
                Period10 : " ",
            },
            {
                Day : 'Wednesday',
                Period1 : "CPE 202",
                Period2 : "CPE 202",
                Period3 : "EEE 202",
                Period4 : "EEE 202",
                Period5 : " ",
                Period6 : " ",
                Period7 : " ",
                Period8 : " ",
                Period9 : " ",
                Period10 : "GST 210 ",
            },
            {
                Day : 'Thursday',
                Period1 : "MEE 204",
                Period2 : "GIT 204 (ELECT)",
                Period3 : "CPE 202",
                Period4 : "GIT 204 (CIVIL)",
                Period5 : " ",
                Period6 : "EEE 202",
                Period7 : " ",
                Period8 : " ",
                Period9 : " ",
                Period10 : " ",
            },
            {
                Day : 'Friday',
                Period1 : " ",
                Period2 : "MTH 222",
                Period3 : "MTH 222",
                Period4 : " ",
                Period5 : " ",
                Period6 : " ",
                Period7 : " ",
                Period8 : " ",
                Period9 : "GIT 204 (MECH)",
                Period10 : " ",
            }
            ]
            
        var table = "";
        for(let i=0; i < timeTable.length; i++)
        {        
            table += `
                <tr>
                        <td style = "text-align: left;"> ${timeTable[i].Day}</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                </tr>
                `
            timetable.innerHTML = table; 
        }
        
        // ----------------------------------- Daily Time Table Creation -----------------------------------
        weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        date = new Date();
        today = weekday[date.getDay()];
        
        if(today == "Monday"){
            table = "";
            i=0;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["MEE 202", "MEE 202", "None", "MTH 222", "None", "MEE 204", "MEE 204", "None", "None", "None"];
        };
        if(today == "Tuesday"){
            table = "";
            i=1;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["None", "None", "CVE 206", "CVE 206", "None", "MEE 208", "MEE 208", "None", "None", "None"];
        };
        if(today == "Wednesday"){
            table = "";
            i=2;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["CPE 202", "CPE 202", "EEE 202", "EEE 202", "None", "None", "None", "None", "None", "GST 210"];
        };
        if(today == "Thursday"){
            table = "";
            i=3;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["MEE 204", "GIT 204 (ELECT)", "CPE 202", "GIT 204 (CIVIL)", "None", "EEE 202", "None", "None", "None", "None"];
        };
        if(today == "Friday"){
            table = "";
            i=4;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["None", "MTH 222", "MTH 222", "None", "None", "None", "None", "None", "GIT 204 (MECH)", "None"];
        };
        if(today == "Sunday"){
            table = "";
            i=1;
            {        
                table = `
                    <p style = "text-align: left; margin-left: 50px;">There are no classes scheduled for today</p>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["None", "None", "None", "None", "None", "None", "None", "None", "None", "None"];
        };
        if(today == "Saturday"){
            table = "";
            i=1;
            {        
                table = `
                    <p style = "text-align: left; margin-left: 50px;">There are no classes scheduled for today</p>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["None", "None", "None", "None", "None", "None", "None", "None", "None", "None"];
        };

        // -------------------------------------- Courses for The Semester --------------------------------------
    let course = [
        {
            CourseCode : "CVE 303",
            CourseTitle : "ADVANCED STRENGTH OF MATERIALS",
            Units : "3",
        },
        {
            CourseCode : "EEE 303",
            CourseTitle : "ELECTROMECHANICAL DEVICES",
            Units : "3",
        },
        {
            CourseCode : "EEE 313",
            CourseTitle : "ENGINEERING ANALYSIS I",
            Units : "3",
        },
        {
            CourseCode : "MEE 307",
            CourseTitle : "APPLIED THERMODYNAMICS",
            Units : "2",
        },
        {
            CourseCode : "MEE 301",
            CourseTitle : "MACHINE DRAWING I",
            Units : "2",
        },
        {
            CourseCode : "MEE 309",
            CourseTitle : "MANUFACTURING TECHNOLOGY",
            Units : "2",
        },
        {
            CourseCode : "MEE 305",
            CourseTitle : "MECHANICS OF MACHINES I",
            Units : "2",
        },
        {
            CourseCode : "MEE 395",
            CourseTitle : "MECHANICS OF MACHINES LABORATORY I",
            Units : "1",
        },
        {
            CourseCode : "GST 309",
            CourseTitle : "STUDIES IN LEADERSHIP V",
            Units : "1",
        },
        {
            CourseCode : "GIT 311",
            CourseTitle : "MATLAB PROGRAMMING I",
            Units : "0",
        }
    ];
    var displaycourse = "";
    for(let n=0; n < course.length; n++)
    {        
        displaycourse += `
                            <div class="coursecontent">
                                <div style = "text-align: center;"> ${course[n].CourseCode}</div>
                                <div> ${course[n].CourseTitle}</div>
                                <div style = "text-align: center;"> ${course[n].Units}</div>
                            </div>
                        `
        courses.innerHTML = displaycourse; 
    };
    }else if(department.search(/EEE/i) > -1 && m.length > 5 && n.length > 5){
        lpagew.style.position = "absolute";
        lpagew.classList.add("animate__backOutUp");
        pagew.classList.add("animate__backInUp");
        pagew.style.display = "block";
        inc.style.display = "none";
        empty.style.display = "none";
        let departmentz = `<h1>RUN 300LVL ELECTRICAL ENGINEERING<h1>`;
        departmen.innerHTML = departmentz;
        bgimg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(./assets/img/nicolas-thomas-3GZi6OpSDcY-unsplash.jpg)";
        let download = `<button class="download"><a href="../runcpe practice/assets/files/Time-Table for the Semester.pdf" download="Time-Table for the Semester">Download PDF</a></button>`; 
        downloadb.innerHTML = download;

        let timeTable = [
            {
                Day : 'Monday',
                Period1 : "MEE 202",
                Period2 : "MEE 202",
                Period3 : "ELECTRICAL",
                Period4 : "MTH 222",
                Period5 : " ",
                Period6 : "MEE 204",
                Period7 : "MEE 204",
                Period8 : " ",
                Period9 : " ",
                Period10 : " ",
            },
            {
                Day : 'Tuesday',
                Period1 : " ",
                Period2 : " ",
                Period3 : "CVE 206",
                Period4 : "CVE 206",
                Period5 : " ",
                Period6 : "MEE 208",
                Period7 : "MEE 208",
                Period8 : " ",
                Period9 : " ",
                Period10 : " ",
            },
            {
                Day : 'Wednesday',
                Period1 : "CPE 202",
                Period2 : "CPE 202",
                Period3 : "EEE 202",
                Period4 : "EEE 202",
                Period5 : " ",
                Period6 : " ",
                Period7 : " ",
                Period8 : " ",
                Period9 : " ",
                Period10 : "GST 210 ",
            },
            {
                Day : 'Thursday',
                Period1 : "MEE 204",
                Period2 : "GIT 204 (ELECT)",
                Period3 : "CPE 202",
                Period4 : "GIT 204 (CIVIL)",
                Period5 : " ",
                Period6 : "EEE 202",
                Period7 : " ",
                Period8 : " ",
                Period9 : " ",
                Period10 : " ",
            },
            {
                Day : 'Friday',
                Period1 : " ",
                Period2 : "MTH 222",
                Period3 : "MTH 222",
                Period4 : " ",
                Period5 : " ",
                Period6 : " ",
                Period7 : " ",
                Period8 : " ",
                Period9 : "GIT 204 (MECH)",
                Period10 : " ",
            }
            ]
            
        var table = "";
        for(let i=0; i < timeTable.length; i++)
        {        
            table += `
                <tr>
                        <td style = "text-align: left;"> ${timeTable[i].Day}</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                </tr>
                `
            timetable.innerHTML = table; 
        }
        
        // ----------------------------------- Daily Time Table Creation -----------------------------------
        weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        date = new Date();
        today = weekday[date.getDay()];
        
        if(today == "Monday"){
            table = "";
            i=0;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["MEE 202", "MEE 202", "None", "MTH 222", "None", "MEE 204", "MEE 204", "None", "None", "None"];
        };
        if(today == "Tuesday"){
            table = "";
            i=1;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["None", "None", "CVE 206", "CVE 206", "None", "MEE 208", "MEE 208", "None", "None", "None"];
        };
        if(today == "Wednesday"){
            table = "";
            i=2;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["CPE 202", "CPE 202", "EEE 202", "EEE 202", "None", "None", "None", "None", "None", "GST 210"];
        };
        if(today == "Thursday"){
            table = "";
            i=3;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["MEE 204", "GIT 204 (ELECT)", "CPE 202", "GIT 204 (CIVIL)", "None", "EEE 202", "None", "None", "None", "None"];
        };
        if(today == "Friday"){
            table = "";
            i=4;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["None", "MTH 222", "MTH 222", "None", "None", "None", "None", "None", "GIT 204 (MECH)", "None"];
        };
        if(today == "Sunday"){
            table = "";
            i=1;
            {        
                table = `
                    <p style = "text-align: left; margin-left: 50px;">There are no classes scheduled for today</p>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["None", "None", "None", "None", "None", "None", "None", "None", "None", "None"];
        };
        if(today == "Saturday"){
            table = "";
            i=1;
            {        
                table = `
                    <p style = "text-align: left; margin-left: 50px;">There are no classes scheduled for today</p>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["None", "None", "None", "None", "None", "None", "None", "None", "None", "None"];
        };

        // -------------------------------------- Courses for The Semester --------------------------------------
    let course = [
        {
            CourseCode : "EEE 305",
            CourseTitle : "COMPUTATION STRUCTURES I",
            Units : "3",
        },
        {
            CourseCode : "EEE 311",
            CourseTitle : "ELECTROMAGNETIC THEORY",
            Units : "3",
        },
        {
            CourseCode : "EEE 303",
            CourseTitle : "ELECTROMECHANICAL DEVICES",
            Units : "3",
        },
        {
            CourseCode : "EEE 313",
            CourseTitle : "ENGINEERING ANALYSIS I",
            Units : "3",
        },
        {
            CourseCode : "EEE 301",
            CourseTitle : "MICROELECTRONIC DEVICES AND CIRCUITS I",
            Units : "3",
        },
        {
            CourseCode : "EEE 309",
            CourseTitle : "SIGNALS AND SYSTEMS",
            Units : "3",
        },
        {
            CourseCode : "EEE 391",
            CourseTitle : "ELECTRONIC LABORATORY I",
            Units : "2",
        },
        {
            CourseCode : "EEE 307",
            CourseTitle : "GROUP DESIGN I",
            Units : "1",
        },
        {
            CourseCode : "GST 309",
            CourseTitle : "STUDIES IN LEADERSHIP V",
            Units : "1",
        },
        {
            CourseCode : "GIT 311",
            CourseTitle : "MATLAB PROGRAMMING I",
            Units : "0",
        }
    ];
    var displaycourse = "";
    for(let n=0; n < course.length; n++)
    {        
        displaycourse += `
                            <div class="coursecontent">
                                <div style = "text-align: center;"> ${course[n].CourseCode}</div>
                                <div> ${course[n].CourseTitle}</div>
                                <div style = "text-align: center;"> ${course[n].Units}</div>
                            </div>
                        `
        courses.innerHTML = displaycourse; 
    };
    }else if(department.search(/CVE/i) > -1 && m.length > 5 && n.length > 5){
        lpagew.style.position = "absolute";
        lpagew.classList.add("animate__backOutUp");
        pagew.classList.add("animate__backInUp");
        pagew.style.display = "block";
        inc.style.display = "none";
        empty.style.display = "none";
        let departmentz = `<h1>RUN 300LVL CIVIL ENGINEERING<h1>`;
        departmen.innerHTML = departmentz;
        bgimg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(./assets/img/mufid-majnun-h1kOzS2sGAk-unsplash.jpg)";
        let download = `<button class="download"><a href="../runcpe practice/assets/files/Time-Table for the Semester.pdf" download="Time-Table for the Semester">Download PDF</a></button>`; 
        downloadb.innerHTML = download;

        let timeTable = [
            {
                Day : 'Monday',
                Period1 : "MEE 202",
                Period2 : "MEE 202",
                Period3 : "CIVIL",
                Period4 : "MTH 222",
                Period5 : " ",
                Period6 : "MEE 204",
                Period7 : "MEE 204",
                Period8 : " ",
                Period9 : " ",
                Period10 : " ",
            },
            {
                Day : 'Tuesday',
                Period1 : " ",
                Period2 : " ",
                Period3 : "CVE 206",
                Period4 : "CVE 206",
                Period5 : " ",
                Period6 : "MEE 208",
                Period7 : "MEE 208",
                Period8 : " ",
                Period9 : " ",
                Period10 : " ",
            },
            {
                Day : 'Wednesday',
                Period1 : "CPE 202",
                Period2 : "CPE 202",
                Period3 : "EEE 202",
                Period4 : "EEE 202",
                Period5 : " ",
                Period6 : " ",
                Period7 : " ",
                Period8 : " ",
                Period9 : " ",
                Period10 : "GST 210 ",
            },
            {
                Day : 'Thursday',
                Period1 : "MEE 204",
                Period2 : "GIT 204 (ELECT)",
                Period3 : "CPE 202",
                Period4 : "GIT 204 (CIVIL)",
                Period5 : " ",
                Period6 : "EEE 202",
                Period7 : " ",
                Period8 : " ",
                Period9 : " ",
                Period10 : " ",
            },
            {
                Day : 'Friday',
                Period1 : " ",
                Period2 : "MTH 222",
                Period3 : "MTH 222",
                Period4 : " ",
                Period5 : " ",
                Period6 : " ",
                Period7 : " ",
                Period8 : " ",
                Period9 : "GIT 204 (MECH)",
                Period10 : " ",
            }
            ]
            
        var table = "";
        for(let i=0; i < timeTable.length; i++)
        {        
            table += `
                <tr>
                        <td style = "text-align: left;"> ${timeTable[i].Day}</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                </tr>
                `
            timetable.innerHTML = table; 
        }
        
        // ----------------------------------- Daily Time Table Creation -----------------------------------
        weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        date = new Date();
        today = weekday[date.getDay()];
        
        if(today == "Monday"){
            table = "";
            i=0;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["MEE 202", "MEE 202", "None", "MTH 222", "None", "MEE 204", "MEE 204", "None", "None", "None"];
        };
        if(today == "Tuesday"){
            table = "";
            i=1;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["None", "None", "CVE 206", "CVE 206", "None", "MEE 208", "MEE 208", "None", "None", "None"];
        };
        if(today == "Wednesday"){
            table = "";
            i=2;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["CPE 202", "CPE 202", "EEE 202", "EEE 202", "None", "None", "None", "None", "None", "GST 210"];
        };
        if(today == "Thursday"){
            table = "";
            i=3;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["MEE 204", "GIT 204 (ELECT)", "CPE 202", "GIT 204 (CIVIL)", "None", "EEE 202", "None", "None", "None", "None"];
        };
        if(today == "Friday"){
            table = "";
            i=4;
            {        
                table = `
                    <tr>
                        <td>Courses</td>
                        <td> ${timeTable[i].Period1}</td>
                        <td> ${timeTable[i].Period2}</td>
                        <td> ${timeTable[i].Period3}</td>
                        <td> ${timeTable[i].Period4}</td>
                        <td> ${timeTable[i].Period5}</td>
                        <td> ${timeTable[i].Period6}</td>
                        <td> ${timeTable[i].Period7}</td>
                        <td> ${timeTable[i].Period8}</td>
                        <td> ${timeTable[i].Period9}</td>
                        <td> ${timeTable[i].Period10}</td>
                    </tr>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["None", "MTH 222", "MTH 222", "None", "None", "None", "None", "None", "GIT 204 (MECH)", "None"];
        };
        if(today == "Sunday"){
            table = "";
            i=1;
            {        
                table = `
                    <p style = "text-align: left; margin-left: 50px;">There are no classes scheduled for today</p>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["None", "None", "None", "None", "None", "None", "None", "None", "None", "None"];
        };
        if(today == "Saturday"){
            table = "";
            i=1;
            {        
                table = `
                    <p style = "text-align: left; margin-left: 50px;">There are no classes scheduled for today</p>
                        `
                todaytimetable.innerHTML = table; 
            }
            table2 = ["None", "None", "None", "None", "None", "None", "None", "None", "None", "None"];
        };

        // -------------------------------------- Courses for The Semester --------------------------------------
    let course = [
        {
            CourseCode : "CVE 303",
            CourseTitle : "ADVANCED STRENGTH OF MATERIALS",
            Units : "3",
        },
        {
            CourseCode : "CVE 311",
            CourseTitle : "CIVIL ENGINEERING MATERIALS",
            Units : "3",
        },
        {
            CourseCode : "EEE 313",
            CourseTitle : "ENGINEERING ANALYSIS I",
            Units : "3",
        },
        {
            CourseCode : "EEE 309",
            CourseTitle : "ENGINEERING GEOLOGY",
            Units : "3",
        },
        {
            CourseCode : "CVE 307",
            CourseTitle : "ENGINEERING SURVEYING AND PHOTOGRAMMETRY",
            Units : "3",
        },
        {
            CourseCode : "CVE 301",
            CourseTitle : "STRUCTURAL MECHANICS I",
            Units : "3",
        },
        {
            CourseCode : "CVE 305",
            CourseTitle : "CIVIL ENGINEERING DRAWING",
            Units : "2",
        },
        {
            CourseCode : "GST 309",
            CourseTitle : "STUDIES IN LEADERSHIP V",
            Units : "1",
        },
        {
            CourseCode : "GIT 311",
            CourseTitle : "MATLAB PROGRAMMING I",
            Units : "0",
        }
    ];
    var displaycourse = "";
    for(let n=0; n < course.length; n++)
    {        
        displaycourse += `
                            <div class="coursecontent">
                                <div style = "text-align: center;"> ${course[n].CourseCode}</div>
                                <div> ${course[n].CourseTitle}</div>
                                <div style = "text-align: center;"> ${course[n].Units}</div>
                            </div>
                        `
        courses.innerHTML = displaycourse; 
    };
    }else if(department.length === 0){
        empty.style.display = "block";
        inc.style.display = "none";
    }else{
        inc.style.display = "block";
        empty.style.display = "none";
    }
    // -------------------------------------- Prev, Now and Next --------------------------------------
    const numbers = [10, 10, 10, 10, 10, 10, 10, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10]
    todayz = date.getDay();
    hour = date.getHours();
    prevHour = hour - 1;                 // To get Previous Hour
    currentHour = hour;                  // To get Current Hour
    nextHour = hour + 1;                 // To get Next Hour
    iprev = numbers[prevHour];           // Changes the value of hour to new index value from numbers
    inow = numbers[currentHour];         // Changes the value of hour to new index value from numbers
    inext = numbers[nextHour];           // Changes the value of hour to new index value from numbers
    prev = table2[iprev];                // Picks string from table2 based on the index value      
    now = table2[inow];                  // Picks string from table2 based on the index value
    next = table2[inext];                // Picks string from table2 based on the index value
    document.getElementById('prev').innerHTML = prev;
    document.getElementById('now').innerHTML = now;
    document.getElementById('next').innerHTML = next;
    if(iprev == 10){
        document.getElementById('prev').innerHTML = "None";
    };
    if(inext == 10){
        document.getElementById('next').innerHTML = "None";
    };
    if(inow == 10){
        document.getElementById('now').innerHTML = "None";
    };
    if (prevHour == -1){
        document.getElementById('prev').innerHTML = "None";
    };

    // -------------------------------------- Alert Present Class --------------------------------------
    setTimeout(function(){
        present = document.getElementById('now').innerHTML;
        if(todayz >= 1 && todayz < 6 && hour >= 8 && hour < 18){
            if(present != "None"){
                swal({
                    title: 'Ongoing Class!',
                    text: present,
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            }
        };
    }, 3000);

    

    // ---------------------------------------- Countdown Timer ----------------------------------------
    nextz = document.getElementById('next').innerHTML;
    if(todayz >= 1 && todayz < 6 && hour >= 7 && hour < 17 && nextz != "None"){
        const countToDate = new Date("Jan 5, 9999 15:00:00").getTime();
        let previousTimeBetweenDates
        setInterval(() => {
        const currentDate = new Date()
        const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
        flipAllCards(timeBetweenDates)

        previousTimeBetweenDates = timeBetweenDates
        }, 250)

        function flipAllCards(time) {
        const seconds = time % 60
        const minutes = Math.floor(time / 60) % 60

        flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
        flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
        flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
        flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
        }

        function flip(flipCard, newNumber) {
        const topHalf = flipCard.querySelector(".top")
        const startNumber = parseInt(topHalf.textContent)
        if (newNumber === startNumber) return

        const bottomHalf = flipCard.querySelector(".bottom")
        const topFlip = document.createElement("div")
        topFlip.classList.add("top-flip")
        const bottomFlip = document.createElement("div")
        bottomFlip.classList.add("bottom-flip")

        top.textContent = startNumber
        bottomHalf.textContent = startNumber
        topFlip.textContent = startNumber
        bottomFlip.textContent = newNumber

        topFlip.addEventListener("animationstart", e => {
            topHalf.textContent = newNumber
        })
        topFlip.addEventListener("animationend", e => {
            topFlip.remove()
        })
        bottomFlip.addEventListener("animationend", e => {
            bottomHalf.textContent = newNumber
            bottomFlip.remove()
        })
        flipCard.append(topFlip, bottomFlip)
        }
    }
}