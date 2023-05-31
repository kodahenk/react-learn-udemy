import { useState } from "react";

function App() {
  // course değişken adı
  // setfirst değişkene değer atayacağımız fonksiyonA
  const [course, setfirst] = useState(11);

  const clickBtn = () => {
    setfirst("call func" + course);
  };

  return (
    <>
      <div>
        <button onClick={clickBtn}>clickBtn call</button>
        <button
          onClick={() => {
            setfirst("arrow func inline");
          }}
        >
          arrow func
        </button>
        <p>Course count: {course}</p>
      </div>
    </>
  );
}

export default App;
