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

export default function LanguageBar({ onChange, type, value, interchange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (type === SectionType.From) {
    onChange(e.target.value as FromLanguage); // Maneja "auto" y otros idiomas
  } else {
    onChange(e.target.value as Language); // Solo idiomas, excluyendo "auto"
  }

  };
  return (
    <div className="flex gap-x-4 justify-between">
      <select
        aria-label="Selecciona el idioma"
        onChange={handleChange}
        value={value}
      >
        {type === SectionType.From && (
          <option value={AUTO_LANGUAGE}>Detectar idioma</option>
        )}

        {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
          <option key={key} value={key}>
            {literal}
          </option>
        ))}
      </select>
      {type === SectionType.To && (
        <Button onClick={() => {
          interchange?.();
        }}>
          <img src="/Horizontal_top_left_main.svg" />
        </Button>
      )}
    </div>
  );
}
