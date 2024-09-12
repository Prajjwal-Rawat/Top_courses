import Card from './Card'


function Cards({ courses, category }) {


    if(courses === null){
        return(
            <div className='flex flex-col items-center text-center m-auto text-white'>
                 <h1 className='text-2xl font-bold text-red-700'>404</h1>
                <h2 className='font-bold text-lg'>No Courses Found</h2>
                <p>Please try Again Later</p>
            </div>
        )
    }


    function getcoursesData() {
        if(category === "All"){

            const coursesArr = [];
            
            Object.values(courses).forEach(key => {
                key.forEach(course => {
                    coursesArr.push(course);
                })
            });

            return coursesArr

        }else{
            return courses[category];
        }
    }

   


    return (
        <div className=' mt-2 max-w-[1000px] gap-6 mx-auto min-h-[50vh] flex flex-wrap justify-center'>
            {
                getcoursesData().map((course => {
                    return <Card key={course.id} course={course} />
                }))
            }
        </div>
    )
}

export default Cards;