const Button = ({ children, ...rest }: any) => {

  return (
    <>
      <button {...rest}>{children}</button>
    </>
  );
};

export default Button;
