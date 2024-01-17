import {
  SUPPORTED_LANGUAGES,
  AUTO_LANGUAGE,
  SectionType,
} from "../types/constants";
import { Language, FromLanguage } from "../types/types";
import { Button } from "./Buttons";

type Props =
  | {
      type: SectionType.From;
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
      interchange?: () => void;
    }
  | {
      type: SectionType.To;
      value: Language;
      onChange: (language: Language) => void;
      interchange?: () => void;
    };

export default function LanguageBar({
  onChange,
  type,
  value,
  interchange,
}: Props) {

  const handleChange = (language:string) => {
    if (type === SectionType.From) {
      onChange(language as FromLanguage);
    } else {
      onChange(language as Language);
    }
  };
  const baseClass = 'border-0 font-semibold bg-transparent text-opacity-35'
  const activeClass = `bg-[#4D5562] ${baseClass} text-opacity-100`;

  return (
    <div className="flex gap-x-4 justify-between">
      <div className="flex gap-x-2">
      {type === SectionType.From && (
        <Button
          key="auto"
          onClick={() => {
            handleChange(AUTO_LANGUAGE);
          }}
          class={value === "auto" ? activeClass : baseClass}
        >
          Detectar idioma
        </Button>
      )}
      {
        Object.entries(SUPPORTED_LANGUAGES).map(([key, name]) => (
          <Button
            key={key}
            onClick={() => {
              handleChange(key);
            }}
            class={value === key ? activeClass : baseClass}
          >
            {name}
          </Button>
        ))
      }
      </div>
      {type === SectionType.To && (
        <Button
          onClick={() => {
            interchange?.();
          }}
          class="w-10 p-1 px-2"
        >
          <img src="/Horizontal_top_left_main.svg" />
        </Button>
      )}
    </div>
  );
}
