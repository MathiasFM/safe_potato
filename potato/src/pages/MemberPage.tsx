import BasePage from "../components/BasePage/BasePage";
import useAlert from "../hook/useAlert";
import { MemberLoginPage } from "../components/MemberPage/MemberLoginPage";


function MemberPage() {
  const alert = useAlert();

  return (
    <BasePage alert={alert}>
      <MemberLoginPage alert={alert} />
    </BasePage>
  )
}

export { MemberPage };
