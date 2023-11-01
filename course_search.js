let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git", Location: "Classroom 7",
    StartDate: "09/08/22", Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript", Location: "Classroom 9",
    StartDate: "11/22/22", Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java", Location: "Classroom 1", StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases", Location: "Classroom 7",
    StartDate: "03/16/23", Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular", Location: "Classroom 1", StartDate: "04/25/23",
    Fee: "50.00",
    }
    ];
    
    const numCourses = courses.length;
    getCourseStart("PROG200");
    getCourseTitle("PROJ500");
    getCheapCourseTitles(50);
    getClassesByLocation("Classroom 1");

    function getCourseStart(courseId) {
        let courseStart = "";
        for (i = 0; i < numCourses; i++) {
            let index = courses[i].CourseId; 
            if (index == courseId) {
                courseStart = courses[i].StartDate;
                break;
            }
        }
        let displayMessage = console.log(`Your course, ${courseId}, begins on ${courseStart}.`);
        return displayMessage; 
    }

    /**
     * Takes course ID and returns course title
     * @param {String} courseId 
     * @returns {String} Course Title
     */
    function getCourseTitle(courseId) {
        let courseTitle = "";
        for (i = 0; i < numCourses; i++) {
            let index = courses[i].CourseId;
            if (index == courseId) {
                courseTitle = courses[i].Title;
                break;
            }
        }
        let displayMessage = console.log(`Your course, ${courseId}, is titled ${courseTitle}.`);
        return displayMessage; 
    }

    /** 
     * Finds courses priced within given budget
     * @param {Array} courses 
     * @param {String} budget 
     * @returns {String} courses
     */
    function getCheapCourseTitles(budget) {
        let cheapCourses = [];
        for (i = 0; i < numCourses; i++) {
            let courseFee = Number(courses[i].Fee);
            if (courseFee <= budget) {
                cheapCourses.push(courses[i].Title);
            }
        }
        let displayMessage = console.log(`Here's a list of courses that cost $${budget} or less: ${cheapCourses}.`)
        return displayMessage;
    }

    function getClassesByLocation(classroom) {
        let coursesFilteredByLocation = [];

        for (i = 0; i < numCourses; i++) {
            let courseLocation = courses[i].Location;
            if (courseLocation == classroom) {
                coursesFilteredByLocation.push(courses[i].CourseId)
            }
        }

        let displayMessage = console.log(`Here's a list of courses that all meet in ${classroom}: ${coursesFilteredByLocation}.`);
        return displayMessage;
    }