import styled from "styled-components";
import React from "react";

function Rules() {
    return (
        <RulesContainer>
         <h2>How to play dice game</h2>
         <div className="text">
            <p>Select any number.</p>
            <p>Click on dice image.</p>
            <p>After click on dice, if selected number is equal to dice number then, you will get same point as dice number.</p>
            <p>But, if you get wrong guess then, 2 points will be deducted from your score.</p>
         </div>
        </RulesContainer>
    );
}

export default Rules;

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background-color: #fbf1f1;
    padding: 20px;
    margin-top: 40px;
    border-radius: 10px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }
`