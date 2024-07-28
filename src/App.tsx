import { useState } from "react";
import Button from "./component/Event-type/Button";
import Input from "./component/Event-type/Input";
import Style from "./component/Style-Props/Style";
import Reducer from "./component/Hooks/Reducer";
import ContexThemProvider from "./component/ContexAPI/themcontex";
import InputRef from "./component/UseRef-type/input.Ref.Simple";
import { MutableRef } from "./component/UseRef-type/Mutable.Ref";
import { Toast } from "./component/Template-Literals-Exclude/Positions";
import RandomNumber from "./component/Restricting-Props/Random-Number";
import PrivetPage from "./component/Component-Prop/PrivetPage";
import Login from "./component/Component-Prop/Login";
import Panel from "./component/Component-Prop/Panel";
import UsersPage from "./component/Extracting-Components-Prop-Types/Users.page";
import Text from "./component/ElementHTMLType/Text";

const App = (): JSX.Element => {

  const [text, setText] = useState("")

  const click = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(text);

  }

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <ContexThemProvider>
      <h1>app page</h1>
      <Button clickhandler={click} />
      <Input changeHandle={onchangeHandler} value={text} />

      <Style style={{ "color": "red" }} />
      <Reducer />
      <InputRef />
      <MutableRef />
      <Toast positions="center"/>
      <RandomNumber  value={{value:-10,isNegative:false}}  />
      <PrivetPage isLogin={false} Login={Login} Panel={Panel}/>
      <UsersPage isLogin={true} name="jams" id={1}/>
      <Text title="HI TS" element={"h1"}/>
    </ContexThemProvider>
  );
}

export default App;
