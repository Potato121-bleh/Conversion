import {useState, useRef, useEffect} from 'react';

function Decimaltobinaryconverter(){
  let decimal;
  let [answer, Setanswer] = useState()
  let [explaination, Setexplaination] = useState();
  let [userinput1, Setuserinput1] = useState();
  let [answerbtn, Setanswerbtn] = useState();
  let [Class4answer, SetClass4answer] = useState();
  let [Class4maincon, SetClass4maincon] = useState();
  let [displayanswer, Setdisplayanswer] = useState();
  let [displayfloatalert, Setdisplayfloatalert] = useState();
  let [triggerfloatalert, Settriggerfloatalert] = useState();

  //For behind comma
  let tscomma = [];
  let binarycommaval = [];
  let commaanswer;

  function convertarr2num(arr){
    //let formatedbehindcomma2 = behindcomma2.toString();
      //let formatedbehindcomma3 = formatedbehindcomma2.replaceAll(",", "")
      //formatedbehindcomma3 = Number(formatedbehindcomma3)
      //let num4check = formatedbehindcomma3;
  }


  let behindcomma;
  let [footer, Setfooter] = useState();
  let binaryval = [];
  let count = 0;
  //Testing 
  let ts = [];
  let userinput = document.getElementById("D2B-user-input");

  function handlesystem(){
    userinput = document.getElementById("D2B-user-input").value;

    let arruserinput = userinput.split(""); //Turn input into an array
    console.log(arruserinput)
    if(arruserinput.includes(".")){
      Settriggerfloatalert(true)
      //COMMDA SECTION

      let commaindex = arruserinput.indexOf(".");
      //We already get behind comma value known as hebindcomma var
      let behindcomma = arruserinput.slice(commaindex, arruserinput.length + 1)
      behindcomma.unshift(0)
      let behindcommavalue = behindcomma.toString();
      let formatedcomma1 = behindcommavalue.replaceAll(",", "")
      //let formatedcomma2 = formatedcomma1;
      formatedcomma1 = Number(formatedcomma1) //Ready to be used
      //start the system after checking the value
      
      
      tscomma.push(formatedcomma1)
      //the whole thing here is an checking system
      let lastnumarraycomma = tscomma.length - 1; //we also have to put it into an our while loop becuase it need to be update everytime the loop refresh
      console.log(tscomma)
      console.log(formatedcomma1)
      console.log(lastnumarraycomma)
      
      let testingrule = tscomma[lastnumarraycomma] * Math.pow(10,20)
      testingrule = String(testingrule)
      let testingrulearr = testingrule.split("");
      
      console.log(testingrulearr)
      let testingrulearrformate = testingrulearr.toString()
      let testingformate2 = Number(testingrulearrformate.replaceAll(",",""))
      console.log(testingrule)

      console.log(testingformate2) //if testingformate2 here == 0 which mean that loop has to stop
      console.log(tscomma)
      
      while(testingformate2 !== 0){
        let lastnumarraycomma = tscomma.length - 1;
        let toggleloopcheck;
        

        let x = tscomma[lastnumarraycomma] * 2;
        
        
        //Formate the x first so that it only get the value behind the comma
        //let formatex1 = String(x);
       // let formatex2 = formatex1.split("");
        ///formatex2[0] = 0;
        //let formatex3 = formatex2.toString("")
        //let formatex4 = Number(formatex3.replaceAll(",", ""));
        //console.log(formatex4)

        tscomma.push(x);
        console.log(tscomma)
        //CHECKING LOOP SYSTEM
        for(let i = 0; i < tscomma.length; i++){
          for(let j = i + 1; j < tscomma.length; j++){
            if(tscomma[i] == tscomma[j]){
              tscomma.pop();
              toggleloopcheck = true;
              console.log(tscomma)
              break
            }
          }
          if(toggleloopcheck == true){
            break
          }
        }
        if(toggleloopcheck == true){
          break
        }
        //orginalts.push(x)
        console.log(tscomma)

        //Convert x into array so that we can get the first digit of that val\
        lastnumarraycomma = tscomma.length - 1
        let fetchfirstdigitlastnum = String(tscomma[lastnumarraycomma]);

        console.log(fetchfirstdigitlastnum)
        let fetchfirstdigitarr = fetchfirstdigitlastnum.split("");
        let fetchfirstdigit = fetchfirstdigitarr[0];
        console.log(fetchfirstdigit)

        //After that we push the first digit into an binarycomma array;
        binarycommaval.push(fetchfirstdigit)
        console.log(binarycommaval)

        //Checking system
        let LSchecking = String(tscomma[lastnumarraycomma])
        let LScheckingarr = LSchecking.split("");
        LScheckingarr[0] = 0;
        console.log(LScheckingarr)
        //Convert it back into string
        let LScheckingarr2string = LScheckingarr.toString("");
        let LScheckingready2use = Number(LScheckingarr2string.replaceAll(",", ""));
        console.log(LScheckingready2use)
        let LStestingrule = LScheckingready2use * Math.pow(10,20)
         testingformate2 = LStestingrule;
         console.log(typeof testingformate2)
         console.log(testingformate2)

        //Catch the end result if thev testingformate2 == 0 
        //if(testingformate2 == 0){}
        tscomma[lastnumarraycomma] = LScheckingready2use;

        console.log(tscomma)
        console.log(binarycommaval)
        let formatecomma2answer1 = binarycommaval.toString("")
        commaanswer = formatecomma2answer1.replaceAll(",", "");
        

        //The comma Section has been calculated the answer of comma known as commaanswer
      }
      console.log(commaanswer)


      console.log(typeof userinput)
      //Here is where the front value start 
      //let frontuserinput = userinput

    Setuserinput1(userinput);
    console.log(userinput)
    userinput = Number(userinput);
    if(isNaN(userinput)){
      window.alert("Invail Input Please insert Number")
    }
    else if(userinput == ""){
      window.alert("Invail Input Please insert Number")
    }
    else{
      Setanswer("")
      ts.push(userinput);
      let reversets = ts.concat().reverse()
      while(reversets[0] != 1){
          let lastnumarray = ts.length - 1;
          let op2 = ts[lastnumarray] % 2;
          let b = Math.floor(ts[lastnumarray] / 2)
        ts.push(b);
        binaryval.push(op2);
        reversets = ts.concat().reverse()
        console.log(binaryval)
        console.log(ts)
        if(reversets[0] == 1){
          binaryval.push(0);
          let lenbinaryval = binaryval.length - 1
          binaryval[lenbinaryval] += 1;
          
          let explaination1 = binaryval.map(() => {count++; return(<li>{ts[count - 1]} / 2 = {ts[count]} with the reminder of {binaryval[count - 1]} <br/></li>)})
          setTimeout(() => {
            console.log(explaination1);
            let formatanswer1 = binaryval.reverse();
            let formatanswer1turn2arr = formatanswer1.toString("");
            let formatanswer1turn2arr2 = formatanswer1turn2arr.replaceAll(",", "")
            let formatanswer1turn2arr3 = formatanswer1turn2arr2.split("");
            


            console.log(formatanswer1turn2arr3);
            let findcommainformatanswer1 = formatanswer1turn2arr3.indexOf(".");
            let selectfrontonly = formatanswer1turn2arr3.splice(0, findcommainformatanswer1)
            console.log(selectfrontonly)
      let formatanswer2 = selectfrontonly.toString();
      let formatanswer3 = formatanswer2.replaceAll(",", "")
      //let formatanswer3 = formatanswer2.replaceAll(",","")
      console.log(formatanswer3)
      Setanswer(`${formatanswer3}.${commaanswer}`)
            Setexplaination(explaination1);
            Setanswerbtn("show")
          }, 1000);
          
          //ANIMATION SECTION
          
        }
      } 
    }

      //This right here is just a checking system for rule of main operation
      Setuserinput1(formatedcomma1); //Idk what to do with this
      //console.log(formatedcomma1)
      formatedcomma1 = Number(formatedcomma1);
      if(isNaN(formatedcomma1)){
        window.alert("Invail Input Please insert Number")
      }
      else if(formatedcomma1 == ""){
        window.alert("Invail Input Please insert Number")
      }
      else{
        
      }
    }
    else if(arruserinput.includes(",")){
      window.alert("You insert ',' you mean '.'? ")
    }
    else{
      Settriggerfloatalert(false)

    Setuserinput1(userinput);
    console.log(userinput)
    userinput = Number(userinput);
    if(isNaN(userinput)){
      window.alert("Invail Input Please insert Number")
    }
    else if(userinput == ""){
      window.alert("Invail Input Please insert Number")
    }
    else{
      Setanswer("")
      ts.push(userinput);
      let reversets = ts.concat().reverse()
      while(reversets[0] != 1){
          let lastnumarray = ts.length - 1;
          let op2 = ts[lastnumarray] % 2;
          let b = Math.floor(ts[lastnumarray] / 2)
        ts.push(b);
        binaryval.push(op2);
        reversets = ts.concat().reverse()
        console.log(binaryval)
        console.log(ts)
        if(reversets[0] == 1){
          binaryval.push(0);
          let lenbinaryval = binaryval.length - 1
          binaryval[lenbinaryval] += 1;
          
          let explaination1 = binaryval.map(() => {count++; return(<li>{ts[count - 1]} / 2 = {ts[count]} with the reminder of {binaryval[count - 1]} <br/></li>)})
          setTimeout(() => {
            console.log(explaination1);
            let formatanswer1 = binaryval.reverse();
      let formatanswer2 = formatanswer1.toString();
      let formatanswer3 = formatanswer2.replaceAll(",","")
      Setanswer(formatanswer3)
            Setexplaination(explaination1);
            Setanswerbtn("show")
          }, 1000);
          
          //ANIMATION SECTION
          
        }
      } 
    }
    }
  }  
  function handleshowresult(){
              //ANIMATION SECTION
                SetClass4answer("move-con-up");
                setTimeout(() => {
                  SetClass4answer("freeze-move-up-con");
                  SetClass4maincon("freeze-change-h");
                  if(triggerfloatalert === true){
                    Setdisplayfloatalert("show")
                  }
                  else{
                    Setdisplayfloatalert("hide")
                  }
                }, 1000);
              setTimeout(() => {
                Setdisplayanswer("show")
                
                
              }, 2000);
  }
  function handlereset(){
    Setdisplayanswer("hidden");
    SetClass4answer("move-con-up-back");
      SetClass4maincon("");
    userinput.value = "";
    Setanswer("")
    Setanswerbtn("hidden")
  }


  return(<>
  <div className={`D2B-main-container ${Class4maincon} `}>
    <div className={`D2B-second-container ${Class4answer}`}>
    <h1 id='D2B-title' >Convert From Decimal to Binary</h1>
    <br/>
  <input id="D2B-user-input" value={decimal} />
  <br/><br/>
  <button className={`D2B-submit-button2 ${answerbtn}`} onClick={handleshowresult} >Explaination</button>
  <button className='D2B-submit-button' onClick={handlesystem} >Submit</button>
  
  
  <div className={answerbtn}> 
  <p className={`D2B-answer-text ${answerbtn}`} id="D2B-answer-box" >Your Answer is: {answer}</p>
  <button className={`D2B-reset-btn ${answerbtn}`} onClick={handlereset} >Reset</button>
  </div>
 
  
  
  <div className={`D2B-answer ${displayanswer}`}>
    <p>First of all we use division method.<br/>
    We take our {userinput1} which is our decimal number<br/>
    and divided by 2 until it the answer of division reach 1<br/>
    Here is how we do it:
    </p>
    <div className='D2B-caculate-answer' >
      <p id='D2B-explaination' >{explaination}</p>
      <br/>
      <p>The answer of our binary is where we count <br/>from bottom to the top</p>
      <p id="D2B-answer-box" >Which is: <br/><br/> <span className='D2B-total-answer' >{answer}</span></p>
      <br/>
      <p className={displayfloatalert}  >NOTE: In this case we have float number, We just take the float number <br/> 
      and than mutiply by 2 amd take the integers of that result as our binary number<br/>
       until the floating turn to .00 and we are done. <br/>
       But if the after a ton of mutiply the number are in loop, we have to stop and use <br/> our binary num as answer that</p>
    </div>
  </div>
  </div>
  </div>
  <br/>
  {/* FOOTER */}
  <div className={`D2B-footer`}>
      <p id='D2B-footer-credit' >This system has created by Ly Sochetra</p>
      <div className='D2B-icon-con' >
        <i className="fa-brands fa-facebook fa-2x  D2B-all-icon"></i>
        <i className="fa-brands fa-instagram fa-2x  D2B-all-icon "></i>
        <i className="fa-brands fa-telegram fa-2x  D2B-all-icon "></i>
      </div>
  </div>
  </>)
}

export default Decimaltobinaryconverter;