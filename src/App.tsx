import { useState } from "react";
import Button from "./component/Event-type/Button";
import Input from "./component/Event-type/Input";
import Style from "./component/Style-Props/Style";
import Reducer from "./component/Hooks/Reducer";
import ContexThemProvider from "./component/ContexAPI/themcontex";

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
    </ContexThemProvider>
  );
}

export default App;
