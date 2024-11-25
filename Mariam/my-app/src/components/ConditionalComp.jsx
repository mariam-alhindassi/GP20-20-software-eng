import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComp (){
    
   
    const display = true;
    return display ? <Welcome /> : <Code />;

}