import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComp (){
    
   
    const display = false;
    return display ? <Welcome /> : <Code />;

}