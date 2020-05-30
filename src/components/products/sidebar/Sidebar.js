import React from "react";
import "../../../static/css/main_content/Sidebar.css";
import SideItem from "../../resusable/SideItem";


//LIST FOR SHIRTS
/*
    1. Shirt Size
    2. No title just gonna go off of tags and say
        spring 
        summer
        winter
        fall
    3. Shirt Color (maybe)
    4. Shirt neck type v or regular
    5. Plain or design
    6. Gender and age pick
    7. Price Range

    COAT 
    1. Coat Size
    2. Men's or Women's
    3. Age Group
    4. Weather (Summer, Spring, Fall, Winter)
    5. Price Range

    SHOE
    1. Men's or Women's
    2. Age Group
    3. Casual or dress
    4. Shoe Size
    5. Price Range

    WATCHES 
    1. Men's or Women's
    2. Material
    3. Casual or dress
    4 Price Range
    5. Watch Colors (maybe)
*/ 

const Sidebar = (props) => {
    return (
        <div className="sidebar_container">
          <form>
              {/* First Check Box Area */}
            <SideItem title="Shirt Size" firstOne="Small" secondOne="Medium" thirdOne="Large"> 
            </SideItem>

            <SideItem firstOne="Winter" secondOne="Summer" thirdOne="Spring">
               <div>
                <input type="checkbox" value="Fall" name="fall" id="fall" />
                <label for="fall">Fall</label>
               </div>  
           </SideItem>

           <SideItem firstOne="V Neck" secondOne="Round Neck" thirdBoxStyle={{display: "none"}} title="Shirt Type"> </SideItem>
          
          <SideItem title="Gender" firstOne="Male" secondOne="Female" thirdBoxStyle={{display: "none"}} >    </SideItem>
          
          <SideItem title="Price Range" firstOne="< $50" secondOne="< $100" thirdOne="< $150">
              <div style={{border:'solid blue'}}>
              <input type="checkbox" id="<$300" value="<$300" name="<$300" />
              <label for="<$300"> &#60; $300 </label>
              </div>
          </SideItem>
          </form>
        </div>
    ); 
}

export default Sidebar;