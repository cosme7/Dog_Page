import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as S from "./style";

export default function Card(){

  const [doggo, setDoggo] = useState ()
  const [status, setStatus] = useState (false)

  const getDoggo = () => {
    axios.get('https://dog.ceo/api/breeds/image/random').then( response => {
      console.log(getDoggo)
      setDoggo(response.data.message)
      setStatus(true)
    });
  };

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <h1>If you want to relax, click the button!</h1>
          <Link to='/'>Return to Home</Link>
          {status  &&  <img src={doggo} alt='doguinho fofo' />}
          <button onClick={() =>{getDoggo()}}>Click Here!</button>
        </S.Wrapper>
      </S.Container>
    </>
  );
}