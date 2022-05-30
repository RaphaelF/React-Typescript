import React from "react";
import style from "./Botao.module.scss";

interface Props {
  children?: React.ReactNode;
  tipo?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Botao({ onClick, tipo, children }: Props) {
  return (
    <button onClick={onClick} type={tipo} className={style.botao}>
      {children}
    </button>
  );
}

export default Botao;
