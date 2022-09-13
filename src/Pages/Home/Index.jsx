import React from "react";
import {Link} from "react-router-dom";
import * as S from "./style";

export default function Home(){
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <h2>HEY! WELCOME! IF YOU WANT TO RELAX GO TO DOG PAGE :D</h2>
          <Link to='/dogpage'>Dog Page</Link>
        </S.Wrapper>
      </S.Container>
    </>
  );
}