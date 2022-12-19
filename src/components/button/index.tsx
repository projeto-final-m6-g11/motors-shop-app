interface IButtonProps {
  children: string;
}

const Button = ({ children, ...rest }: IButtonProps) => {
  return (
    <>
      <button {...rest}>{children}</button>
    </>
  );
};

export default Button;
