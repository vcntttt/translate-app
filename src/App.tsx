import { useEffect } from "react";
import Box from "./components/Box";
import LanguageBar from "./components/LanguageBar";
import { useStore } from "./hooks/useStore";
import Buttons from "./components/Buttons";
import { SectionType } from "./types/constants";

function App() {
  const {
    // loading,
    fromLanguage,
    toLanguage,
    fromText,
    result,
    interchange,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  } = useStore();

  const translate = async () => {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(fromText)}
       &langpair=${fromLanguage}|${toLanguage}`
    );
    const data = await res.json();
    setResult(data.responseData.translatedText);
  };

  useEffect(() => {
    translate();
  }, [fromText, fromLanguage, toLanguage]);

  return (
    <main className="flex gap-x-4 flex-col">
      <img src="/logo.svg" className="w-96 mx-auto my-10" />
      <section className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
        <Box auto={true}>
          <LanguageBar
            type = {SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          <form>
            <textarea
              className="bg-transparent w-full h-60 p-2"
              placeholder="Enter text"
              maxLength={500}
              onChange={(e) => setFromText(e.target.value)}
              value={fromText}
            />
            <p className="flex justify-end opacity-50">{fromText.length}/500</p>
          </form>
          <div className="flex gap-x-2 justify-between">
          <Buttons text={fromText}/>
            <button type="submit" onClick={translate} className="flex bg-[#3662E3] hover:bg-[#7CA9F3] p-3 px-5 rounded-md">
              <img src="/Sort_alfa.svg" className="w-6" alt="translate-logo" />
              Translate
            </button>
          </div>
        </Box>
        <Box>
          <LanguageBar
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage}
            interchange={interchange}
          />
          {result ? (
            <p className="p-2 h-60">{result}</p>
          ) : (
            <p className="p-2 h-3/4">...</p>
          )}
          <div className="flex gap-x-2 justify-between">
           <Buttons text={result}/>
          </div>
        </Box>
      </section>
    </main>
  );
}

export default App;
