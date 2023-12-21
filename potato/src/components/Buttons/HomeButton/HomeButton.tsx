import useHandleClick from "../../../hook/useHandleClick";
import { DefaultHomeButton } from "./DefaultHomeButton";


function HomeButton() {
    const { navigate, handleClick } = useHandleClick();

    const handleClickHome = (event: React.MouseEvent<HTMLButtonElement>) => {
        handleClick(event);
        navigate('/');
      };

  return (
    <div>
        <DefaultHomeButton handleClick={handleClickHome} />
    </div>
  );
}

export { HomeButton };