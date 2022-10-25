const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

// ----------------- Prev. and Now Section ----------------------
$(window).scroll(function(){
	const pclass = document.querySelector('#class');
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > options.threshold) {
            pclass.classList.add('animate__flipInX');
            pclass.style.visibility = "visible";
        }
    });
    }, options);

    observer.observe(pclass);
});

// ----------------- Today Classes Section ----------------------
$(window).scroll(function(){
	const tclass = document.getElementById("today");;
	const tobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > options.threshold) {
            tclass.classList.add('animate__flipInY');
            tclass.style.visibility = "visible";
        }
    });
    }, options);
    
    tobserver.observe(tclass);
});
 
// ----------------- Announcement Section ----------------------
$(window).scroll(function(){
	const aclass = document.querySelector('#announcement');
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > options.threshold) {
            aclass.classList.add('animate__fadeIn');
            aclass.style.visibility = "visible";
        }
    });
    }, options);

    observer.observe(aclass);
});

// --------------------- Time-Table Section ----------------------
$(window).scroll(function(){
	const classt = document.getElementById("timetable");;
	const observert = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > options.threshold) {
            classt.classList.add('animate__fadeInUp');
            classt.style.visibility = "visible";
        }
    });
    }, options);
    
    observert.observe(classt);
});

// ------------------------ Courses Section ----------------------
$(window).scroll(function(){
	const cclass = document.getElementById("course");
    const classc = document.getElementById("courses");
    const cobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > options.threshold) {
            cclass.classList.add("animate__backInUp");
            classc.classList.add("animate__backInUp");
            cclass.style.visibility = "visible";
            classc.style.visibility = "visible";
        }
    });
    }, options);
    
    cobserver.observe(cclass);
});