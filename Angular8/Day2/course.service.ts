
export class CourseService{

   private course=[
        {
            name:'Angular8',
            duration:"60days",
            fee:12000
        },
        {
            name:'Spring Boot',
            duration:"30days",
            fee:5000
        },
        {
            name:'Core Java',
            duration:"60days",
            fee:15000
        },
        {
            name:'Docker',
            duration:"20days",
            fee:20000
        },
        {
            name:'Cloud',
            duration:"20days",
            fee:15000
        },

    ];

    getCourse(){
        return (this.course);
    }

}