import User from "./User";
import UserClass from "./UserClass";
const About = ()=>{
    return (
        <div className="about-wrapper w-[400px]">
            <h1 className="font-extrabold text-3xl my-4">About page</h1>
            <User name={'Arun baby (Function)'} />
            <UserClass/>
        </div>
    )
}

export default About;