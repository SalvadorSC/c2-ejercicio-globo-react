export const Globo = (props) => {
  const { posicionLeft, posicionTop, tamanyo, cambiarGlobo, puntuacionUp } =
    props;
  return (
    <i
      class="fab fa-fly"
      style={{
        top: posicionTop + "px",
        left: posicionLeft + "px",
        fontSize: tamanyo + "em",
      }}
      onMouseOver={cambiarGlobo}
      onClick={puntuacionUp}
    ></i>
  );
};
