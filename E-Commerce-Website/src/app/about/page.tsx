import About from "../components/About"
import AboutViews from "../components/AboutView"
import Policy from "../components/Policy"


function AboutPage(){
    return(
       <div>
         <About />
        <div className="max-w-[1100px] mx-auto"><AboutViews/></div> 
         <Policy />
       </div>
    )
}
export default AboutPage