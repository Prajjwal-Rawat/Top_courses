import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";


function Card({ course }) {
    
    const [like, setLike] = useState(false);

    const description = `${course.description.substring(0,100)}...`;

    function handleLike() {
        setLike(!like);

        like ? toast.warn('Like Removed') : toast.success('Liked Successfully');
    }

    return (
        <div className="w-[300px] p-4 mt-2 shadow-md hover:shadow-white rounded-md overflow-hidden bg-slate-900 bg-opacity-70 text-white hover:transition-all duration-1000 hover:scale-110">
            <div className="relative">
                <img src={course.image.url} alt={course.image.alt} />
                <div>
                    <button className="absolute right-1 bottom-[-12px] bg-white rounded-full p-1"
                     onClick={handleLike}>{like ? <FcLike fontSize={"1.75rem"} /> : <FcLikePlaceholder fontSize={"1.75rem"} />}
                    </button>
                </div>
            </div>
            <div className="text-start">
                <h2 className="text-lg font-bold mt-3 leading-6">{course.title}</h2>
                <p className="mt-2">{description}</p>
            </div>
        </div>
    )
}

export default Card;